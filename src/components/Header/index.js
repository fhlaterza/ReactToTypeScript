"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const logo_dio_png_1 = __importDefault(require("../../assets/logo-dio.png"));
const Button_1 = require("../Button");
const styles_1 = require("./styles");
const Header = ({ autenticado }) => {
    return ((0, jsx_runtime_1.jsx)(styles_1.Wrapper, { children: (0, jsx_runtime_1.jsxs)(styles_1.Container, { children: [(0, jsx_runtime_1.jsxs)(styles_1.Row, { children: [(0, jsx_runtime_1.jsx)("img", { src: logo_dio_png_1.default, alt: "Logo da dio" }), autenticado ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(styles_1.BuscarInputContainer, { children: (0, jsx_runtime_1.jsx)(styles_1.Input, { placeholder: 'Buscar...' }) }), (0, jsx_runtime_1.jsx)(styles_1.Menu, { children: "Live Code" }), (0, jsx_runtime_1.jsx)(styles_1.Menu, { children: "Global" })] })) : null] }), (0, jsx_runtime_1.jsx)(styles_1.Row, { children: autenticado ? ((0, jsx_runtime_1.jsx)(styles_1.UserPicture, { src: "https://avatars.githubusercontent.com/u/111194951?v=4" })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(styles_1.MenuRight, { href: "/", children: "Home" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { title: "Entrar" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { title: "Cadastrar" })] })) })] }) }));
};
exports.Header = Header;
