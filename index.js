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

app.post('/contacts', (req, res) => {
  const requiredProperties = [ "name", "number" ];
  //console.log(req)
  const receivedProperties = Object.keys(req.body);
  console.log(receivedProperties);
  for (let property of requiredProperties) {
    if (! receivedProperties.includes(property)) {
      return res.status(422).json({message: `Cannot POST: missing property ${property} in response.`});
    }
  }
  const newContact = {
    ...req.body,
    id: Date.now(),
    bestFriend: false
  }

  app.locals.contacts.push(newContact);
  return res.status(201).json({newContact: newContact});
});


app.listen(8080, () => console.log('App listening on port 8080'));
