"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var globals_1 = require("@jest/globals");
var enzyme_1 = require("enzyme");
var Application_1 = __importDefault(require("../Application"));
globals_1.it("Test Application", function () {
    var wrapper = enzyme_1.mount(react_1.default.createElement(Application_1.default, null));
    globals_1.expect(wrapper.find('#appBar').length).toEqual(1);
});
