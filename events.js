$(function(){

var $post = $.post

var hikeInfo = {
		eventTitle: 'Camelback Moutain',
		hostedBy: 'Derek Lee Doughty',
		when: '22nd August 2015 at 8am',
		where: 'Main Gazebo at the trailhead sucka',
		eventDescription: 'hiking'
	}

	var hiking = $('#hiking-template').html()
	var hikingTmpl = Handlebars.compile(hiking)

var EventModel = Backbone.Model.extend({
	url:function(){
		var baseURL = 'http://localhost:3000/events'

		if (!this.isNew()) {

  		baseUrl = baseUrl + this.id

  	}
  	return baseUrl + '?typeId=1'
  }
})
var EventCollection = Backbone.Collection.extend({
  url: 'http://localhost:3000/events',
	model: EventModel
})

var events = new EventCollection
events.fetch()
.done(function (hikingEvents){
		$('main').append(hikingTmpl(hikingEvents.reverse()))
		console.log(hikingEvents)

	})

$('.hiking-events').on('submit','.delete-events', function(event){
	event.preventDefault()	
	var deleteEvent = $(this).find('input').val()
	console.log(deleteEvent)
	$.ajax({
		url: "http://localhost:3000/events/" + deleteEvent,
		method: "DELETE"
	}) 
	.done(function (){
		window.location.reload()
	})     
})

})


// with an http delete method. $.ajax url and the method. (.delete)
// do my jquery selector on $(this).find('input').val()
// make line 61 into a variable and concatinate that variable onto the URL
// any time i want to add to the page from JS, i need to use delegated events
// since the template isnt in the DOM yet.  