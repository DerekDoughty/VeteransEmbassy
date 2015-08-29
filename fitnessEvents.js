$(function(){

var $post = $.post

// var fitnessInfo = {
// 		eventTitle: 'Java Script!',
// 		hostedBy: 'Derek Lee Doughty',
// 		when: '28nd August 2015 at 6pm',
// 		where: 'Rockit Bootcamp Classroom',
// 		eventDescription: 'Computer Coding'
// 	}

	var fitness = $('#fitness-template').html()
	var fitnessTmpl = Handlebars.compile(fitness)

var fitnessEventModel = Backbone.Model.extend({
	url:function(){
		var baseURL = 'http://localhost:3000/events'

		if (!this.isNew()) {

  		baseUrl = baseUrl + this.id

  	}
  	return baseUrl + '?typeId=5'
  }
})
var FitnessEventCollection = Backbone.Collection.extend({
  // url: 'http://localhost:3000/events?typeId=2',
    url: 'http://localhost:3000/type/5/events',

	model: fitnessEventModel
})

var events = new FitnessEventCollection
events.fetch()
.done(function (fitnessEvents){
		$('main').append(fitnessTmpl(fitnessEvents.reverse()))

	})

$('.fitness-events').on('submit','.delete-events', function(event){
	event.preventDefault()	
	var deleteEvent = $(this).find('input').val()
	$.ajax({
		url: "http://localhost:3000/events/" + deleteEvent,
		method: "DELETE"
	}) 
	.done(function (){
		window.location.reload()
	})     
})

})