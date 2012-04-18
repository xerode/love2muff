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

			this.model = new L2MModel();
			this.controller = new L2MController( this.model );
			this.view = new L2MView( this.model, this.controller );

			/*
			$( document ).ready( 
				function() {
					var p = document.createElement( "p" );

					var prole = new Person();

					$( p ).text( prole.demo() );

					$( 'section' ).append( p );

				}
			);
			*/

		}

		return {
			initialise: initialise
		};
	}
);