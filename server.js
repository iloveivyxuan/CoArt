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

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`)
  console.log('Press Ctrl+C to quit.')
})

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'creativeArtDB';
const client = new MongoClient(url);
// Use connect method to connect to the server
client.connect(function(err) {
  assert.equal(null, err);
  console.log('Connected successfully to server');

  const db = client.db(dbName);

  client.close();
});
