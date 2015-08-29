$(function(){

	var studyGroup = $('#studyGroup-template').html()
	var studyGroupTmpl = Handlebars.compile(studyGroup)

var StudyGroupEventModel = Backbone.Model.extend({
	url:function(){
		var baseURL = 'http://localhost:3000/events'

		if (!this.isNew()) {

  		baseUrl = baseUrl + this.id

  	}
  	return baseUrl + '?typeId=8'
  }
})
var StudyGroupEventCollection = Backbone.Collection.extend({
  url: 'http://localhost:3000/type/8/events',
	model: StudyGroupEventModel
})

var events = new StudyGroupEventCollection
events.fetch()
.done(function (studyGroupEvents){
		$('main').append(studyGroupTmpl(studyGroupEvents.reverse()))

	})

$('.studyGroup-events').on('submit','.delete-events', function(event){
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
