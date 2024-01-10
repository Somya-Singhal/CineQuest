import React from "react";

import "./style.scss";

//whatever div or content we will pass it will render it in center with the help of this wrapper
const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;
