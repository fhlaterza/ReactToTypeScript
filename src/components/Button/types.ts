import { MenuRight } from './../Header/styles';
import React,{ ReactNode } from "react";


export interface IButton {
    title: string;
    variant?: string;
    onClick?: () => void;
    type?: string; 
}

export interface IbuttonStyled {
    variant: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

export interface MenuRightProps {
    href?: string;
    children?: ReactNode;
}
