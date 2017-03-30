var express = require('express');
var router = express.Router();
var vartareas = [
    {
        "nom":"Diseño wireframe",
        "etiquetes": [ "wireframe","app","hibrida"],
        "realització":"25"
    },
    {
        "nom":"Reunión",
        "etiquetes": ["app","hibrida"],
        "realització":"50"
    },
    {
        "nom":"Desarrollo Layout",
        "etiquetes": [ "layout","app","hibrida"],
        "realització":"75"
    },
    {
        "nom":"Reunión cliente",
        "etiquetes": [ "reunión","app","hibrida"],
        "realització":"100"
    }
]
router.get('/', function(req, res, next) {
    res.render('tareas', {title: 'Tareas', tareas:vartareas});
});
router.post('/crear', function(req,res,next) {
    var arrTags = req.body.etiquetes;
    arrTags = arrTags.split(',');
    var nuevaTarea = {
        nom: req.body.nom,
        etiquetes: arrTags,
        realització: req.body.realit
    }
    vartareas.push(nuevaTarea);
    res.redirect('/tareas');
});
module.exports = router;