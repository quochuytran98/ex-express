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
async function profile(req, res, next) {
  try {
      const payload = _.get(req, 'params', {});

      res.render('loveu', {msg: payload.msg});
  } catch (err) {
      console.error(`Error while getting programming languages`, err.message);
      next(err);
  }
}

async function create(req, res, next) {
  try {
    console.log(req.body)
    const data = await UserModel.create(req.body)
    res.json(data);
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json("sdsdsd");
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json("sdsdsd");
  } catch (err) {
    console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
  profile,
  remove
};
