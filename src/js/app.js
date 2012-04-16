define(
	[
		'jQuery'
	],
	function( $ ) {

		var initialise = function() {
			// Pass in our Router module and call it's initialize function
			$( document ).ready( 
				function() {
					var p = document.createElement( "p" );

					$( p ).text( "jQuery loaded and working as expected" );

					$( 'body' ).append( p );

				}
			);
		}

		return {
			initialise: initialise
		};
	}
);