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
			<div id="mainView">
				<header id="banner">
					<h1>#love2muff</h1>
				</header>
				<section>
					<h2>Search</h2>
					<form id="searchForm">
						<label for="type">Search</label>
						<select name="type" id="type">
						<?php foreach( $types as $val ) { print( "<option>".$val."</option>" ); } ?>
						</select>
						names <label for="search">for</label> <input name="search" id="search" type="text" value="Love" /> and <label for="replace">replace with</label> <input name="replace" id="replace" type="text" value="Muff" />
						<button id="go" type="submit">Go!</button>
					</form>
				</section>
				<section>
					<nav>
						<ul id="views">
							<li><a href="#" id="setThumbnails">Thumbnails</a></li>
							<li><a href="#" id="setList">List</a></li>
							<!--<li><a href="#">Coverflow</a></li>-->
						</ul>
					</nav>
					<h2>Results</h2>
					<div>
						<ul id="results" class="list">
						</ul>
						<p id="loading">Loading!</p>
						<p id="more"><a href="#">More!</a></p>
					</div>
				</section>
				<footer>
					<p>Developed by <a href="http://xerode.net/">xerode</a> using PHP, JavaScript (jQuery, RequireJS, John Resig's JavaScript inheritance) and the <a href="">last.fm API</a></p>
					<p><a href="http://xerode.net/">Please post any comments, suggestions or criticisms on this blog post</a></p>
				</footer>
			</div>
		</div>
		<!-- Placed at the end of the document so the pages load faster -->
		<script data-main="js/main" src="js/libs/require/require.js"></script>
	</body>
</html>