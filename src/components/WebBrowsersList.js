import React from "react";
import WebBrowser from "./WebBrowser";

const WebBrowsersList = ({ webBrowsersList }) => {
    return (
        <article>
            {webBrowsersList
                .map((webBrowser) => {
                    return (
                        <WebBrowser
                            name={webBrowser.name}
                            linkToImage={webBrowser.linkToImage}
                            description={webBrowser.description}>
                        </WebBrowser>
                    )
                })}
        </article>
    );
};

export default WebBrowsersList;