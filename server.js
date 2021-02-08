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

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`)
  console.log('Press Ctrl+C to quit.')
})
