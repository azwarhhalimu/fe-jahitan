import React from "react";

const Height: React.FC<{ height: number }> = ({ height }) => {
    return (<div style={{ height: height }}></div>);
}

export default Height;