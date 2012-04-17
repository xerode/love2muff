define(
	[
		'jQuery',
		'classdemo',
		'love2muff/l2mmodel',
		'love2muff/l2mcontroller',
		'love2muff/l2mview',
	],
	function( $, Person, L2MModel, L2MController, L2MView ) {

		var initialise = function() {

			var model = new L2MModel();
			var controller = new L2MController( model );
			var view = new L2MView( model, controller );

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