const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.locals.contacts = [
  {
    name: "Courage",
    number: 5556694373,
    bestFriend: true,
    id: 1
  }
]

app.get('/hi', (req, res) => {
  res.status(200).send('Hail and well met!');
});

app.get('/contacts', (req, res) => {
  res.status(200).json({contacts: app.locals.contacts});
})


app.listen(8080, () => console.log('App listening on port 8080'));
