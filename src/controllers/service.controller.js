
const service = require('../services/service.service');

// GET /services
function getAll(req, res, next) {
	try {
		const { q, category } = req.query;
		const results = service.listApprovedServices({ q, category });
		res.json(results);
	} catch (err) {
		next(err);
	}
}

// GET /services/:id
function getById(req, res, next) {
	try {
		const id = parseInt(req.params.id);
		const svc = service.getService(id);
		if (!svc) return res.status(404).json({ message: 'Service not found' });
		res.json(svc);
	} catch (err) {
		next(err);
	}
}

// POST /services
function create(req, res, next) {
	try {
		const newService = service.createService(req.body);
		res.status(201).json({ message: 'Service submitted for review', service: newService });
	} catch (err) {
		next(err);
	}
}

// PUT /services/:id/approve
function approve(req, res, next) {
	try {
		const id = parseInt(req.params.id);
		const svc = service.approveService(id);
		if (!svc) return res.status(404).json({ message: 'Service not found' });
		res.json({ message: 'Service approved', service: svc });
	} catch (err) {
		next(err);
	}
}

// DELETE /services/:id
function remove(req, res, next) {
	try {
		const id = parseInt(req.params.id);
		const deleted = service.removeService(id);
		if (!deleted) return res.status(404).json({ message: 'Service not found' });
		res.json({ message: 'Service deleted', deleted });
	} catch (err) {
		next(err);
	}
}

module.exports = {
	getAll,
	getById,
	create,
	approve,
	remove,
};
