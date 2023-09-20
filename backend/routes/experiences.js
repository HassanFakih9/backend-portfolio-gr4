const express = require('express');
const model = require('../models/Experience');

const router = express.Router();

// Create a new record
router.post('/', async (req, res) => {
  const newRecord = await model.create(req.body);
  res.send(newRecord);
});

// Get all records
router.get('/', async (req, res) => {
  const records = await model.find();
  res.send(records);
});

// Get a single record
router.get('/:id', async (req, res) => {
  const record = await model.findById(req.params.id);
  res.send(record);
});

// Update a record
router.put('/:id', async (req, res) => {
  const updatedRecord = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updatedRecord);
});

// Delete a record
router.delete('/:id', async (req, res) => {
  await model.findByIdAndDelete(req.params.id);
  res.send({ message: 'Record deleted successfully' });
});

module.exports = router;
