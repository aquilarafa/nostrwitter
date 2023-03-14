import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import {ToastContainer} from "react-toastify";
import Favicon from "react-favicon";
import {TwitterApiV2Settings} from "twitter-api-v2";
import {TwitterCallback} from "./components/TwitterCallback";

window.Buffer = window.Buffer || require("buffer").Buffer;
window.process = window.process || require("process");
require('dotenv').config()

function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout />}>
                      <Route index element={<Home />} />
                      <Route path="/twitterCallback" element={<TwitterCallback/>} />
                  </Route>
              </Routes>
          </BrowserRouter>
          <ToastContainer />
          <Favicon url={'./resources/img/favicon.ico'}/>
      </div>

  );
}

export default App;
