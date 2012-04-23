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

				var url = new String( window.location );
	
				if( url.indexOf( "#" ) > -1 ) {
					
					var hash = url.split( "#" );
					
					if( hash.length > 0 ) {
						
						var qs = new String( hash[ 1 ] );
						
						var tmpo = {};
						
						qs.replace( new RegExp("([^?=&]+)(=([^&]*))?", "g"), function( $0, $1, $2, $3 ) { tmpo[$1] = unescape( $3); } );
						
						this.search( tmpo[ "type" ], tmpo[ "search" ], tmpo[ "replace" ] );
						
					}

				}

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

				this.query = new L2MSearch( type, searchFor, replaceWith, 1 );

				// bind listener
				this.query.events.on( "results", this.onQueryComplete, this );
				this.query.execute();

				// Change URL

				var url = new String( window.location );
				var index = url.indexOf( "#" );
				if( index != -1 ) {
					url = url.substr( 0, index );
				}
	
				var curURL = url + "#type=" + type + "&search=" + searchFor + "&replace=" + replaceWith;
	
				window.location.replace( curURL );

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