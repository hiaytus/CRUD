const express = require('express');
const app = express();
const port = 8080;

const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development']);
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
});

// GET 
app.get('/', (req, res) =>{
  knex('items')
    .join('users', "users.user_id", "=", "items.user_id")
    .select('*')
    .then(data => res.status(200).json(data))
})

app.get('/items', (req, res) =>{
  knex('items')
    .select('*')
    .then(data => res.status(200).json(data))
})

app.get('/items/:id', (req, res) =>{
  knex('items')
    .where('item_id', req.params.id)
    .select('*')
    .then(data => res.status(200).json(data))
})

app.get('/items/user/:id', (req, res) =>{
  knex('items')
    .where('user_id', req.params.id)
    .select('*')
    .then(data => res.status(200).json(data))
})

app.get('/users', (req, res) =>{
  knex('users')
    .select('*')
    .then(data => res.status(200).json(data))
})


// POST 
app.post('/items', async(req, res) => {
  const maxIdQuery = await knex('items').max('item_id as maxID').first()
  
  await knex('items')
    .insert({
      item_id: maxIdQuery.maxID + 1,
      user_id: req.body.user_id,
      item: req.body.item,
      description: req.body.description,
      quantity: req.body.quantity
    })
    .then(() => {
      knex("items")
        .select("*")
        .then(data => res.json(data))
    })
} )

// PATCH
app.patch('/items/:id', (req, res) => {
  knex('items')
  .where('item_id', req.params.id)
  .update({
      user_id: req.body.user_id,
      item: req.body.item,
      description: req.body.description,
      quantity: req.body.quantity
  })
  .then(() => {
    knex('items')
    .where('item_id', req.params.id)
    .select("*")
    .then(data => res.json(data))});
})