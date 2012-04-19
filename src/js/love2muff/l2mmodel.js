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

				// clear view results
				// show loading spinner in view

				this.query = new L2MSearch( type, searchFor, replaceWith, 0 );

				// bind listener
				this.query.events.on( "load_complete", this.onQueryComplete, this )
				this.query.execute();

			},

			getMoreSearchResults: function() {

				// show loading spinner in view
				this.query.page += 1;

				// bind listener
				this.query.execute();

			},

			onQueryComplete: function() {

				// unbind listener
				this.query.events.off( "load_complete", this.onQueryComplete, this );

				// parse results and send them to view

				alert( "Received by model" );

			}
			
		} );

		return L2MModel;

	}
);