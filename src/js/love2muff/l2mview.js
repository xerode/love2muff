define(
	[
		'Class',
		'jQuery'
	],
	function( Class, $ ) {
		
		var L2MView = Class.extend( {

			init: function( m, c, s ) {

				this.model = m;
				this.controller = c;
				this.stage = s;

				this.form = {};

				// Used to get around jQuery's scoping
				var jthis = this;

				$( document ).ready( function() {

					$( "a#ct" ).click( function( e ) {

						e.preventDefault();

						jthis.controller.test();

					} );

					$( "form" ).submit( function( e ) { 

						e.preventDefault();

						jthis.controller.setSearch( $( "select#type" ).val(), $( "input#search" ).val(), $( "input#research" ).val() );

					} );

				} );
				
			}
			
		} );

		return L2MView;

	}
);