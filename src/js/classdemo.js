define(
	[
		'Class'
	],
	function( Class ) {
		
		var Person = Class.extend( {
			init: function() {
				this.message = "This is a Class demo";
			},
			demo: function(){
				alert( this.message );
			}
		} );

		return Person;
	}
);