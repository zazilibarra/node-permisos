'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PermisoController = require('./controllers/PermisoxTipoUsuario')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/api/permiso/', PermisoController.getPermiso);
app.get('/api/permiso/:idTipoUsuario', PermisoController.getPermisoByIDTipoUsuario);

module.exports = app