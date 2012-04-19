define(
	[
		'Class',
		'jQuery',
		'Events'
	],
	function( Class, $, Events ) {
		
		var L2MSearch = Class.extend( {

			init: function( t, s, r, p ) {
				
				this.type = t;
				this.search = s;
				this.replace = r;
				this.page = p;
				this.numPages = 0;
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
					dataType: "text",
					success: jthis.onXMLLoaded,
					context: jthis
				} );

			},

			onXMLLoaded: function( xml ) {

				this.results = xml;

				// dispatch event
				// model should be listening, receives event and then parses XML
				this.events.trigger( "load_complete" );

			}

		} );

		return L2MSearch;

	}
);