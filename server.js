var express = require( 'express' )
var app = express()
var port = process.env.PORT || 3000

app.use( express.static( 'public' ) )

app.set( 'port', process.env.PORT || 3000 )

app.get( '/', function( req, res ) {
	res.send( __dirname + '/index.html' )
} )

app.listen( app.get( 'port' ), function() {
	console.log("Server running on port: " + app.get( 'port' ) )
})