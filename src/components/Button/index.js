"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const Button = ({ title, variant = "primary", onClick }) => {
    return ((0, jsx_runtime_1.jsx)(styles_1.ButtonContainer, { variant: variant, onClick: onClick, children: title }));
};
exports.Button = Button;
