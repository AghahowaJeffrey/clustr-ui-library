import React from 'react';
import {ComponentProps} from "react";

type ButtonProps = ComponentProps<Button>;

export const Button: React.FC  = ({ ...props}: ButtonProps ) => {
    return <button {...props}></button>
}

