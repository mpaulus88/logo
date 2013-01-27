
/* JS Document - Map.js
 * november 2012
 */

/*jslint regexp: true, vars: true, white: true, browser: true */
/*jshint nonstandard: true, browser: true, boss: true */
/*global jQuery */

( function ( $ ) {
	"use strict";
	// -- globals
	var $reg,
		aSearch=[],
		$research,
		aMarker=[],
		gmap,
		$link,
		$regex;

	// -- methods
	var changeHref=function(){
		$link.attr('href','#').css( 'cursor', 'default' );
		};
	var disableLink=function(e){
		e.preventDefault();
		e.returnValue = false;
		console.log('clicked');
		};
	var getCoord=function(){
		var i=0;
		$research=$('.views-row');
		$research.hide();
		console.log($research);
		$('.views-field-field-geofield .field-content').each(function(){
			
			$reg=$(this).text();
			console.log($reg);
			$regex=/POINT(.*)/;
			var point = $reg.replace($regex, "$1");
			point=point.replace('(','');
			point=point.replace(')','');
			console.log(point);
			aSearch[i]=point.split(' ');
			console.log($(".views-field-title:eq("+i+") a").text());
			i++;
		});

		
		
		console.log(aSearch);

	};
	var generateMap=function(){
		$('#gmap').css({height:'600px', width:'100%'});
			var styles=
			[
			  {
			    "featureType": "landscape.natural.landcover",
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      { "visibility": "off" }
			    ]
			  },{
			    "elementType": "labels.text",
			    "stylers": [
			      { "visibility": "off" }
			    ]
			  },{
			    "featureType": "water",
			    "stylers": [
			      { "visibility": "on" },
			      { "color": "#353632" }
			    ]
			  },{
			    "featureType": "landscape",
			    "stylers": [
			      { "color": "#d4d1d0" }
			    ]
			  }
			];
			var styledMap = new google.maps.StyledMapType(styles,
    		{name: "Styled Map"});
    		
    		var mapOptions = {
			    zoom: 2,
			    center: new google.maps.LatLng(30.8466, 4.3524),
			    scrollwheel: false,
			    panControl: false,
    			zoomControl: false,
    			scaleControl: false,
    			streetViewControl: false,
  				overviewMapControl: false,
  				MapTypeControl: false,
			    mapTypeControlOptions: {
			      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']}
			  	};

			gmap = new google.maps.Map(document.getElementById('gmap'),
    			mapOptions);
			gmap.mapTypes.set('map_style', styledMap);
 			 gmap.setMapTypeId('map_style');
		};
		

	var addMarker=function()
		{
			var pinColor = "F0F0F0";
		    var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
		        null,
		        null,
		        null,
		        new google.maps.Size(15, 23),
		        new google.maps.Point(0,0),
		        new google.maps.Point(10, 34));
			    var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
			        new google.maps.Size(40, 37),
			        new google.maps.Point(0, 0),
			        new google.maps.Point(12, 35));
			 var markers=[];
			for(var i=0;i<aSearch.length;i++)
			{	
				console.log(aSearch.length-1);
				console.log(aSearch);
				var marker_pos=new  google.maps.LatLng(aSearch[i][2],aSearch[i][1]);
				var marker= new google.maps.Marker({
				map:gmap,
				icon: pinImage,
                shadow: pinShadow,
                id:i,
				position:marker_pos,
				title:$(".views-field-title:eq("+i+") a").text()
				});
				markers.push(marker);
				marker.set('id',i);
				google.maps.event.addListener(marker, 'click', function() {
					console.log(i);
					console.log(this.get('id'));
					$research.fadeOut(400);
					$research.eq(this.get('id')).fadeIn(400);
			
			

});
	}};
	$( function () {
		$link=$('.views-field-title a');
		
		// -- onload routines
		getCoord();
		changeHref();
		generateMap();
		addMarker();
		$link.bind('click',disableLink);
		



	} );

}( jQuery ) );

