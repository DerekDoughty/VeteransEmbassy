$(function(){

var $post = $.post

var outdoorFunInfo = {
		eventTitle: '',
		hostedBy: '',
		when: '',
		where: '',
		eventDescription: ''
	}

	var outdoorFun = $('#outdoorFun-template').html()
	var outdoorFunTmpl = Handlebars.compile(outdoorFun)

var outdoorFunEventModel = Backbone.Model.extend({
	url:function(){
		var baseURL = 'http://localhost:3000/events'

		if (!this.isNew()) {

  		baseUrl = baseUrl + this.id

  	}
  	return baseUrl + '?typeId=4'
  }
})
var outdoorFunEventCollection = Backbone.Collection.extend({
  url: 'http://localhost:3000/type/4/events',
    // url: 'http://localhost:3000/events?typeId=4',
	model: outdoorFunEventModel
})

var events = new outdoorFunEventCollection
events.fetch()
.done(function (outdoorFunEvents){
		$('main').append(outdoorFunTmpl(outdoorFunEvents.reverse()))

	})

$('.outdoorFun-events').on('submit','.delete-events', function(event){
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
