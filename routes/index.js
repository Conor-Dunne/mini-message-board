const express = require('express');
const router = express.Router();
const moment = require('moment');

const messages = [
  {
    text: "Thank you for visting my project!",
    user: "Conor",
    added: moment().format('MMMM Do YYYY, h:mm:ss a')
  },
  {
    text: "Hi there!",
    user: "Amando",
    added: moment().format('MMMM Do YYYY, h:mm:ss a')
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: moment().format('MMMM Do YYYY, h:mm:ss a')
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard' , messages: messages});
});

// Get form
router.get('/new', function(req,res,next) {
  res.render("form",{ title: 'Add Comment'} );
})

// Post message
router.post('/new', (req, res, next) => {
  console.log(req.body)
  messages.unshift({text: req.body.comment, user: req.body.name, added: moment().format('MMMM Do YYYY, h:mm:ss a')});
  res.redirect('/');
});

module.exports = router;
