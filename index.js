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
			$('#fullName').val('')
			$('#email').val('')
			$('#password').val('')
			
			window.location.href = 'http://localhost:8080/events.html'
			
			$('#sign-up-nav').hide(function (){
				console.log(user);		
			})
		})
		.fail(function(){
			alert('Sign up failed')
		})
 	return false
})

$('.add-event').on('submit', function(){
	console.log('worked');
		var data = {
      "typeId": $('#selectInput').val(),       
      "dateAndTime": $('#when').val(),
      "hostedBy": $('#hostedBy').val(),
      "eventDescription": $('#eventDescription').val(),
      "eventTitle": $('#eventTitle').val(),
      "where": $('#where').val()
		}
		console.log(data)
	$post('http://localhost:3000/events', data)
	.done(function (events){
		$('#when').val('')
		$('#hostedBy').val('')
		$('#eventDescription').val('')
		$('#eventTitle').val('')
		$('#where').val('')
			
		window.location.href = 'http://localhost:8080/events.html'
	})
	.fail(function(){
		alert('add event failed')
	})
	return false
})

$('.sign-in').on('submit', function(event){
	event.preventDefault()

	window.location.href = '/events.html'
})

	

})


