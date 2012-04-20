define(
	[
		'Class',
		'jQuery'
	],
	function( Class, $ ) {
		
		var L2MView = Class.extend( {

			init: function( m, c, s ) {

				this.model = m;
				this.model.events.on( "init", this.onModelInit, this );
				this.controller = c;
				this.stage = s;

				this.form = {};

				// Used to get around jQuery's scoping
				var jthis = this;
				
			},

			initialise: function() {

				$( document ).ready( function() {

					$( "form" ).submit( function( e ) { 

						e.preventDefault();

						jthis.controller.setSearch( $( "select#type" ).val(), $( "input#search" ).val(), $( "input#research" ).val() );

					} );

					$( "a#more" ).click( function( e ) {

						e.preventDefault();

						jthis.controller.getMoreSearchResults();

					} );

				} );

			},

			clearResults: function() {

				$( "ul#results" ).empty();

			},

			showMore: function() {

				$( "a#more" ).show();

			},

			hideMore: function() {

				$( "a#more" ).hide();

			},

			showLoading: function() {

				$( "a#loading" ).show();

			},

			hideLoading: function() {

				$( "a#loading" ).hide();

			},

			onModelInit: function() {

				this.model.events.off( "init", this.onModelInit, this );

				this.initialise();

			}
			
		} );

		return L2MView;

	}
);