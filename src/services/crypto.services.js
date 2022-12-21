const crypto = require("crypto");
const hashMd5 = (string) => {
	const salt = crypto.randomBytes(128).toString("hex");
	const hashString = crypto
		.createHash("md5", salt)
		.update(string)
		.digest("hex");
	return hashString;
};

module.exports = {
	hashMd5,
};
