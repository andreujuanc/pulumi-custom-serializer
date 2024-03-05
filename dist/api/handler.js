"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.example_handler = void 0;
const dependency_1 = require("../example/dependency");
const example_handler = function potato() {
    console.log("HEllo");
    const item = new dependency_1.Repo().get();
    new dependency_1.Repo().save(item);
};
exports.example_handler = example_handler;
exports.default = exports.example_handler;
//# sourceMappingURL=handler.js.map