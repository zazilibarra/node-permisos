'use strict'

const EstructuraMenus = require('../models/EstructuraMenus');

function getEstructura(req,res) {

	EstructuraMenus.find({}, (err, estructura) => {
		if(err){
			return res.status(500).send({message:"Error al realizar la peticion"});
		}

		if(!estructura){
			return res.status(500).send({message:"No existen datos"});
		}

		res.status(200).send(estructura);
	});

}

module.exports = {
	getEstructura
}
