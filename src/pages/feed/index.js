"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feed = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Card_1 = require("../../components/Card");
const UserInfo_1 = require("../../components/UserInfo");
const Header_1 = require("../../components/Header");
const styles_1 = require("./styles");
const Feed = () => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Header_1.Header, { autenticado: true }), (0, jsx_runtime_1.jsxs)(styles_1.Container, { children: [(0, jsx_runtime_1.jsxs)(styles_1.Column, { flex: 3, children: [(0, jsx_runtime_1.jsx)(styles_1.Title, { children: "Feed" }), (0, jsx_runtime_1.jsx)(Card_1.Card, {}), (0, jsx_runtime_1.jsx)(Card_1.Card, {}), (0, jsx_runtime_1.jsx)(Card_1.Card, {}), (0, jsx_runtime_1.jsx)(Card_1.Card, {}), (0, jsx_runtime_1.jsx)(Card_1.Card, {}), (0, jsx_runtime_1.jsx)(Card_1.Card, {}), (0, jsx_runtime_1.jsx)(Card_1.Card, {}), (0, jsx_runtime_1.jsx)(Card_1.Card, {}), (0, jsx_runtime_1.jsx)(Card_1.Card, {}), (0, jsx_runtime_1.jsx)(Card_1.Card, {})] }), (0, jsx_runtime_1.jsxs)(styles_1.Column, { flex: 1, children: [(0, jsx_runtime_1.jsx)(styles_1.TitleHighlight, { children: " # RANKING 5 TOP DA SEMANA " }), (0, jsx_runtime_1.jsx)(UserInfo_1.UserInfo, { percentual: 35, nome: "Fernando Laterza", image: "https://avatars.githubusercontent.com/u/111194951?v=4" }), (0, jsx_runtime_1.jsx)(UserInfo_1.UserInfo, { percentual: 50, nome: "Fernando Laterza", image: "https://avatars.githubusercontent.com/u/111194951?v=4" }), (0, jsx_runtime_1.jsx)(UserInfo_1.UserInfo, { percentual: 65, nome: "Fernando Laterza", image: "https://avatars.githubusercontent.com/u/111194951?v=4" }), (0, jsx_runtime_1.jsx)(UserInfo_1.UserInfo, { percentual: 75, nome: "Fernando Laterza", image: "https://avatars.githubusercontent.com/u/111194951?v=4" }), (0, jsx_runtime_1.jsx)(UserInfo_1.UserInfo, { percentual: 90, nome: "Fernando Laterza", image: "https://avatars.githubusercontent.com/u/111194951?v=4" })] })] })] }));
};
exports.Feed = Feed;
