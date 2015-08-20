$(function (){

var $post = $.post
$('#sign-up').on('submit', function(){
 	console.log('submit');
	$post('http://localhost:3000/users', { 
		userName: $('#fullName').val(),
		email: $('#email').val(),
		password: $('#password').val(),		
	})
		.done(function (user){
			
			window.location.href = 'http://localhost:8080/events.html'
			
			$('#sign-up-nav').hide(function (){
				console.log(user);		
			})
		})
		.fail(function(){
			alert('fucked up')
		})
 	return false
})

$('.add-event').on('submit', function(){
	console.log('worked');
		var data = {
      "typeId": 1,
      "dateAndTime": $('#when').val(),
      "hostedBy": $('#hostedBy').val(),
      "eventDescription": $('#eventDescription').val(),
      "eventTitle": $('#eventTitle').val(),
      "where": $('#where').val()
		}
		console.log(data)
	$post('http://localhost:3000/events', data)
	return false
})

})

	



//once they are signed in use window.location and give it the
//name of the html location.
//window.location = ""... use like a variable.
//use a jquery .get to get the events from the local host 3000/events
//create my template using handle bars and pass my jquery events 
//into the template.  
