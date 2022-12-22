const _ = require('lodash');
const UserModel = require('../models/user.model')

async function get(req, res, next) {
  try {
      res.json("sdsdsd");
  } catch (err) {
      console.error(`Error while getting programming languages`, err.message);
      next(err);
  }
}
async function policy(req, res, next) {
  try {
      res.render('policy');
  } catch (err) {
      next(err);
  }
}
async function term(req, res, next) {
  try {
      res.render('term');
  } catch (err) {
      next(err);
  }
}


module.exports = {
  policy,
  term
};
