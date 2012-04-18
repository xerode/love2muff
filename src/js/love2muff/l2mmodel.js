define(
	[
		'Class',
		'love2muff/l2msearch'
	],
	function( Class, L2MSearch ) {
		
		var L2MModel = Class.extend( {

			init: function() {

				this.search = new L2MSearch( "song", "love", "muff", 0 );

				this.search.execute();
				
			},

			controllerTest: function() {

				alert( "Controller test!" );

			}
			
		} );

		return L2MModel;

	}
);