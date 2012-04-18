define(
	[
		'Class',
		'jQuery'
	],
	function( Class, $ ) {
		
		var L2MView = Class.extend( {

			init: function( m, c ) {

				this.model = m;
				this.controller = c;

				this.form = {};

				// Used to get around jQuery's scoping
				var jthis = this;

				$( document ).ready( function() {

					$( "a#ct" ).click( function( e ) {

						e.preventDefault();

						jthis.controller.test();

					} );

				} );
				
			}
			
		} );

		return L2MView;

	}
);