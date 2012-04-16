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
				return this.message;
			}
		} );

		return Person;
	}
);