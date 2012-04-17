define(
	[
		'Class'
	],
	function( Class ) {
		
		var L2MController = Class.extend( {

			init: function( m ) {

				this.model = m;
				
			}
			
		} );

		return L2MController;

	}
);