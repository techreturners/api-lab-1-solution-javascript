const {teaService} = require('../services');

const getTea = async (req, res) => {
  const teaName = req.query.teaName;
  const tea = teaService.getTea(teaName);
  res.json(tea).status(200);
};

module.exports = {
  getTea,
};
