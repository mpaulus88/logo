
/* JS Document - Map.js
 * november 2012
 */

/*jslint regexp: true, vars: true, white: true, browser: true */
/*jshint nonstandard: true, browser: true, boss: true */
/*global jQuery */

( function ( $ ) {
	"use strict";
	// -- globals
	var $contact,
	$blockInfo;
	

		
	

	// -- methods
	var displayInfo=function(){
		if($(this).next('div').is(':hidden') )
		{
		$('#block-block-7 div').slideUp();
		$(this).next('div').slideDown();
		console.log('clicked');
		}
		console.log('clicked');
	};
	var setBlock=function(){
		$contact.css( 'cursor', 'pointer' );
		$($blockInfo.get(1)).hide();
		$($blockInfo.get(2)).hide();
	};

	$( function () {
		$contact=$("#locomotion h2");
		$blockInfo=$("#locomotion h2 +div")
		
		// -- onload routines
		setBlock();
		$contact.bind('click',displayInfo);
		



	} );

}( jQuery ) );

