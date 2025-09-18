
const Airtable = require('airtable');
require('dotenv').config();

Airtable.configure({
	apiKey: process.env.AIRTABLE_API_KEY,
	endpointUrl: process.env.AIRTABLE_ENDPOINT_URL || 'https://api.airtable.com',
	requestTimeout: 300000,
});

// const base = new Airtable({
// 	apiKey: process.env.AIRTABLE_API_KEY
// }).base(process.env.AIRTABLE_BASE_ID);

const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

module.exports = base;
