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

			},

			setSearch: function( type, search, replace ) {

				this.model.search( type, search, replace );

			},

			getMoreSearchResults: function() {

				this.model.getMoreSearchResults();

			}
			
		} );

		return L2MController;

	}
);