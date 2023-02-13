import React, { useState } from "react";
import "./App.css";
import About from "./componets/About";
import "./componets/Navbar";
import Navbar from "./componets/Navbar";
import TextForm from "./componets/TextForm";
import Alert from "./componets/Alert";
import { Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not

  const showAlert = (message, type) => {
    console.log(message, type);
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
    // setInterval(() => {
    //   document.title = "TextUtils is Amazing Mode";
    // }, 3000);
    // setInterval(() => {
    //   document.title = "Install TextUtils now";
    // }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2b447f";
      showAlert("Dark mode has been enabled", "success");
      document.title='TextUtils-Dark Mode';
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title='TextUtils-Light Mode';
    }
  };

  return (
    <>
       {/* <Navbar title="textUtils2" aboutText="About us"/>  */}
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <Routes>
        <Route
          exact
          path="/"
          element={
            <TextForm
              setAlert={showAlert}
              heading="Enter the text"
              mode={mode}
            />
          }
        />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
}
export default App;
