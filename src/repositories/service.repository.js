const base = require('../config/airtable');
const AIRTABLE_TABLE = process.env.AIRTABLE_TABLE || 'database';

let services = [
	{
		id: 1,
		title: 'Bright Cleaners',
		description: 'Home and office cleaning service.',
		category: 'Home Services',
		hashtags: ['#cleaning', '#eco'],
		address: '123 Main St',
		phone: '123-456-7890',
		email: 'info@brightcleaners.com',
		website: 'https://brightcleaners.com',
		approved: true,
		submittedAt: new Date(),
	},
	{
		id: 2,
		title: 'Math Tutoring by John',
		description: 'Experienced tutor offering online math lessons.',
		category: 'Education',
		hashtags: ['#math', '#tutoring'],
		address: '',
		phone: '',
		email: 'john.tutor@gmail.com',
		website: '',
		approved: false,
		submittedAt: new Date(),
	},
];


async function getAllServices() {
	if (process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID) {
		const records = await base(AIRTABLE_TABLE).select().all();
		
		return records.map(r => ({ id: r.id, ...r.fields }));
	}
	return services;
}


async function getServiceById(id) {
	if (process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID) {
		const record = await base(AIRTABLE_TABLE).find(id);
		return { id: record.id, ...record.fields };
	}
	return services.find(s => s.id === id);
}


async function addService(service) {
	if (process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID) {
		const created = await base(AIRTABLE_TABLE).create({
			...service,
			approved: false,
			submittedAt: new Date().toISOString(),
		});
		return { id: created.id, ...created.fields };
	}
	const newService = {
		...service,
		id: services.length ? services[services.length - 1].id + 1 : 1,
		approved: false,
		submittedAt: new Date(),
	};
	services.push(newService);
	return newService;
}


async function approveService(id) {
	if (process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID) {
		const updated = await base(AIRTABLE_TABLE).update(id, { approved: true });
		return { id: updated.id, ...updated.fields };
	}
	const service = services.find(s => s.id === id);
	if (service) service.approved = true;
	return service;
}


async function deleteService(id) {
	if (process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID) {
		const deleted = await base(AIRTABLE_TABLE).destroy(id);
		return { id: deleted.id, ...deleted.fields };
	}
	const index = services.findIndex(s => s.id === id);
	if (index === -1) return null;
	const deleted = services.splice(index, 1);
	return deleted[0];
}

module.exports = {
	getAllServices,
	getServiceById,
	addService,
	approveService,
	deleteService,
};
