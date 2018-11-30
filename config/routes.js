const knex = require('knex')
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development)
const axios = require('axios');
const bcrypt = require('bcryptjs')
const jwtKey = require('../_secrets/keys').jwtKey;
const jwt = require('jsonwebtoken');

const { authenticate } = require('./middlewares');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

generateToken = (user) => {
  const payload = {
    subject: user.id,
    username: user.username,
  }

  const secret = jwtKey


    const options = {
      expiresIn: '1h',
    }

  return jwt.sign(payload, secret, options)
}

function register(req, res) {
  const creds = req.body
  const hash = bcrypt.hashSync(creds.password, 2)
  creds.password = hash;
  db('users').insert(creds).then(ids => {
    res.status(201).json(ids)
  }).catch(err => res.status(500).json(err))
  // implement user registration
}

function login(req, res) {
  const creds = req.body
  db('users').where({username: creds.username}).first()
  .then(user => {
    if(user && bcrypt.compareSync(creds.password, user.password)) {
      const token = generateToken(user)
      res.status(200).json({message: 'welcome user', token})

      //generate token
    } else {
      res.status(401).json({message: 'You shall not pass'})
    }

  })
  // implement user login
}

function getJokes(req, res) {
  axios
    .get(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
