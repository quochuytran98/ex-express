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
    const payload = _.get(req, "body", {});
    console.log("PAYLOAD", payload);
    const data = [];
    payload.entry.forEach((entry) => {
      entry.changed_fields && entry.changed_fields.forEach((change) => {
        // Lấy thông tin bài đăng mới nhất
        data.push(change);

        // Xử lý dữ liệu và trả lại kết quả cho Facebook
        // ...
      });
    });
    console.log("DATA ==>", JSON.stringify(data));
    // return await TelegrafServices(JSON.stringify(payload));
  } catch (err) {
    console.error(`Error while getting programming languages`, err.message);
    next(err);
  }
}

async function webhook(req, res, next) {
  try {
    if (req.query["hub.verify_token"] === "verify_token_2022") {
      res.send(req.query["hub.challenge"]);
    }
    res.send("wrong verify");
  } catch (err) {
    console.error(`Error while getting programming languages`, err.message);
    next(err);
  }
}
async function webhookMessenger(req, res, next) {
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Check if a token and mode is in the query string of the request
  if (mode && token) {
    // Check the mode and token sent is correct
    if (mode === "subscribe" && token === 'verify_token_2022') {
      // Respond with the challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Respond with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
}
async function callbackDataMessenger(req, res, next) {
  try {
    const payload = _.get(req, "body", {});
    console.log("PAYLOAD_MESSENGER", payload);
    const data = [];
    payload.entry.forEach((entry) => {
      entry.changed_fields && entry.changed_fields.forEach((change) => {
        // Lấy thông tin bài đăng mới nhất
        data.push(change);

        // Xử lý dữ liệu và trả lại kết quả cho Facebook
        // ...
      });
    });
    console.log("DATA ==> MESSENGER", JSON.stringify(data));
    // return await TelegrafServices(JSON.stringify(payload));
  } catch (err) {
    console.error(`Error while getting programming languages`, err.message);
    next(err);
  }
}
module.exports = {
  callbackPost,
  webhook,
  webhookMessenger,
  callbackDataMessenger
};
