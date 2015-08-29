$(function(){

var $post = $.post

var socialInfo = {
		eventTitle: 'Java Script!',
		hostedBy: 'Derek Lee Doughty',
		when: '28nd August 2015 at 6pm',
		where: 'Rockit Bootcamp Classroom',
		eventDescription: 'Computer Coding'
	}

	var social = $('#social-template').html()
	var socialTmpl = Handlebars.compile(social)

var socialEventModel = Backbone.Model.extend({
	url:function(){
		var baseURL = 'http://localhost:3000/events'

		if (!this.isNew()) {

  		baseUrl = baseUrl + this.id

  	}
  	return baseUrl + '?typeId=6'
  }
})
var SocialEventCollection = Backbone.Collection.extend({
  // url: 'http://localhost:3000/events?typeId=2',
    url: 'http://localhost:3000/type/6/events',

	model: socialEventModel
})

var events = new SocialEventCollection
events.fetch()
.done(function (socialEvents){
		$('main').append(socialTmpl(socialEvents.reverse()))

	})

$('.social-events').on('submit','.delete-events', function(event){
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