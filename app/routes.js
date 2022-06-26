const router = require('express').Router();

router.use('/api/v1/patients', require('../routes/patient'))

router.get('/health', (req, res) => {
  res.status(200).json({ message: 'Success' });
});

module.exports = router;