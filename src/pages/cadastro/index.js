"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.Cadastro = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_hook_form_1 = require("react-hook-form");
const yup_1 = require("@hookform/resolvers/yup");
const yup = __importStar(require("yup"));
const md_1 = require("react-icons/md");
const Button_1 = require("../../components/Button");
const Header_1 = require("../../components/Header");
const Input_1 = require("../../components/Input");
const api_1 = require("../../services/api");
const styles_1 = require("./styles");
const schema = yup.object({
    nome: yup.string().min(3, 'No minimo 3 caracteres').required('Campo Obrigatório'),
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo obrigatório'),
}).required();
const Cadastro = () => {
    var _a, _b, _c;
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { control, handleSubmit, formState: { errors, isValid } } = (0, react_hook_form_1.useForm)({
        resolver: (0, yup_1.yupResolver)(schema),
        mode: 'onChange',
    });
    console.log(isValid, errors, control);
    const onSubmit = (formData) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { data } = yield api_1.api.post(`users?nome=${formData.nome}&email=${formData.email}&senha=${formData.password}`);
            console.log('retorno api', data);
            navigate('/feed');
        }
        catch (_a) {
            alert('Houve um erro, tente novamente...');
        }
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Header_1.Header, {}), (0, jsx_runtime_1.jsxs)(styles_1.Container, { children: [(0, jsx_runtime_1.jsx)(styles_1.Column, { children: (0, jsx_runtime_1.jsx)(styles_1.Title, { children: "A plataforma para voc\u00EA aprender com experts, dominar as principais tecnologias e entrar mais r\u00E1pido nas empresas mais desejadas." }) }), (0, jsx_runtime_1.jsx)(styles_1.Column, { children: (0, jsx_runtime_1.jsxs)(styles_1.Wrapper, { children: [(0, jsx_runtime_1.jsx)(styles_1.TitleLogin, { children: "Comece agora gr\u00E1tis" }), (0, jsx_runtime_1.jsx)(styles_1.SubTitleLogin, { children: "Crie sua conta e make the change._" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), children: [(0, jsx_runtime_1.jsx)(Input_1.Input, { name: "nome", errorMessage: (_a = errors === null || errors === void 0 ? void 0 : errors.nome) === null || _a === void 0 ? void 0 : _a.message, control: control, placeholder: "Nome Completo", leftIcon: (0, jsx_runtime_1.jsx)(md_1.MdBadge, {}) }), (0, jsx_runtime_1.jsx)(Input_1.Input, { name: "email", errorMessage: (_b = errors === null || errors === void 0 ? void 0 : errors.email) === null || _b === void 0 ? void 0 : _b.message, control: control, placeholder: "E-mail", leftIcon: (0, jsx_runtime_1.jsx)(md_1.MdEmail, {}) }), (0, jsx_runtime_1.jsx)(Input_1.Input, { name: "password", errorMessage: (_c = errors === null || errors === void 0 ? void 0 : errors.password) === null || _c === void 0 ? void 0 : _c.message, control: control, placeholder: "Senha", type: "password", leftIcon: (0, jsx_runtime_1.jsx)(md_1.MdLock, {}) }), (0, jsx_runtime_1.jsx)(Button_1.Button, { title: "Criar minha conta", variant: "secondary", type: "submit" })] }), (0, jsx_runtime_1.jsxs)(styles_1.SubTitleLogin, { children: ["Ao clicar em \"criar minha conta gr\u00E1tis\", ", (0, jsx_runtime_1.jsx)("br", {}), "declaro que aceito as Pol\u00EDticas de ", (0, jsx_runtime_1.jsx)("br", {}), "Privacidade e os Termos de Uso da DIO."] }), (0, jsx_runtime_1.jsxs)(styles_1.Row, { children: [(0, jsx_runtime_1.jsx)(styles_1.JaTenhoText, { children: "Ja tenho conta." }), (0, jsx_runtime_1.jsx)(styles_1.LoginText, { children: "Fazer login" })] })] }) })] })] }));
};
exports.Cadastro = Cadastro;
