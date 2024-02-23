import React from "react";

interface WrapperProps {
    as?: string;
    className: string;
    [key: string]: any;
}

const Wrapper = ({comp = "main", className, ...restProps}: WrapperProps) => {
    return React.createElement(comp, {className, ...restProps});
}

export default Wrapper;