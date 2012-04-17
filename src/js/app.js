define(
	[
		'jQuery',
		'classdemo',
		'love2muff/l2mmodel'
	],
	function( $, Person, L2MModel ) {

		var initialise = function() {

			var model = new L2MModel();

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