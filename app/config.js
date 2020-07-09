const result = require('dotenv').config();

module.exports= {
es_host: process.env.ELASTICSEARCH_HOST,
es_port: process.env.ELASTICSEARCH_PORT,
es_index:process.env.ELASTICSEARCH_INDEX,
es_type:process.env.ELASTICSEARCH_TYPE,
app_port: process.env.APP_PORT
};


if (result.error) {
  console.log(result.error, "[Error Parsing env variables!]");
  throw result.error;
};

// console.log(result.parsed, '[Parsed env variables!]');
