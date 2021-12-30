const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

/* GET home page. */
router.post('/', function (req, res, next) {
  const { id, pw } = req.body;
  if (id !== 'admin' || pw !== 'admin') {
    res.status(200).send({ state: 'error', msg: '회원정보가 없습니다.' });
    return;
  }
  const token = jwt.sign(
    {
      data: id,
    },
    process.env.secret_key,
    { expiresIn: 60 * 60 },
  );
  res.send({ state: 'success', accessToken: token });
});

router.get('/check', (req, res) => {
  const token = req.headers.accesstoken;
  jwt.verify(token, process.env.secret_key, (err, decoded) => {
    if (!err) {
      res.send({ status: 'success', msg: 'good' });
    } else {
      res.status(401).send({ status: 'error', msg: err });
    }
  });
});
module.exports = router;
