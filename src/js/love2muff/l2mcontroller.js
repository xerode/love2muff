define(
	[
		'Class'
	],
	function( Class ) {
		
		var L2MController = Class.extend( {

			init: function( m ) {

				this.model = m;
				
			},

			test: function() {

				this.model.controllerTest();

			}
			
		} );

		return L2MController;

	}
);