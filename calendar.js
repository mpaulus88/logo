
/* JS Document - Map.js
 * november 2012
 */

/*jslint regexp: true, vars: true, white: true, browser: true */
/*jshint nonstandard: true, browser: true, boss: true */
/*global jQuery */

( function ( $ ) {
	"use strict";
	// -- globals
	var $events=[],
		$eventsType,
		$type,
		$title,
		$description,
		$organisator,
		$des,
		$eventsTitle;
	// -- methods
	var hideEvents=function(){
		
	};
	var setEvents=function(){
		$des=$events['description'];
		$($des).hide();
		$events['type'].hide();
		console.log($events['description'].hide());
		$events['organisator'].hide();
		$events['object'].css( 'cursor', 'pointer' );
		console.log('hidden');

		console.log($('.views-field-field-description-evenement').length);
	};
	var displayEvent=function(){
		console.log($(this).children($description+':eq("0")'));
		$description=$(this).children($description+':eq("0")').text();
		//$description=$('description')
		$('.displayedEvent').remove();
		console.log($description);
		$title=$(this).children($title+':eq("0")').text();
		$organisator=$(this).children($organisator+':eq("0")').text();
		//$description=$events.get(1);
		$type=$(this).children($type+':eq("0")').text();
		$('#cleared').before('<div class="displayedEvent"><h2 class="eventTitle">'+$title+'</h2><p class="eventType">'+$type+'</p><p class="eventDescription">'+$description+'</p><p class="organisator">'+$organisator+'</p></div>');
		
	};
	var ieSpan=function(){

		if(!$events['description'])
		{
			$description='.views-field-field-description-evenement .field-content';
			$events['description']=$('.views-field-field-description-evenement .field-content');
		}
		else
		{
			$description='.views-field-field-description-evenement .field-content span';
		}
		if(!$events['type'])
		{
			$title='.views-field views-field-field-intitul-de-l-vennement .field-content';
			$type='.views-field-field-type-evennement .field-content';
			$events['type']=$('.views-field-field-type-evennement .field-content');
			console.log('false')
		}
		else
		{
			$type='.views-field-field-type-evennement .field-content span';
			$title='.views-field views-field-field-intitul-de-l-vennement .field-content span';
		}
		$organisator='.views-field-field-organisateur .field-content';

	};

	$( function () {
		$events['description']=$('.views-field-field-description-evenement .field-content span');
		$events['object']=$('.view-item-agenda');
		$events['type']=$('.views-field-field-type-evennement .field-content span');
		$events['organisator']=$('.views-field-field-organisateur .field-content');
		// -- onload routines
		ieSpan();
		hideEvents();
		setEvents();
		$events['object'].bind('click',displayEvent);
		



	} );

}( jQuery ) );

