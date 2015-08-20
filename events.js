$(function(){

var $post = $.post
// $('#add-event-button').on('submit', function(){
// 	console.log('worked');
// })


var hikeInfo = {
		eventTitle: 'Camelback Moutain',
		hostedBy: 'Derek Lee Doughty',
		when: '22nd August 2015 at 8am',
		where: 'Main Gazebo at the trailhead sucka',
		eventDescription: 'hiking'
	}

	var hiking = $('#hiking-template').html()
	var hikingTmpl = Handlebars.compile(hiking)


$.get('http://localhost:3000/types/1/events')
	.done(function (hikingEvents){
		$('main').append(hikingTmpl(hikingEvents))
		console.log(hikingEvents)
	})
})