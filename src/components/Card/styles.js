"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HasInfo = exports.PostInfo = exports.UserPicture = exports.UserInfo = exports.Content = exports.ImageBackground = exports.CardContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.CardContainer = styled_components_1.default.div `
    width: 100%;
    background-color: #3B4651;
    position: relative;
    margin-bottom: 24px;
`;
exports.ImageBackground = styled_components_1.default.div `
    width: 100%;
    height: 180px;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
`;
exports.Content = styled_components_1.default.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;
`;
exports.UserInfo = styled_components_1.default.div `
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;

    div {
        margin-left: 12px;
    }

    h4{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF;
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
    }
`;
exports.UserPicture = styled_components_1.default.div `
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #FFFFFF;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
`;
exports.PostInfo = styled_components_1.default.div `

    margin-bottom: 12px;

    h4{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF;
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
    }
`;
exports.HasInfo = styled_components_1.default.div `
    margin-top: 12px;

    h4{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;    
        color: #FFFFFF80  
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
    }
`;
