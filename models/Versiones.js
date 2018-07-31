'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const versiones = Schema({},
{ collection: 'versiones' });

module.exports = mongoose.model('versiones', versiones);