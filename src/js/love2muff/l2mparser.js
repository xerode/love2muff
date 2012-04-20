define(
	[
		'Class',
		'jQuery',
		'Events'
	],
	function( Class, $, Events ) {
		
		var L2MParser = Class.extend( {

			init: function() {

				this.results = [];
				this.events = new Events();

			},

			parse: function( xml, type, search, replace ) {

				console.log( "replace? " + replace );

				var jthis, result, insert, regex;

				jthis = this;

				regex = new RegExp( search, "gi" );

				$( xml ).find( type ).each( function() {

					result = {};
		
					insert = "";
					
					switch( type ) {
					
						case "album":
						case "track":
							insert = $( this ).find( "artist" ).text() + " - " + $( this ).find( "name" ).text();
							break;
							
						case "artist":
							insert = $( this ).find( "name" ).text();
							break;
					
					}

					insert = insert.replace( regex, replace );

					result.text = insert;
					result.image = {
						sd: $( this ).find( "image[size=large]" ).text(),
						hd: $( this ).find( "image[size=extralarge]" ).text()
					};
					result.url = $( this ).find( "url" ).text();

					jthis.results[ jthis.results.length ] = result;
					
				} );

				this.events.trigger( "parse_complete" );

			}

		} );

		return L2MParser;

	}
);