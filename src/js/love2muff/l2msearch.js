define(
	[
		'Class',
		'jQuery',
		'Events',
		'love2muff/l2mparser'
	],
	function( Class, $, Events, L2MParser ) {
		
		var L2MSearch = Class.extend( {

			init: function( t, s, r, p ) {
				
				this.type = t;
				this.search = s;
				this.replace = r;
				this.page = p;
				this.results = {};

				this.events = new Events();

			},

			execute: function() {

				var qs = "type=" + escape( this.type ) + "&search=" + escape( this.search ) + "&replace=" + escape( this.replace ) + "&page=" + escape( this.page );

				var jthis = this;

				$.ajax( {
					type: "GET",
					url: "getxml.php",
					data: qs,
					dataType: "xml",
					success: jthis.onXMLLoaded,
					context: jthis
				} );

			},

			onXMLLoaded: function( xml ) {

				this.parser = new L2MParser();
				this.parser.parse( xml, this.type, this.search, this.replace );
				this.parser.events.on( "parse_complete", this.onParseComplete, this );

				// dispatch event
				// model should be listening, receives event and then parses XML
				this.events.trigger( "load_complete" );

			},

			onParseComplete: function() {

				this.parser.events.off( "parse_complete", this.onParseComplete, this );

				this.results = this.parser.results;

				this.events.trigger( "results" );

			}

		} );

		return L2MSearch;

	}
);