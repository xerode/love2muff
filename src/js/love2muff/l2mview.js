define(
	[
		'Class'
	],
	function( Class ) {
		
		var L2MController = Class.extend( {

			init: function( m, c ) {

				this.model = m;
				this.controller = c;

				this.form = {};
				
			}
			
		} );

		return L2MController;

	}
);