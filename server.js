// init express
const express = require('express')
const app = express()
const PORT = 4000

//http://172.0.0.1

// GET POST PATCH PUT DELETE

// request to our server at the home route
app.get('/', (request, response) => {
  console.log('You have reached the home route: GET')
  response.status(200).send('Hello')
})

app.delete('/', (req, res) => {
  console.log('What do you want to delete?')
})

app.listen(PORT, () => console.log(`Server has started on port: ${PORT}`))