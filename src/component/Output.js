import React from "react";
import OutputRaw from "./OutputRaw";

const Output = (props) => {
    return (
        <div>
            <OutputRaw value={props.answer} textSize={{fontSize: "30px"}} />
            <OutputRaw value={props.display} textSize={{fontSize: "40px"}} />
        </div>
    )
}
export default Output