"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require('jsonwebtoken');
var secret = "haichao";
var verifyToken = function (_token) {
    try {
        var verify = jwt.verify(_token, secret, function (error, decoded) {
            if (error) {
                return "Token Invalid";
            }
            return decoded;
        });
        return verify;
    }
    catch (error) {
        return "Token Invalid";
    }
};
exports.default = {
    token: jwt,
    secret: secret,
    check: verifyToken
};
