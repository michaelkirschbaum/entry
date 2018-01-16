import Express from 'express';
import Twilio from 'twilio';

const app = new Express();

app.get('/', function(req, res) {
  res.send('keyless');
})

app.listen(3000, () => console.log("listening on port 3000"));
