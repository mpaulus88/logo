 //jQuery for Drupal 7 [BEGIN]
(function ($) {
// [jQuery BEGIN] début des fonctions
$(document).ready(function() {
// ****************************************************************
/* votre code jQuery ici !! */

/*jslint regexp: true, vars: true, white: true, browser: true */
/*global jQuery, google */



	var 	coords,
			gMap,
			gGeocoder,
			gMarker,
			gPosition,
			$recherches = $('.node-recherches');
			

	var generateMap = function( n ) {
		gMap = new google.maps.Map( document.getElementById( 'node-18' ), {
			zoom: 1,
			center: new google.maps.LatLng( 0, 0 ),
			mapTypeId: google.maps.MapTypeId.HYBRID
		} );


	  /* On récupère la premiere des merveilles */
	  var rechercheCourante = $recherches.first();

	  
	  for(var i=0; i < $recherches.length; i++,  rechercheCourante = rechercheCourante.next())
	  {
	  	/* Vu qu'on récupère une chaine de caractère, on doit la splitter et la convertire en float pour pouvoir l'utiliser */
 		var coordonnees = $("div.name-field-geofield");//.match(/\(([0-9AB]+)\)/i).explode(" ");
 		console.log(coordonnees);
		var myLatlng = new google.maps.LatLng(parseFloat(coordonnees[0]),parseFloat(coordonnees[1]));


		gMarker = new google.maps.Marker({
	      position: myLatlng,
	      map: gMap,
	      title: $recherches.children('a[property="dc:title"]'),
	      animation: google.maps.Animation.DROP
		});
	  }
	}; // generateMap
	
	/* Fonction qui va faire le zoom au click sur un UL */

			
	$(function(){
		generateMap();
		
		/* Ecouteur d'évenement au click sur une image */
		$("div.span2 ul li").on("click", updateMap);
		var $recherches = $('.node-recherches');
		 

	});
	
// ****************************************************************
// [jQuery END] fin des fonctions
});
// jQuery for Drupal 7 [END]
}(jQuery));



