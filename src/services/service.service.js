const repo = require('../repositories/service.repository');

async function listApprovedServices({ q, category }) {
	const all = await repo.getAllServices();
	let results = all.filter(s => s.approved);
	if (q) {
		results = results.filter(s => s.title && s.title.toLowerCase().includes(q.toLowerCase()));
	}
	if (category) {
		results = results.filter(s => s.category === category);
	}
	return results;
}

async function listAllServices({ q, category }) {
	const all = await repo.getAllServices();
	let results = all;
	if (q) {
		results = results.filter(s => s.title && s.title.toLowerCase().includes(q.toLowerCase()));
	}
	if (category) {
		results = results.filter(s => s.category === category);
	}
	return results;
}

async function getService(id) {
	return await repo.getServiceById(id);
}

async function createService(data) {
	return await repo.addService(data);
}

async function approveService(id) {
	return await repo.approveService(id);
}

async function removeService(id) {
	return await repo.deleteService(id);
}

module.exports = {
	listApprovedServices,
	listAllServices,
	getService,
	createService,
	approveService,
	removeService,
};
