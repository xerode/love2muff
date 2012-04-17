define(
	[
		'jQuery',
		'classdemo'
	],
	function( $, Person ) {

		var initialise = function() {
			// Pass in our Router module and call it's initialize function
			$( document ).ready( 
				function() {
					var p = document.createElement( "p" );

					var prole = new Person();

					$( p ).text( prole.demo() );

					$( 'section' ).append( p );

				}
			);

		}

		return {
			initialise: initialise
		};
	}
);