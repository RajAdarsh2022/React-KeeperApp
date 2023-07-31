import React from "react";
import  ReactDOM  from "react-dom";

const currYear = new Date().getFullYear();

function Footer(){
    return(
        <footer>
            <p> Copyright © {currYear}</p>
        </footer>
    );

}

export default Footer;