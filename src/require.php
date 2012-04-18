<?php

$types = Array( "album", "artist", "track" );

?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Love2Muff</title>
		<meta charset="utf-8" />
		<link rel="stylesheet" href="css/style.css" type="text/css" />
		<!-- HTML5 shim for IE6-8 support of HTML5 elements -->
		<!--[if lt IE 9]>
			<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
	</head>
	<body id="home">
		<div id="container">
			<header id="banner">
				<h1>#love2muff</h1>
			</header>
			<nav>
				<ul id="views">
					<li><a href="#">Thumbnails</a></li>
					<li><a href="#">List</a></li>
					<li><a href="#">Coverflow</a></li>
				</ul>
			</nav>
			<section>
				<p>Stuff</p>
				<p><a href="#" id="ct">Controller test</a></p>
			</section>
			<footer>
				<p>Developed by <a href="http://xerode.net/">xerode</a> using PHP, JavaScript (jQuery, RequireJS, John Resig's JavaScript inheritance) and the <a href="">last.fm API</a></p>
				<p><a href="http://xerode.net/">Please post any comments, suggestions or criticisms on this blog post</a></p>
			</footer>
		</div>
		<!-- Placed at the end of the document so the pages load faster -->
		<script data-main="js/main" src="js/libs/require/require.js"></script>
	</body>
</html>