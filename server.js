const path = require('path');
const express = require('express');

const app = express()

app.use(express.static(path.join(__dirname, "build")))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'))
})

app.get('/tutorial', (req, res) => {
	res.sendFile(path.join(__dirname, '/build/tutorial.html'))
})

app.get('/sandbox', (req, res) => {
	res.sendFile(path.join(__dirname, '/build/sandbox.html'))
})

// Resources artworks
app.get('/artworks', (req, res) => {
	return res.send('GET HTTP method on artwork Resources');
});

app.get('artworks/:artworkId', (req, res) => {
	return res.send(`GET HTTP method on artwork/${req.params.artworkId} resource`)
});

app.post('artworks', (req, res) => {
	return res.send('POST HTTP method on artwork Resources');
});

app.put('artworks/:artworkId', (req, res) => {
	return res.send(`PUT HTTP method on artwork/${req.params.artworkId} resource`);
});

app.delete('artwork/:artworkId', (req, res) => {
	return res.send(`DELETE HTTP method on artwork/${req.params.artworkId} resource`);
})

// express listen at port 8080
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`)
  console.log('Press Ctrl+C to quit.')
})

// const MongoClient = require('mongodb').MongoClient;

// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'creativeArtDB';
// const client = new MongoClient(url);
// // Use connect method to connect to the server
// client.connect(function(err) {
//   console.log('Connected successfully to server');

//   const db = client.db(dbName);

//   client.close();
// });
