'use strict'

const sucursales = require('../models/Sucursales');

function getSucursales(req,res) {

	let collection = sucursales.find({});

	collection.exec((err, sucursales) => {
		if(err){
			return res.status(500).send({message:"Error al realizar la peticion"});
		}

		if(!sucursales){
			return res.status(500).send({message:"No existen datos"});
		}

		res.status(200).send(sucursales);
	});
	//Test
}

module.exports = {
	getSucursales,
}
