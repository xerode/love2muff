define(
	[
		'Class',
		'jQuery',
	],
	function( Class, $ ) {
		
		var L2MSearch = Class.extend( {

			init: function( t, s, r, p ) {
				
				this.type = t;
				this.search = s;
				this.replace = r;
				this.page = p;
				this.numPages = 0;
				this.results = {};

			},

			execute: function() {

				var qs = "type=" + escape( this.type ) + "&search=" + escape( this.search ) + "&replace=" + escape( this.replace ) + "&page=" + escape( this.page );

				$.ajax( {
					type: "GET",
					url: "getxml.php",
					data: qs,
					dataType: "xml",
					success: this.parseXML
				} );

			},

			parseXML:function( xml ) {
				alert( "parseXML" );
			}

		} );

		return L2MSearch;
		
	}
);