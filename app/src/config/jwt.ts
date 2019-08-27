const jwt = require('jsonwebtoken');
const secret = "haichao";

const verifyToken = (_token: any) => {
  try {
    let verify = jwt.verify(_token, secret, (error: any, decoded: any) => {
        if(error) {
            return "Token Invalid";
        }
        return decoded;
    });
    return verify;
  } catch (error) {
    return "Token Invalid";
  }
};

export default {
    token: jwt,
    secret,
    check: verifyToken
}