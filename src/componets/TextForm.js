import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    console.log(props);
    props.setAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    //console.log("Lowerercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.setAlert("Converted to Lowercase", "success");
  };

  const handleCopy = () => {
    //console.log("i am copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectonRage(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleClearText = (event) => {
    console.log("Clear text");
    let newText = "";
    setText(newText);
    props.setAlert("Text cleared", "success");
  };

  function toTitleCase(str) {
    let words = str.toLowerCase().split(" ");
    let result = words
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    return result;
  }

  let originalString = "example of title case";
  let titleCase = toTitleCase(originalString);
  console.log(titleCase); // Output: "Example Of Title Case"

  const [text, setText] = useState("");
  //text="newText"; //wrong way to change the state
  //setText('new text');//right way to change the state

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="my-3">
          <label
            htmlFor="myBox"
            onChange="handleOnChange"
            className="form-label"
          ></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="3"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy text
        </button>

        <div className="container" my-3>
          <h1>Your text summary</h1>
          <p>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          {/* <p>
            {text.split(" ").length} words and {text.length} characters
          </p> */}
          <p>{0.008 * text.split(" ").length} Minutes read </p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter something to Preview"}</p>
        </div>
      </div>
    </>
  );
}
