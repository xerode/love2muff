define(
	[
		'Class',
		'Events',
		'love2muff/l2msearch'
	],
	function( Class, Events, L2MSearch ) {
		
		var L2MModel = Class.extend( {

			init: function() {

				this.name = "fff";
				
				this.events = new Events();
				this.results = [];

			},

			initialise: function() {
				this.notify( "init" );
			},

			notify: function( s ) {

				if( s == "" ) {
					s = "update";
				}

				this.events.trigger( s );

			},

			search: function( type, searchFor, replaceWith ) {

				// clear view results
				// show loading spinner in view
				this.notify( "clear" );
				this.notify( "loading" );

				this.query = new L2MSearch( type, searchFor, replaceWith, 0 );

				// bind listener
				this.query.events.on( "results", this.onQueryComplete, this );
				this.query.execute();

			},

			getMoreSearchResults: function() {

				// show loading spinner in view
				this.notify( "loading" );

				this.query.page += 1;

				// bind listener
				this.query.events.on( "results", this.onMoreResultsComplete, this );
				this.query.execute();

			},

			onQueryComplete: function() {

				// unbind listener
				this.query.events.off( "results", this.onQueryComplete, this );

				this.results = this.query.results;

				// parse results and send them to view
				this.notify( "results" );

			},

			onMoreResultsComplete: function() {

				// unbind listener
				this.query.events.off( "results", this.onMoreResultsComplete, this );

				this.results = this.query.results.concat( this.results );

				// parse results and send them to view
				this.notify( "more_results" );

			}
			
		} );

		return L2MModel;

	}
);