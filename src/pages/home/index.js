"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const banner_png_1 = __importDefault(require("../../assets/banner.png"));
const Button_1 = require("../../components/Button");
const Header_1 = require("../../components/Header");
const styles_1 = require("./styles");
const Home = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleClickSignIn = () => {
        navigate('/login');
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Header_1.Header, {}), (0, jsx_runtime_1.jsxs)(styles_1.Container, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)(styles_1.Title, { children: [(0, jsx_runtime_1.jsxs)(styles_1.TitleHighlight, { children: ["Implemente ", (0, jsx_runtime_1.jsx)("br", {})] }), "o seu futuro global agora!"] }), (0, jsx_runtime_1.jsx)(styles_1.TextContent, { children: "Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts." }), (0, jsx_runtime_1.jsx)(Button_1.Button, { title: "Come\u00E7ar agora", variant: "secondary", onClick: handleClickSignIn })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("img", { src: banner_png_1.default, alt: "Imagem principal do site." }) })] })] }));
};
exports.Home = Home;
