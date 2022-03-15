import "./App.css";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import $ from "jquery";

function App() {
  $(document).ready(function () {
    $("#loader").hide();
  });
  return (
    <div className="App">
      <center>
        <img
          id="loader"
          src="./assets/img/loder.gif"
          style={{
            position: "absolute",
            left: "0px",
            width: "100%",
            height: "100vh",
            opacity: ".3",
            zIndex: "999999999999999999999999999",
            display: "none",
          }}
        />
      </center>
      {/*  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
