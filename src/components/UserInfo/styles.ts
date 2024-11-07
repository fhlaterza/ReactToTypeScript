import styled from 'styled-components';
import { IUserinfoStyle, ImageBackgroundProps } from './types';

export const Container = styled.div`
    display:flex;
    flex-direction: row;
    margin-bottom: 24px;
` 

export const UserPicture = styled.div<ImageBackgroundProps>`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #FFFFFF;
    margin-right: 12px;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
`

export const NameText = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
` 

export const Progress = styled.div<IUserinfoStyle>`
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
        width: ${({percentual}) => percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23DD7A;
    }
` 
