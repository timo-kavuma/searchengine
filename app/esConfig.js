'use strict'
const es = require('@elastic/elasticsearch');
const config = require('./config');
const client = new es.Client({
	node: `http://${config.es_host}:${config.es_port}`
	});

module.exports.esClient= client;







