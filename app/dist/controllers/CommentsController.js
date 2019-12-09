"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var routing_controllers_1 = require("routing-controllers");
var bodyparser_1 = __importDefault(require("../config/bodyparser"));
var Comments_1 = __importDefault(require("../models/Comments"));
var localhost_1 = __importDefault(require("../config/localhost"));
var CommentsController = /** @class */ (function () {
    function CommentsController() {
    }
    CommentsController.prototype.getAll = function (page, search) {
        return __awaiter(this, void 0, void 0, function () {
            var r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // 获取所有文章信息
                        console.log(search);
                        return [4 /*yield*/, Comments_1.default.fetch(page, search)];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, {
                                data: r
                            }];
                }
            });
        });
    };
    CommentsController.prototype.sendComment = function (res, params) {
        return __awaiter(this, void 0, void 0, function () {
            var r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Comments_1.default.sendComment(res, params)];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, {
                                data: r
                            }];
                }
            });
        });
    };
    CommentsController.prototype.put = function (id, user) {
        return "Updating a user...";
    };
    CommentsController.prototype.remove = function (id) {
        return "Removing user...";
    };
    __decorate([
        routing_controllers_1.Get("/asdasdasd"),
        routing_controllers_1.Header("Access-Control-Allow-Origin", localhost_1.default),
        routing_controllers_1.Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"),
        routing_controllers_1.Header("Access-Control-Allow-Credentials", "true"),
        routing_controllers_1.Header("Access-Control-Allow-Headers", "X-Requested-With, token"),
        routing_controllers_1.Header("Content-Type", "text/html; charset=utf-8"),
        __param(0, routing_controllers_1.QueryParam("page")), __param(1, routing_controllers_1.QueryParam("search"))
    ], CommentsController.prototype, "getAll", null);
    __decorate([
        routing_controllers_1.Post("/sendComment"),
        routing_controllers_1.Header("Access-Control-Allow-Origin", localhost_1.default),
        routing_controllers_1.Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"),
        routing_controllers_1.Header("Access-Control-Allow-Credentials", "true"),
        routing_controllers_1.Header("Access-Control-Allow-Headers", "X-Requested-With, token"),
        routing_controllers_1.Header("Content-Type", "text/html; charset=utf-8"),
        __param(0, routing_controllers_1.Body()), __param(1, routing_controllers_1.CookieParams())
    ], CommentsController.prototype, "sendComment", null);
    __decorate([
        routing_controllers_1.Put("/users/:id"),
        __param(0, routing_controllers_1.Param("id")), __param(1, routing_controllers_1.Body())
    ], CommentsController.prototype, "put", null);
    __decorate([
        routing_controllers_1.Delete("/users/:id"),
        __param(0, routing_controllers_1.Param("id"))
    ], CommentsController.prototype, "remove", null);
    CommentsController = __decorate([
        routing_controllers_1.JsonController(),
        routing_controllers_1.UseBefore(bodyparser_1.default)
    ], CommentsController);
    return CommentsController;
}());
exports.CommentsController = CommentsController;