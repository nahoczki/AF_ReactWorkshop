import React from "react";
import PinataLogo from "../assets/logo.svg"



const TopBar = () => {
    return (
        <div className={"top-bar"}>
            <img src={PinataLogo} alt={"logo of pinata"}/>
            <h1>Piñata Storage</h1>
        </div>
    )
}

export default TopBar;