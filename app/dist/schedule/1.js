"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var puppeteer = require('puppeteer');
var Pupperteer = {
    fetch: function () {
        return __awaiter(this, void 0, void 0, function () {
            var browser, page, UA, chapter_list_url, content, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, puppeteer.launch({
                                // 是否不显示浏览器， 为true则不显示
                                'headless': true,
                                args: [
                                    '--proxy-server="direct://"',
                                    '--proxy-bypass-list=*'
                                ]
                            })];
                    case 1:
                        browser = _a.sent();
                        return [4 /*yield*/, browser.newPage()];
                    case 2:
                        page = _a.sent();
                        UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/63.0.3239.84 Chrome/63.0.3239.84 Safari/537.36";
                        return [4 /*yield*/, Promise.all([
                                page.setUserAgent(UA),
                                // 允许运行js
                                page.setJavaScriptEnabled(true),
                            ])];
                    case 3:
                        _a.sent();
                        chapter_list_url = "http://f10.eastmoney.com/ProfitForecast/Index?type=web&code=SZ002223";
                        // let chapter_list_url = ``
                        // 打开章节列表
                        return [4 /*yield*/, page.goto(chapter_list_url)];
                    case 4:
                        // let chapter_list_url = ``
                        // 打开章节列表
                        _a.sent();
                        return [4 /*yield*/, page.$eval('.main', function (el) {
                                var body = document.querySelectorAll('.main table:nth-child(2) td:last-child');
                                console.log(body);
                                var arr = [];
                                for (var i = 0; i < body.length; i++) {
                                    var obj = {
                                        artical_name: body[i].childNodes[0].innerText,
                                        artical_href: body[i].childNodes[0].href,
                                        artical_achour: body[i].innerText
                                    };
                                    arr.push(obj);
                                }
                                return arr;
                            })];
                    case 5:
                        content = _a.sent();
                        content.length = 19;
                        console.log(content);
                        return [3 /*break*/, 7];
                    case 6:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [2 /*return*/, err_1];
                    case 7: return [2 /*return*/];
                }
            });
        });
    },
    insert: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    },
};
Pupperteer.fetch();
exports.default = Pupperteer;
