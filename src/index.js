import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

// console.log(React);//it is responsible for proving all the inbuilt features to the components
// console.log(ReactDom);
// ? syntax:ReactDOM.createRoot(Targetted node)
//this will provide the react root where all the react code will render
//createRoot will act as a bridge b/w the index.html and index.js files
//it is connector b/w index.html and index.js files

const root = ReactDom.createRoot(document.getElementById("root"));
// console.log("root");

// root.render("Hello World");//String
// root.render(<h1>Hello React....</h1>)//jsx

root.render(<App></App>);
root.render(<App />);
