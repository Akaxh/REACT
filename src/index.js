var React = require("react");
var ReactDOM = require("react-dom");

const bfname = "Nooba";
const gfname = "Bulba";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {bfname + " " + gfname}!</h1>
    <p> Your lucky number is {num} </p>
  </div>,
  document.getElementById("root")
);
