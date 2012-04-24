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

					jthis.resize();

					$( window ).resize( function() {
						
						jthis.resize();

					} );

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

						$( "ul#results" ).removeClass().addClass( 'thumbnails clearfix' );

					} );

					$( "a#setFlow" ).click( function( e ) {

						e.preventDefault();

						$( "ul#results" ).removeClass().addClass( 'flow' );

					} );

					$( "ul#examples li a" ).click( function( e ) {

						e.preventDefault();

						window.location.hash = $( this ).attr( "href" );
		
						window.location.reload();

					} );

				} );

			},

			resize: function() {

				var w = $( window ).width();

				if( w < 640 ) {

					$( 'body' ).removeClass().addClass( 'micro' );

				} else if( w < 800 ) {

					$( 'body' ).removeClass().addClass( 'medium' );

				} else if( w > 1024 ) {

					$( 'body' ).removeClass().addClass( 'massive' );

				}

			},

			showResults: function() {

				$( "section#sResults" ).show();

			},

			hideResults: function() {

				$( "section#sResults" ).hide();

			},

			createResults: function( res ) {

				var a, i, li, span;

				for( i = 0; i < res.length; i++ ) {

					li = document.createElement( 'li' );
					a = document.createElement( 'a' );
					span = document.createElement( 'span' );
					$( a ).text( res[ i ].text );
					$( a ).attr( 'href', res[ i ].url );
					$( a ).attr( 'title', 'View this entry on last.fm' );
					if( this.model.results[ i ].image.sd != "" ) {
						$( li ).css( 'background-image', 'url(' + this.model.results[ i ].image.sd + ')' );
					}

					/*
					$( li ).click( function() {

						window.location.href = $( this ).find( 'a' ).attr( 'href' );

						return false;

					} );
					*/

					$( span ).append( a );
					$( li ).append( span );
					$( li ).hide();
					$( "ul#results" ).append( li );

					$( li ).delay( i * 100 ).fadeIn( 500 );

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

				this.hideResults();
				this.hideLoading();
				this.hideMore();

				this.initialise();

			},

			onModelLoading: function() {
				this.showResults();
				this.showLoading();
				this.hideMore();

			},

			onModelResults: function() {

				this.hideLoading();
				this.createResults( this.model.query.results );
				this.showMore();

				$( "select#type option#o" + this.model.query.type ).attr( "selected", "selected" );
				$( "input#search" ).val( this.model.query.search );
				$( "input#replace" ).val( this.model.query.replace );

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