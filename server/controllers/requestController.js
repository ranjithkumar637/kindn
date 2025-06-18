const Request = require('../models/Request');

exports.createRequest = async (req, res) => {
  try {
    const newRequest = new Request(req.body);
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRequests = async (req, res) => {
  try {
    const requests = await Request.find();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// List all unclaimed requests for volunteers
exports.getAvailableRequests = async (req, res) => {
  try {
    const requests = await Request.find({ claimedBy: null });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Claim a request
exports.claimRequest = async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);
    if (!request) return res.status(404).json({ message: 'Request not found' });
    if (request.claimedBy) return res.status(400).json({ message: 'Request already claimed' });
    request.claimedBy = req.user.id;
    await request.save();
    res.json({ message: 'Request claimed successfully', request });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
