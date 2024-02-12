import React from "react";

const Wrapper = ({Comp = "main", className, ...restProps}) => {
    return React.createElement(Comp, {className, ...restProps});
}

export default Wrapper;