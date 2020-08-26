# React Contact Testing API 

This repo contains code for the server intended for use with the React Contact Tester repo.

## Set Up
1. Clone down this repo 
2. `cd` into the newly created directory
3. Run `npm install` to install dependencies
4. Run `npm start` to run the server locally

## Routes

| URL Path | Verb | Required Data | Sample Successful Response |
|----------|------|-------------|----------------------|
| `/api/v1/contacts`| GET| None        | {contacts: [ {name: String, number: String, bestFriend: Boolean, id: Number}, {...}, ...]} |
| `/api/v1/contacts`| POST| {name: String, number: String} | {newContact: {name: String, number: String, bestFriend: Boolean, id: Number}} |
| `/api/v1/contacts/:id`| PATCH| contact id should be in the url | {updatedContact: {name: String, number: String, bestFriend: Boolean, id: Number}}(bestFriend status will be changed) |
| `/api/v1/contacts/:id`| DELETE| contact id should be in the url | 204 status code (no content in response body )|
 

## TODO:
- [x] Add PATCH route 
- [x] Add docs for PATCH route 
- [ ] Add DELETE route
- [ ] Add docs for DELETE route
- [ ] Hookup FE to BE 
  - Make it so that the FE makes a get request on load, post on add
  - Make it so that the FE make a GET on load, DELETE on delete and another GET afterwards
- [ ] Write up some questions:  
  - for this test: what should we mock?
  - for this test: how many times do we need to mock the get request? 
  - etc 

