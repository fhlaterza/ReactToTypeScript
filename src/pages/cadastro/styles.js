"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginText = exports.JaTenhoText = exports.SubTitleLogin = exports.TitleLogin = exports.Title = exports.Row = exports.Column = exports.Wrapper = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.main `
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

`;
exports.Wrapper = styled_components_1.default.div `
  max-width: 350px;
`;
exports.Column = styled_components_1.default.div `
  flex: 1;
`;
exports.Row = styled_components_1.default.div `
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-top: 20px;
`;
exports.Title = styled_components_1.default.h2 `
  font-family: 'Open Sans';
  font-style: 'normal';
  font-weight: 700;
  font-size: 32px;
  width: 400px;
  margin-bottom: 20px ;
  line-height: 44px;

  color: #ffffff;
`;
exports.TitleLogin = styled_components_1.default.p `
  font-family: 'Open Sans';
  font-style: 'normal';
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px ;
  line-height: 44px;

`;
exports.SubTitleLogin = styled_components_1.default.p `
  font-family: 'Open Sans';
  font-style: 'normal';
  font-weight: 400;
  font-size: 18px;
  margin-top: 35px;
  margin-bottom: 35px ;
  line-height: 25px;

`;
exports.JaTenhoText = styled_components_1.default.p `
  font-family: 'Open Sans';
  font-style: 'normal';
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color: #FFFFFF;

`;
exports.LoginText = styled_components_1.default.p `
  font-family: 'Open Sans';
  font-style: 'normal';
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  margin-left: 10px;
  
  color: #23DD7A;

`;
