$(function(){

var $post = $.post

var codingInfo = {
		eventTitle: 'Java Script!',
		hostedBy: 'Derek Lee Doughty',
		when: '28nd August 2015 at 6pm',
		where: 'Rockit Bootcamp Classroom',
		eventDescription: 'Computer Coding'
	}

	var coding = $('#coding-template').html()
	var codingTmpl = Handlebars.compile(coding)

var CodingEventModel = Backbone.Model.extend({
	url:function(){
		var baseURL = 'http://localhost:3000/events'

		if (!this.isNew()) {

  		baseUrl = baseUrl + this.id

  	}
  	return baseUrl + '?typeId=2'
  }
})
var CodingEventCollection = Backbone.Collection.extend({
  url: 'http://localhost:3000/events?typeId=2',
	model: CodingEventModel
})

var events = new CodingEventCollection
events.fetch()
.done(function (codingEvents){
		$('main').append(codingTmpl(codingEvents.reverse()))
		console.log(codingEvents)

	})

$('.coding-events').on('submit','.delete-events', function(event){
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