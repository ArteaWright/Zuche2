import React from 'react';

function ImgComp({src}) {
    let ImgStyling = {
        width: 100 + "%",
        height: "auto",

    }
    return (
        <img src={src} alt="slideimage" style={ImgStyling}></img>
    );
}

export default ImgComp; 