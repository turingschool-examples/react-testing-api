# React Contact Testing API 

This repo contains code for the server intended for use with the React Contact Tester repo.

## Set Up
1. Clone down this repo 
2. `cd` into the newly created directory
3. Run `npm install` to install dependencies
4. Run `npm start` to run the server locally

## Routes

| URL Path | Verb | Required Data | Sample Response Body |
|----------|------|-------------|----------------------|
| `/contacts`| GET| None        | {contacts: [ {name: String, number: String, bestFriend: Boolean, id: Number}, {...}, ...]} |
| `/contacts`| POST| {name: String, number: String} | {newContact: {name: String, number: String, bestFriend: Boolean, id: Number}} |
 
