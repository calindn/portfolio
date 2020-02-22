const express = require('express');
const sendMail = require('./mail');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    console.log('it started');
});
app.use(cors());
app.use(express.json());

app.post('/', function (req, res) {
  console.log(req.body);
  res.send(req.body);
  const { name, email, text } = req.body;
  sendMail(email, name, text, (err,data) => {
      if(err) {
          res.status(500).json({ message: 'Internal server error!' });
      } else {
          res.json({ message: 'Email sent!' });
      }
  }) 
});


