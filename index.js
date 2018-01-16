import http from 'http';
import Express from 'express';

const app = new Express();

app.post('/sms', (req, res) => {
  console.log('message received');
})

http.createServer(app).listen(3000, () => console.log("listening on port 3000"));
