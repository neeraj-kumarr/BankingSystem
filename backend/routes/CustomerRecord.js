// routes/CutsomerRecord.js
const express = require('express');
const router = express.Router();
const CustomerRecord = require('../models/CustomerRecord');

// Route to get all records
router.get('/records', async (req, res) => {
    const records = await CustomerRecord.find()
    // .then(records => res.json(records))
    // .catch(err => res.json(err))
    res.json(records)
});

module.exports = router;
