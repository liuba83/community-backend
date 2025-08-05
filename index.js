const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

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

// 🔍 GET all approved services (with optional search)
app.get('/services', (req, res) => {
  const { q, category } = req.query;
  let results = services.filter(s => s.approved);

  if (q) {
    results = results.filter(s => s.title.toLowerCase().includes(q.toLowerCase()));
  }

  if (category) {
    results = results.filter(s => s.category === category);
  }

  res.json(results);
});

// 🔍 GET service by ID
app.get('/services/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const service = services.find(s => s.id === id);
  if (!service) return res.status(404).json({ message: 'Service not found' });
  res.json(service);
});

// ✍️ POST new service (not approved by default)
app.post('/services', (req, res) => {
  const {
    title, description, category, hashtags, address,
    phone, email, website
  } = req.body;

  const newService = {
    id: services.length ? services[services.length - 1].id + 1 : 1,
    title,
    description,
    category,
    hashtags,
    address,
    phone,
    email,
    website,
    approved: false,
    submittedAt: new Date(),
  };

  services.push(newService);
  res.status(201).json({ message: 'Service submitted for review', service: newService });
});

// ✅ PUT approve service (admin simulation)
app.put('/services/:id/approve', (req, res) => {
  const id = parseInt(req.params.id);
  const service = services.find(s => s.id === id);
  if (!service) return res.status(404).json({ message: 'Service not found' });

  service.approved = true;
  res.json({ message: 'Service approved', service });
});

// ❌ DELETE service (admin simulation)
app.delete('/services/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = services.findIndex(s => s.id === id);
  if (index === -1) return res.status(404).json({ message: 'Service not found' });

  const deleted = services.splice(index, 1);
  res.json({ message: 'Service deleted', deleted: deleted[0] });
});

// 🔥 Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
