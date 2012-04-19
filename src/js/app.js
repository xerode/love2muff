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
			this.view = new L2MView( this.model, this.controller, $( "div#mainView" ) );

		}

		return {
			initialise: initialise
		};
	}
);