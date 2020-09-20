import express from 'express';
import Cat from '../schemas/cat.schema';

const router = express.Router();

router.get('/cats', (req, res) => {
  res.send(['list of cats', 'lists']);
});
router.get('/cats/:uuid', (req, res) => {
  res.send('cat information');
});
router.post('/cats/new-cat', (req, res) => {
  const { catName: name, catAgeYear, catAgeMonth } = req.body;
  const year = new Date().getUTCFullYear() - catAgeYear;
  const month = new Date().getUTCMonth() - catAgeMonth;
  const age = new Date(Date.UTC(year, month, 1));

  const newCat = new Cat({
    name,
    age,
  });
  newCat.save((err, savedCat) => {
    const { _id, name, age } = savedCat;

    if (err) res.status(500).send('FAILED TO SAVE');

    res.json({
      id: _id,
      catName: name,
      catAge: age,
    });
  });
});
router.post('/cats/:uuid/:day', (req, res) => {
  res.send('cat feeding day added');
});
router.put('cats/:uuid/:day/feeding', (req, res) => {
  res.send('cat feeding information updated');
});

export default router;
