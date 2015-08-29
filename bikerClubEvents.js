$(function(){

	var bikerClub = $('#bikerClub-template').html()
	var bikerClubTmpl = Handlebars.compile(bikerClub)

	var bikerClubEventModel = Backbone.Model.extend({
		url:function(){
			var baseUrl = 'http://localhost:3000/events'

			if(!this.isNew()){
				baseUrl = baseUrl + this.id
			}
			return baseUrl + '?typeid=7'
		}
	})

	var BikerClubEventCollection = Backbone.Collection.extend({
		url: 'http://localhost:3000/type/7/events',
		Model: bikerClubEventModel
	})

	var events = new BikerClubEventCollection
	events.fetch()
	.done(function (bikerClubEvents){

	$('main').append(bikerClubTmpl(bikerClubEvents.reverse()))

	})

$('.bikerClub-events').on('submit','.delete-events', function(event){
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