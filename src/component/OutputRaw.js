import React from "react";
import "./output.css"

const OutputRaw = (props) => {
    return (
        <div>
            <input type="text" readOnly value={props.value} style={props.textSize} className="screen"></input>
        </div>
    )
}

export default OutputRaw