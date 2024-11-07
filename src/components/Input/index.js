"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_form_1 = require("react-hook-form");
const styles_1 = require("./styles");
const Input = (_a) => {
    var { leftIcon, name, control, errorMessage } = _a, rest = __rest(_a, ["leftIcon", "name", "control", "errorMessage"]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(styles_1.InputContainer, { children: [leftIcon ? ((0, jsx_runtime_1.jsx)(styles_1.IconContainer, { children: leftIcon })) : null, (0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: name, control: control, rules: { required: true }, render: ({ field }) => (0, jsx_runtime_1.jsx)(styles_1.InputText, Object.assign({}, field, rest)) })] }), errorMessage ? (0, jsx_runtime_1.jsx)(styles_1.ErrorText, { children: errorMessage }) : null] }));
};
exports.Input = Input;
