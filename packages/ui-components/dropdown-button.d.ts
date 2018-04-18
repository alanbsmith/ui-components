/// <reference types="react" />
import React from 'react';
import { ButtonProps } from './Button';
export interface DropdownButtonProps {
    children?: any;
    label?: string;
    gear?: boolean;
}
export interface DropdownButtonState {
    active: boolean;
}
export declare class DropdownButton extends React.Component<DropdownButtonProps & ButtonProps, DropdownButtonState> {
    static defaultProps: Partial<ButtonProps>;
    state: {
        active: boolean;
    };
    handleClick: () => void;
    render(): JSX.Element;
}
export default DropdownButton;