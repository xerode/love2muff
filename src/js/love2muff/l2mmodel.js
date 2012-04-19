define(
	[
		'Class',
		'love2muff/l2msearch'
	],
	function( Class, L2MSearch ) {
		
		var L2MModel = Class.extend( {

			init: function() {
				
			},

			search: function( type, searchFor, replaceWith ) {

				this.query = new L2MSearch( type, searchFor, replaceWith, 0 );

				// bind listener
				this.query.execute();

			},

			controllerTest: function() {

				alert( "Controller test!" );

			}
			
		} );

		return L2MModel;

	}
);