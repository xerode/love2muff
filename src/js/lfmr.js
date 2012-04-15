var lfmr = {
	pageNo: new Number( 1 ),
	numPages: new Number( 0 ),
	searchFor: new String( "Love" ),
	replaceWith: new String( "Muff" ),
	searchType: new String( "albums" )
};

var pageNo = 1;
var numPages = 0;

var searchType = "";
var searchFor = "";
var replaceWith = "";
var reg;

function showMore( b ) {
	
	if( b ) {
		
		var li = document.createElement( "li" );
		
		li.id = "more";
		
		var a = document.createElement( "a" );
		a.innerHTML = "More!";
		
		$( li ).append( a );
		
		$( "section#results ul" ).append( li );
		
		$( a ).click( function() {
			
			var np = lfmr[ "pageNo" ] + 1;
			
			getXML( lfmr[ "searchType" ], lfmr[ "searchFor" ], lfmr[ "replaceWith" ], np );
			
		} );
		
	} else {
		
		$( "li#more" ).remove();
		
	}
	
}

function showLoadingStatus( b ) {
	
	if( b ) {
		
		var li = document.createElement( "li" );
		
		li.id = "loading";
		li.innerHTML = "Loading!";
		
		$( "section#results ul" ).append( li );
		
	} else {
		
		$( "li#loading" ).remove();
		
	}
	
}

function setURL( t, s, r ) {
	
	var address = new String( window.location );
	var index = address.indexOf( "#" );
	if( index != -1 ) {
		address = address.substr( 0, index );
	}
	
	var curURL = address + "#type=" + $( "#type" ).val() + "&search=" + $( "#search" ).val() + "&replace=" + $( "#replace" ).val();
	
	window.location.replace( curURL );				
	
}

function getXML( t, s, r, p ) {
	
	// alert( "gatXML( " + t + ", " + s + ", "+ r + ", " + p + " )" );
	
	lfmr[ "pageNo" ] = p;
	
	var qs = "type=" + escape( t ) + "&search=" + escape( s ) + "&replace=" + escape( r ) + "&page=" + escape( p );
	
	$( "section#results" ).show();
	showMore( false );
	showLoadingStatus( true );
	
	$.ajax( {
		type: "GET",
		url: "getxml.php",
		data: qs,
		dataType: "xml",
		success: parseXML
	} );
	
	setURL( t, s, r );
	
}

function parseXML( xml ) {
	
	// pageNo += 1;
	
	showLoadingStatus( false );
	
	// numPages = parseInt( $( this ).find( "opensearch:totalResults" ).text() ) / 30;
	
	$( xml ).find( $( "#type" ).val() ).each( function() {
		
		var insert= "";
		
		switch( $( "#type" ).val() ) {
		
			case "album":
			case "track":
				insert = $( this ).find( "artist" ).text( ) + " - " + $( this ).find( "name" ).text( );
				break;
				
			case "artist":
				insert = $( this ).find( "name" ).text( );
				break;
		
		}
		
		var sf = lfmr[ "searchFor" ];
		
		var reg = new RegExp( sf, "gi" );
		
		var lit = insert.replace( reg, lfmr[ "replaceWith" ] );
		var span = document.createElement( "span" );
		var li = document.createElement( "li" );
		var a = document.createElement( "a" );
		a.innerHTML = lit;
		li.setAttribute( "class", "result" );
		$( a ).attr( "href", $( this ).find( "url" ).text( ) );
		$( li ).append( span );
		$( span ).append( a );
		$( li ).css( "background-image", "url(" +$( this ).find( "image[size=large]" ).text( )  + ")" );
		$( "section#results ul" ).append( li );
		
	} );
	
	showMore( true );
	
}

$( document ).ready( function() {
	
	$( "section#results" ).hide();
	
	var url = new String( window.location );
	
	if( url.indexOf( "#" ) > -1 ) {
		
		var hash = url.split( "#" );
		
		// var vars = hash[ 1 ]
		
		// alert( hash[ 1 ] );
		
		if( hash.length > 0 ) {
			
			var qs = new String( hash[ 1 ] );
			
			var tmpo = {};
			
			qs.replace( new RegExp("([^?=&]+)(=([^&]*))?", "g"), function( $0, $1, $2, $3 ) { tmpo[$1] = unescape( $3); } );
			
			/*
			var vs = qs.split( "&" );
			
			for( var i in vs ) {
				
				var v = new String( vs[ i ] )
				
				var mp = v.split( "=" );
				
				lfmr[ mp[ 0 ] ] = mp[ 1 ];
				
				// alert( mp[ 0 ]+ " = " + lfmr[ mp[ 0 ] ] );
				
			}
			*/
			
			lfmr[ "searchType" ] = tmpo[ "type" ];
			lfmr[ "searchFor" ] = tmpo[ "search" ];
			lfmr[ "replaceWith" ] = tmpo[ "replace" ];
			
			$( "#type" ).val( lfmr[ "searchType" ] );
			$( "#search" ).val( lfmr[ "searchFor" ] );
			$( "#replace" ).val( lfmr[ "replaceWith" ] );
			
		}
		
		getXML( lfmr[ "searchType" ], lfmr[ "searchFor" ], lfmr[ "replaceWith" ], 1 );
		
	}
	
	$( "#app" ).submit( function() {
		
		$( "section#results ul li" ).remove();
		
		lfmr[ "searchType" ] = $( "#type" ).val();
		lfmr[ "searchFor" ] = $( "#search" ).val();
		lfmr[ "replaceWith" ] = $( "#replace" ).val();
		
		getXML( lfmr[ "searchType" ], lfmr[ "searchFor" ], lfmr[ "replaceWith" ], 1 );
		
		return false;
		
	} );
	
	$( "aside#examples ul a" ).click( function( ) {
		
		window.location.hash = $( this ).attr( "href" );
		
		window.location.reload();
		
		return false;
		
	} );
	
	$( "li#more a" ).click( function() {
	
		alert( "more" );
	
		/*
		searchFor = $( "#search" ).val();
		replaceWith = $( "#replace" ).val();
		reg = new RegExp( searchFor, "gi" );
		
		var qs = "type=" + $( "#type" ).val() + "&search=" + searchFor + "&replace=" + replaceWith + "&page=" + pageNo;
		
		$.ajax( {
			type: "GET",
			url: "getxml.php",
			data: qs,
			dataType: "xml",
			success: parseXML
		} );
		*/
		return false;
		
	} );
	
} );