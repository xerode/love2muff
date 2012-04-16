define(
	[
		'jQuery',
		'Class',
		'classdemo'
	],
	function( $, Class, Person ) {

		var initialise = function() {
			// Pass in our Router module and call it's initialize function
			$( document ).ready( 
				function() {
					var p = document.createElement( "p" );

					$( p ).text( "jQuery loaded and working as expected" );

					$( 'body' ).append( p );

					var prole = new Person();

					prole.demo();

				}
			);

		}

		return {
			initialise: initialise
		};
	}
);