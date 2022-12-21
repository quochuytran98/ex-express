const _ = require("lodash");
const UserModel = require("../models/user.model");
const UserConstant = require("../utils/constants/userModelConstant");
const CryptoServices = require("../services/crypto.services");

const response = {
  code: 2001,
  message: "Thất bại",
  data: {},
};
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
    const payload = _.get(req, "params", {});

    res.render("loveu", { msg: payload.msg });
  } catch (err) {
    console.error(`Error while getting programming languages`, err.message);
    next(err);
  }
}
async function testTemplate(req, res, next) {
  try {
    const params = {
      content: {
        fullname: "Huy",
        amount: "20.0000",
        mcName: "NGUYEN VAN A",
        supplier: "VIET QR",
        total: "20.0000",
        transaction: 172328327823,
        depositCode: "Vietcombank-1232",
        reason: "Thanh toán QR Pay",
        dateTransaction: "20:45 - 20/12/2022",
      },
    };

    res.render("refundV2", params);
  } catch (err) {
    console.error(`Error while getting programming languages`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  const payload = _.get(req, "body", {});
  try {
    console.log(req.body);
    let accountInfo = await UserModel.findOne({ phone: payload.phone });
    if (_.get(accountInfo, "_id", null) !== null) {
      response.code = 2003;
      response.message = "Tài khoản đã tồn tại";
      return res.send(200, response);
    }
    const hashPassword = CryptoServices.hashMd5(payload.password);
    const paramsCreate = {
      fullName: payload.fullName,
      email: payload.email,
      phone: payload.phone,
      avatar: payload.avatar,
      gender: payload.gender,
      password: hashPassword,
      state: UserConstant.STATE.ACTIVE,
    };
    accountInfo = await UserModel.create(paramsCreate);
    if (_.get(accountInfo, "_id", null) === null) {
      response.code = 2001;
      response.message = "Tạo tài khoản thất bại";
      return res.send(200, response);
    }
    response.code = 2000;
    response.message = "Đang kí tài khoản thành công";
    response.data = accountInfo;
    return res.send(200, response);
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
  remove,
  testTemplate,
};
