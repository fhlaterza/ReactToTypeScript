"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const UserInfo = ({ nome, image, percentual }) => {
    return ((0, jsx_runtime_1.jsxs)(styles_1.Container, { children: [(0, jsx_runtime_1.jsx)(styles_1.UserPicture, { src: image || '' }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(styles_1.NameText, { children: nome }), (0, jsx_runtime_1.jsx)(styles_1.Progress, { percentual: percentual })] })] }));
};
exports.UserInfo = UserInfo;
