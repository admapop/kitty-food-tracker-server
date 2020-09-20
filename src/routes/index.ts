import express from 'express';

const router = express.Router();

router.get('/cats', (req, res) => {
  res.send('list of cats');
});
router.get('/cats/:uuid', (req, res) => {
  res.send('cat information');
});
router.post('cats/:uuid', (req, res) => {
  res.send('cat information added');
});

export default router;
