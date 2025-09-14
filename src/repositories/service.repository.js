
// In-memory data store (replace with Airtable later)
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

function getAllServices() {
	return services;
}

function getServiceById(id) {
	return services.find(s => s.id === id);
}

function addService(service) {
	const newService = {
		...service,
		id: services.length ? services[services.length - 1].id + 1 : 1,
		approved: false,
		submittedAt: new Date(),
	};
	services.push(newService);
	return newService;
}

function approveService(id) {
	const service = services.find(s => s.id === id);
	if (service) service.approved = true;
	return service;
}

function deleteService(id) {
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
