"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progress = exports.NameText = exports.UserPicture = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
    display:flex;
    flex-direction: row;
    margin-bottom: 24px;
`;
exports.UserPicture = styled_components_1.default.div `
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #FFFFFF;
    margin-right: 12px;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
`;
exports.NameText = styled_components_1.default.div `
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
`;
exports.Progress = styled_components_1.default.div `
    width: 180px;
    height: 6px;
    background-color: #FFFFFF;
    border-radius: 3px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({ percentual }) => percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23DD7A;
    }
`;
