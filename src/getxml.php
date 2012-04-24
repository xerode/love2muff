<?php

$key = "";

header( "content-type: text/xml" );

include 'key.php';

if( isset( $_REQUEST[ "page"] ) ) {
	$page = $_REQUEST[ "page" ];
} else {
	$page = 1;
}

if( isset( $_REQUEST[ "type" ] ) && isset( $_REQUEST[ "search" ] ) ) {
	
	$s = urlencode( $_REQUEST[ "search" ] );

	switch( strtolower( $_REQUEST[ "type" ] ) ) {

		case "album":
			$ch = curl_init( "http://ws.audioscrobbler.com/2.0/?method=album.search&album=".$s."&api_key=".$key."&page=".$page."&limit=20" );
			break;

		case "artist":
			$ch = curl_init( "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=".$s."&api_key=".$key."&page=".$page."&limit=20" );
			break;

		case "track":
			$ch = curl_init( "http://ws.audioscrobbler.com/2.0/?method=track.search&track=".$s."&api_key=".$key."&page=".$page."&limit=20" );
			break;

		default:
			$ch = curl_init( "http://ws.audioscrobbler.com/2.0/?method=track.search&track=Love&api_key=".$key."&page=".$page."&limit=20" );

	}
	
} else {
	
	$ch = curl_init( "http://ws.audioscrobbler.com/2.0/?method=track.search&track=love&api_key=".$key );
	
}

curl_exec( $ch );
curl_close( $ch );

?> 