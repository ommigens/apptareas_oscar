var express = require('express');
var router = express.Router();

   router.get('/', function(req, res, next) {
          res.render('nueva', {title: 'Nueva Tarea'});
        });

    module.exports = router;