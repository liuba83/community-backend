const service = require('../services/service.service');

// GET /services
async function getAll(req, res, next) {
	try {
		const { q, category } = req.query;
		const results = await service.listApprovedServices({ q, category });
		if (!results || results.length === 0) {
			return res.status(404).json({ message: 'No services found' });
		}
		res.json(results);
	} catch (err) {
		next(err);
	}
}

// GET /services/all
async function getAllUnfiltered(req, res, next) {
	try {
		const { q, category } = req.query;
		const results = await service.listAllServices({ q, category });
		if (!results || results.length === 0) {
			return res.status(404).json({ message: 'No services found' });
		}
		res.json(results);
	} catch (err) {
		next(err);
	}
}

// GET /services/:id
async function getById(req, res, next) {
	try {
		const id = req.params.id;
		const svc = await service.getService(id);
		if (!svc) return res.status(404).json({ message: 'Service not found' });
		res.json(svc);
	} catch (err) {
		next(err);
	}
}

// POST /services
async function create(req, res, next) {
	try {
		const newService = await service.createService(req.body);
		res.status(201).json({ message: 'Service submitted for review', service: newService });
	} catch (err) {
		next(err);
	}
}

// PUT /services/:id/approve
async function approve(req, res, next) {
	try {
		const id = req.params.id;
		const svc = await service.approveService(id);
		if (!svc) return res.status(404).json({ message: 'Service not found' });
		res.json({ message: 'Service approved', service: svc });
	} catch (err) {
		next(err);
	}
}

// PUT /services/:id/deny
async function deny(req, res, next) {
	try {
		const id = req.params.id;
		const svc = await service.denyService(id);
		if (!svc) return res.status(404).json({ message: 'Service not found' });
		res.json({ message: 'Service denied', service: svc });
	} catch (err) {
		next(err);
	}
}

// DELETE /services/:id
async function remove(req, res, next) {
	try {
		const id = req.params.id;
		const deleted = await service.removeService(id);
		if (!deleted) return res.status(404).json({ message: 'Service not found' });
		res.json({ message: 'Service deleted', deleted });
	} catch (err) {
		next(err);
	}
}

module.exports = {
	getAll,
	getAllUnfiltered,
	getById,
	create,
	approve,
	deny,
	remove,
};
