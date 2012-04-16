<?php

$types = Array( "album", "artist", "track" );

?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Love2Muff</title>
		<meta charset="utf-8" />
		<link rel="stylesheet" href="css/style.css" type="text/css" />
		<script src="js/lfmr.js" type="text/javascript"></script>
		<!-- <script data-main="js/main" src="js/libs/require/require.js"></script> -->
	</head>
	<body id="home">
		<div id="container">
			<header id="banner">
				<h1>#lovetomuff</h1>
			</header>
			<!--
			<section id="about">
				<h2>About</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae convallis dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae convallis dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
				<aside>
					<p><a href="http://xerode.net/">Please post any comments, suggestions or criticisms on this blog post</a></p>
				</aside>
			</section>
			-->
			<h2>Search</h2>
			<form id="app">
				<label for="type">Search</label>
				<select name="type" id="type">
				<?php foreach( $types as $val ) { print( "<option>".$val."</option>" ); } ?>
				</select>
				names <label for="search">for</label> <input name="search" id="search" type="text" value="Love" /> and <label for="replace">replace with</label> <input name="replace" id="replace" type="text" value="Muff" />
				<button id="go" type="submit">Go!</button>
			</form>
			<aside id="examples">
				<h3>Examples</h3>
				<ul>
					<li><a href="#type=album&search=Black&replace=Ginger">Album - Black &rsaquo; Ginger</a></li>
					<li><a href="#type=artist&search=Richard&replace=Dick">Artist - Richard &rsaquo; Dick</a></li>
					<li><a href="#type=track&search=Love&replace=Muff">Track - Love &rsaquo; Muff</a></li>
					<li><a href="#type=track&search=You&replace=Lue">Track - You &rsaquo; Lue</a></li>
					<li><a href="#type=track&search=Help&replace=Herp%20Derp">Track - Help &rsaquo; Herp Derp</a></li>
				</ul>
			</aside>
			<section id="results" class="clearfix">
				<h2>Results</h2>
				<ul></ul>
			</section>
			<footer>
				<p>Developed by <a href="http://xerode.net/">xerode</a> using PHP, JavaScript and the <a href="">last.fm API</a></p>
				<p><a href="http://xerode.net/">Please post any comments, suggestions or criticisms on this blog post</a></p>
			</footer>
		</div>
	</body>
</html>