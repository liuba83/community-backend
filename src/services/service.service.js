
const repo = require('../repositories/service.repository');

function listApprovedServices({ q, category }) {
	let results = repo.getAllServices().filter(s => s.approved);
	if (q) {
		results = results.filter(s => s.title.toLowerCase().includes(q.toLowerCase()));
	}
	if (category) {
		results = results.filter(s => s.category === category);
	}
	return results;
}

function getService(id) {
	return repo.getServiceById(id);
}

function createService(data) {
	return repo.addService(data);
}

function approveService(id) {
	return repo.approveService(id);
}

function removeService(id) {
	return repo.deleteService(id);
}

module.exports = {
	listApprovedServices,
	getService,
	createService,
	approveService,
	removeService,
};
