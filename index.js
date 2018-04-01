import http from 'http'
import Express from 'express'
import bodyParser from 'body-parser'
const MessagingResponse = require('twilio').twiml.MessagingResponse

const app = new Express()

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/', (req, res) => {
  const twiml = new MessagingResponse();

  if (req.body.Body.toLowerCase() == "open")
    console.log("opening")

  res.writeHead(200, { 'Content-Type': 'text/xml' })
  res.end(twiml.toString())
})

http.createServer(app).listen(1337, () => {
  console.log("listening on port 1337")
})
