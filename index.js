$(function (){

var $post = $.post

	$post('http://localhost:3000/users', { 
		userName: "Ryan",
		email: "ryan@ryan.com",
		password: "ryanhasNiceHair",		
	})
		.done(function(){
			console.log('done')
		})
		.fail(function(){
			alert('fucked up')
		})
})