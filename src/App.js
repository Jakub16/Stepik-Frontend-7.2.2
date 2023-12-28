import React from "react";
import Navbar from "./components/Navbar";
import WebBrowsersList from "./components/WebBrowsersList";
import Footer from "./components/Footer";
const list = [
    {
        name: "Mozilla Firefox",
        linkToImage: "https://i.ibb.co/TRmq8RK/mozilla.jpg",
        description: "Mozilla Firefox is an open-source web browser known for its emphasis on privacy, security, and a customizable browsing experience."
    },
    {
        name: "Google Chrome",
        linkToImage: "https://i.ibb.co/dWP7dN3/chrome.png",
        description: "\n" +
            "Google Chrome is a popular web browser developed by Google. It was first released in 2008 and has since become one of the most widely used browsers globally."
    },
    {
        name: "Microsoft Edge",
        linkToImage: "https://i.ibb.co/dPSJdw4/edge.png",
        description: "\n" +
            "Microsoft Edge is a web browser developed by Microsoft, featuring a sleek interface, built-in security features, and seamless integration with Microsoft services."
    }
]
const App = () => {
    return (
        <>
            <Navbar></Navbar>
            <WebBrowsersList webBrowsersList={list}></WebBrowsersList>
            <Footer></Footer>
        </>
    );
};

export default App;