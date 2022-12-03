const _ = require('lodash');
const TelegrafServices = require("../services/telegraf.service");

async function sendMessage(req, res, next) {
  try {
    const payload = _.get(req, 'params', {});

    await TelegrafServices(payload.msg);
    res.json("ok nha");
  } catch (err) {
    console.error(`Error while getting programming languages`, err.message);
    next(err);
  }
}
module.exports = {
    sendMessage,
};
