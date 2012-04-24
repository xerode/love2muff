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
				<section id="sSearch">
					<h2>Search</h2>
					<form id="searchForm">
						<label for="type">Search</label>
						<select name="type" id="type">
						<?php foreach( $types as $val ) { print( "<option id=\"o".$val."\">".$val."</option>" ); } ?>
						</select>
						names <label for="search">for</label> <input name="search" id="search" type="text" value="Love" /> and <label for="replace">replace with</label> <input name="replace" id="replace" type="text" value="Muff" />
						<button id="go" type="submit">Go!</button>
					</form>
				</section>
				<section id="sResults">
					<h2>Results</h2>
					<nav>
						<ul id="views" class="clearfix">
							<li>View as:</li>
							<li><a href="#" id="setThumbnails">Thumbnails</a></li>
							<li><a href="#" id="setList">List</a></li>
							<li><a href="#" id="setFlow">Coverflow</a></li>
						</ul>
					</nav>
					<ul id="results" class="thumbnails clearfix">
					</ul>
					<p id="loading">Loading!</p>
					<p id="more"><a href="#">More!</a></p>
				</section>
				<section id="sExamples">
					<h2>Examples</h2>
					<ul id="examples">
						<li><a href="#type=track&amp;search=Love&amp;replace=Muff">Tracks - Love &rsaquo; Muff</a></li>
						<li><a href="#type=track&amp;search=Black&amp;replace=Ginger">Albums - Black &rsaquo; Ginger</a></li>
						<li><a href="#type=artist&amp;search=Sex&amp;replace=Sax">Artists - Sex &rsaquo; Sax</a></li>
						<li><a href="#type=track&amp;search=Help&amp;replace=Herp%20Derp">Tracks - Help &rsaquo; Herp Derp</a></li>
					</ul>
				</section>
				<footer>
					<h3>About</h3>
					<p>Developed by <a href="http://xerode.net/">xerode</a> using PHP, JavaScript (<a href="http://jquery.com/">jQuery</a>, <a href="http://requirejs.org/">RequireJS</a>, <a href="http://ejohn.org/blog/simple-javascript-inheritance/">John Resig's simple JavaScript inheritance</a>) and the <a href="http://www.last.fm/api">last.fm API</a></p>
					<p><a href="http://xerode.net/">Please post any comments, suggestions or criticisms on this blog post</a></p>
				</footer>
			</div>
		</div>
		<!-- Placed at the end of the document so the pages load faster -->
		<script data-main="js/main" src="js/libs/require/require.js"></script>
	</body>
</html>