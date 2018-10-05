const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }))

let todos = []

app.get('/', (req, res) => res.json(todos))

app.put('/', (req, res) => {
  console.log(req.body)
  todos.push(req.body)
  res.json(todos)
})

app.post('/:id', (req, res) => {
  todos[parseInt(req.params.id)] = req.body
  res.json(todos)
})

app.delete('/:id', (req, res) => {
  console.log(req.params.id)
  todos = todos.filter((todo, id) => id != parseInt(req.params.id))
  res.json(todos)
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
