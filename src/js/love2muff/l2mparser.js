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

				var jthis, result, insert;

				jthis = this;

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
					
					// console.log( "Result == " + insert );

					result.text = insert;
					result.image = {
						sd: $( this ).find( "image[size=large]" ).text(),
						hd: $( this ).find( "image[size=extralarge]" ).text()
					};

					jthis.results[ jthis.results.length ] = result;
					
				} );

				this.events.trigger( "parse_complete" );

			}

		} );

		return L2MParser;

	}
);