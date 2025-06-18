const express = require('express');
const router = express.Router();
const requestController = require('../controllers/requestController');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/roleCheck');

router.post('/', auth, roleCheck(['user', 'admin']), requestController.createRequest);
router.get('/', auth, roleCheck(['admin']), requestController.getRequests);

// Volunteer: list available requests
router.get('/available', auth, roleCheck(['volunteer']), requestController.getAvailableRequests);
// Volunteer: claim a request
router.post('/:id/claim', auth, roleCheck(['volunteer']), requestController.claimRequest);

module.exports = router;
