import React from "react";

const WebBrowser = ({ name, linkToImage, description }) => {
    return (
        <section>
            <h2>{name}</h2>
            <img src={linkToImage} alt={name + " image"}/>
            <p>{description}</p>
        </section>
    );
};

export default WebBrowser;