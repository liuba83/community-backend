const base = require('../config/airtable');
const AIRTABLE_TABLE = process.env.AIRTABLE_TABLE;

async function getAllServices() {
  const records = await base(AIRTABLE_TABLE).select().all();
  return records.map((r) => ({ id: r.id, ...r.fields }));
}

async function getServiceById(id) {
  const record = await base(AIRTABLE_TABLE).find(id);
  return { id: record.id, ...record.fields };
}

async function addService(service) {
  const created = await base(AIRTABLE_TABLE).create({
    ...service,
    approved: false,
  });
  return { id: created.id, ...created.fields };
}

async function approveService(id) {
  const updated = await base(AIRTABLE_TABLE).update(id, { approved: true });
  return { id: updated.id, ...updated.fields };
}

async function denyService(id) {
  const updated = await base(AIRTABLE_TABLE).update(id, { approved: false });
  return { id: updated.id, ...updated.fields };
}

async function deleteService(id) {
  const deleted = await base(AIRTABLE_TABLE).destroy(id);
  return { id: deleted.id, ...deleted.fields };
}

module.exports = {
  getAllServices,
  getServiceById,
  addService,
  approveService,
  denyService,
  deleteService,
};
