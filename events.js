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
		$('main').append(hikingTmpl(hikingEvents))
		console.log(hikingEvents)

	})
})