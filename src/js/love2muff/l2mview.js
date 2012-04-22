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

					$( "a#setList" ).click( function( e ) {

						e.preventDefault();

						$( "ul#results" ).removeClass().addClass( 'list' );

					} );

					$( "a#setThumbnails" ).click( function( e ) {

						e.preventDefault();

						$( "ul#results" ).removeClass().addClass( 'thumbnails' );

					} );

				} );

			},

			createResults: function( res ) {

				var a, i, li, span;

				for( i = 0; i < res.length; i++ ) {

					li = document.createElement( 'li' );
					a = document.createElement( 'a' );
					span = document.createElement( 'span' );
					$( a ).text( res[ i ].text );
					$( a ).attr( 'href', res[ i ].url );

					$( span ).append( a );
					$( li ).append( span );
					$( "ul#results" ).append( li );

				}

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
				this.createResults( this.model.query.results );
				this.showMore();

			},

			onModelMoreResults: function() {

				this.hideLoading();
				this.createResults( this.model.query.results );
				this.showMore();

			}
			
		} );

		return L2MView;

	}
);