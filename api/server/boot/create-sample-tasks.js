var async = require('async')

module.exports = function (app) {
	mongo = app.dataSources.mongo
	
	// mongo.automigrate('Task', function (err) {
	// 	if(err) return cb(err)
	// 	Task = app.models.Task
	// 	Task.create([
	// 		{title: "Tarea 1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis qui accusantium rem nisi earum dolores fugit culpa aspernatur at eum iusto, sequi doloremque neque dolorum? Dicta suscipit, sit ullam laudantium."},
	// 		{title: "Tarea 2", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis qui accusantium rem nisi earum dolores fugit culpa aspernatur at eum iusto, sequi doloremque neque dolorum? Dicta suscipit, sit ullam laudantium."},
	// 		{title: "Tarea 3", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis qui accusantium rem nisi earum dolores fugit culpa aspernatur at eum iusto, sequi doloremque neque dolorum? Dicta suscipit, sit ullam laudantium."}
	// 	])
	// })
}