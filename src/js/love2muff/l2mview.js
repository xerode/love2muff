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
				
			},

			initialise: function() {

				this.model.events.on( "clear", this.onModelClear, this );
				this.model.events.on( "loading", this.onModelLoading, this );
				this.model.events.on( "results", this.onModelResults, this );
				this.model.events.on( "more_results", this.onModelMoreResults, this );

				// Used to get around jQuery's scoping
				var jthis = this;

				$( document ).ready( function() {

					$( "form#searchForm" ).submit( function( e ) { 

						e.preventDefault();

						jthis.controller.setSearch( $( "select#type" ).val(), $( "input#search" ).val(), $( "input#replace" ).val() );

					} );

					$( "p#more a" ).click( function( e ) {

						e.preventDefault();

						jthis.controller.getMoreSearchResults();

					} );

				} );

			},

			clearResults: function() {

				$( "ul#results" ).empty();

			},

			showMore: function() {

				$( "p#more" ).show();

			},

			hideMore: function() {

				$( "p#more" ).hide();

			},

			showLoading: function() {

				$( "p#loading" ).show();

			},

			hideLoading: function() {

				$( "p#loading" ).hide();

			},

			onModelClear: function() {

				this.clearResults();

			},

			onModelInit: function() {

				this.model.events.off( "init", this.onModelInit, this );

				this.hideLoading();
				this.hideMore();

				this.initialise();

			},

			onModelLoading: function() {

				this.showLoading();
				this.hideMore();

			},

			onModelResults: function() {

				this.hideLoading();
				this.showMore();

			},

			onModelMoreResults: function() {

				this.hideLoading();
				this.showMore();

			}
			
		} );

		return L2MView;

	}
);