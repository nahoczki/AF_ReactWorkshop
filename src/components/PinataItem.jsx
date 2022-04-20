import React from "react";



const PinataItem = (props) => {

    let pinata = props.pinata

    return (
        <div className={"pinata-item"}>
            {pinata.name}
        </div>
    )
}

export default PinataItem;