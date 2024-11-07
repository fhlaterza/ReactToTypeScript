"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const md_1 = require("react-icons/md");
const Button_1 = require("../../components/Button");
const Header_1 = require("../../components/Header");
const Input_1 = require("../../components/Input");
const api_1 = require("../../services/api");
const react_hook_form_1 = require("react-hook-form");
const styles_1 = require("./styles");
const Login = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { control, handleSubmit, formState: { errors } } = (0, react_hook_form_1.useForm)({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });
    const onSubmit = (formData) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { data } = yield api_1.api.get(`/users?email=${formData.email}&senha=${formData.password}`);
            if (data.length && data[0].id) {
                navigate('/feed');
                return;
            }
            alert('Usuário ou senha inválido');
        }
        catch (e) {
            //TODO: HOUVE UM ERRO
        }
    });
    console.log('errors', errors);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Header_1.Header, {}), (0, jsx_runtime_1.jsxs)(styles_1.Container, { children: [(0, jsx_runtime_1.jsx)(styles_1.Column, { children: (0, jsx_runtime_1.jsx)(styles_1.Title, { children: "A plataforma para voc\u00EA aprender com experts, dominar as principais tecnologias e entrar mais r\u00E1pido nas empresas mais desejadas." }) }), (0, jsx_runtime_1.jsx)(styles_1.Column, { children: (0, jsx_runtime_1.jsxs)(styles_1.Wrapper, { children: [(0, jsx_runtime_1.jsx)(styles_1.TitleLogin, { children: "Fa\u00E7a seu cadastro" }), (0, jsx_runtime_1.jsx)(styles_1.SubtitleLogin, { children: "Fa\u00E7a seu login e make the change._" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), children: [(0, jsx_runtime_1.jsx)(Input_1.Input, { placeholder: "E-mail", leftIcon: (0, jsx_runtime_1.jsx)(md_1.MdEmail, {}), name: "email", control: control }), errors.email && (0, jsx_runtime_1.jsx)("span", { children: "E-mail \u00E9 obrigat\u00F3rio" }), (0, jsx_runtime_1.jsx)(Input_1.Input, { type: "password", placeholder: "Senha", leftIcon: (0, jsx_runtime_1.jsx)(md_1.MdLock, {}), name: "senha", control: control }), errors.password && (0, jsx_runtime_1.jsx)("span", { children: "Senha \u00E9 obrigat\u00F3rio" }), (0, jsx_runtime_1.jsx)(Button_1.Button, { title: "Entrar", variant: "secondary", type: "submit" })] }), (0, jsx_runtime_1.jsxs)(styles_1.Row, { children: [(0, jsx_runtime_1.jsx)(styles_1.EsqueciText, { children: "Esqueci minha senha" }), (0, jsx_runtime_1.jsx)(styles_1.CriarText, { children: "Criar Conta" })] })] }) })] })] }));
};
exports.Login = Login;
