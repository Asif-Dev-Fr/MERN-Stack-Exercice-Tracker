const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get((req, rest) => {
    User.find()
        .then(users => rest.json(users))
        .catch(err => rest.status(400).json('Error' + err));
});

router.route('/add').post((req,res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added !'))
        .catch(err => res.statut(400).json('Error' + err));
});

module.exports = router;

