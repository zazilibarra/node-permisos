'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PermisoController = require('./controllers/PermisoxTipoUsuario');
const Estructura = require('./controllers/EstructuraMenus');
const PermisoxUsuarioController = require('./controllers/PermisoxUsuario');
const Versiones = require('./controllers/Versiones');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/api/permiso/', PermisoController.getPermiso);
app.get('/api/permiso/:idTipoUsuario', PermisoController.getPermisoByIDTipoUsuario);
app.get('/api/estructuramenu/', Estructura.getEstructura);
app.get('/api/permisoxusuario/', PermisoxUsuarioController.getPermisoxUsuario);
app.get('/api/permisoxusuario/:idUsuario', PermisoxUsuarioController.getPermisoxUsuarioByIDUsuario);
app.get('/api/versiones/', Versiones.getVersiones);

module.exports = app