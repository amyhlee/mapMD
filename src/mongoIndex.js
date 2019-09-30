require('./models/User')
const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const bodyParser = require('body-parser')
const requireAuth = require('./middlewares/requireAuth')

const app = express();

app.use(bodyParser.json())
app.use(authRoutes)

const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0-uykfo.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
})

mongoose.connection.on('connected', () => {
  console.log('connected to mongo instance')
})

mongoose.connection.on('error', (error) => {
  console.error('error connecting to mongo', error)
})

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`)
})

app.listen(3001, () => {
  console.log('Listening on port 3001')
})
