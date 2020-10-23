const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(cors());

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

app.get('/api/v1/contacts', (req, res) => {
  res.status(200).json({contacts: app.locals.contacts});
})

app.post('/api/v1/contacts', (req, res) => {
  const requiredProperties = [ "name", "number" ];
  console.log(req)
  const receivedProperties = Object.keys(req.body);
  console.log(receivedProperties);
  for (let property of requiredProperties) {
    if (! receivedProperties.includes(property)) {
      return res.status(422).json({error: `Cannot POST: missing property ${property} in request.`});
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

app.patch('/api/v1/contacts/:id', (req, res) => {
  const { id } = req.params;

  const foundIndex = app.locals.contacts.findIndex(contact => contact.id === +id);
  if (foundIndex === -1) {
    return res.status(422).json({error: `Cannot find contact with id of ${id}`});
  }

  app.locals.contacts[foundIndex].bestFriend = !app.locals.contacts[foundIndex].bestFriend;
  return res.status(200).json({updatedContact: app.locals.contacts[foundIndex]});
});

app.delete(`/api/v1/contacts/:id`, (req, res) => {
  const { id } = req.params;
  console.log(id)
  const updatedContacts = app.locals.contacts.filter(contact => contact.id !== +id);
  console.log(updatedContacts);
  if (updatedContacts.length === app.locals.contacts.length ) {
    return res.status(422).json({error: `Cannot DELETE: no contact with id ${id} found`});
  }
  
  app.locals.contacts = updatedContacts;
  console.log(app.locals.contact);
  return res.sendStatus(204)
});


app.listen(8080, () => console.log('App listening on port 8080'));
