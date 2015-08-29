$(function(){

	var hiking = $('#hiking-template').html()
	var hikingTmpl = Handlebars.compile(hiking)

var HikingEventModel = Backbone.Model.extend({
	url:function(){
		var baseURL = 'http://localhost:3000/events'

		if (!this.isNew()) {

  		baseUrl = baseUrl + this.id

  	}
  	return baseUrl + '?typeId=1'
  }
})
var HikingEventCollection = Backbone.Collection.extend({
  url: 'http://localhost:3000/type/1/events',
	model: HikingEventModel
})

var events = new HikingEventCollection
events.fetch()
.done(function (hikingEvents){
		$('main').append(hikingTmpl(hikingEvents.reverse()))

	})

$('.hiking-events').on('submit','.delete-events', function(event){
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
 