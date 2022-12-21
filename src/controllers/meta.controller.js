const _ = require("lodash");
const UserModel = require("../models/user.model");
const UserConstant = require("../utils/constants/userModelConstant");
const CryptoServices = require("../services/crypto.services");
const TelegrafServices = require("../services/telegraf.service");

const response = {
  code: 2001,
  message: "Thất bại",
  data: {},
};
async function callbackPost(req, res, next) {
  try {
    const payload = _.get(req, 'body', {});
    return await TelegrafServices(JSON.stringify(payload));
  } catch (err) {
    console.error(`Error while getting programming languages`, err.message);
    next(err);
  }
}
async function webhook(req, res, next) {
  try {
    if(req.query['hub.verify_token'] === 'verify_token_2022') {
      res.send(req.query['hub.challenge']);
    }
    res.send('wrong verify');
  } catch (err) {
    console.error(`Error while getting programming languages`, err.message);
    next(err);
  }
}

module.exports = {
  callbackPost,
  webhook
};
