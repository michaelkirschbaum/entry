import http from 'http'
import Express from 'express'
import { MessagingResponse } from 'twilio'
import bodyParser from 'body-parser'

const app = new Express()

app.use(bodyParser.json())

app.post('/', (req, res) => {
  const twiml = new MessagingResponse()

  console.log(req.body.Body)

  res.writeHead(200, { 'Content-Type': 'text/xml' })
  res.end(twiml.toString())
})

http.createServer(app).listen(1337, () => {
  console.log("listening on port 1337")
})
