import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {
    id: "heading", xyz: "abc"
}, "Hello from react!");

const parent = React.createElement("div", {id:"parent"}, 
[React.createElement("div", {id:"child1"},[
    React.createElement("h1",{},"I am H1"),
    React.createElement("h2", {}, "I am H2")
])],[React.createElement("div", {id:"child2"},[
    React.createElement("h1",{},"I am H1"),
    React.createElement("h2", {}, "I am H2")
])]

);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);