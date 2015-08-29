$(function(){

	var camping = $('#camping-template').html()
	var campingTmpl = Handlebars.compile(camping)

var CampingEventModel = Backbone.Model.extend({
	url:function(){
		var baseURL = 'http://localhost:3000/events'

		if (!this.isNew()) {

  		baseUrl = baseUrl + this.id

  	}
  	return baseUrl + '?typeId=3'
  }
})
var CampingEventCollection = Backbone.Collection.extend({
  url: 'http://localhost:3000/events?typeId=3',
	model: CampingEventModel
})

var events = new CampingEventCollection
events.fetch()
.done(function (campingEvents){
		$('main').append(campingTmpl(campingEvents.reverse()))
		console.log(campingEvents)

	})

$('.camping-events').on('submit','.delete-events', function(event){
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