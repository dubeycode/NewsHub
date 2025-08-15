import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {BrowserRouter,Routes,Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
         <BrowserRouter>
         <Navbar />
        <Routes>
          <Route path="/" element={<News pageSize={8} category="sports" />} />
          <Route path="/business" element={<News pageSize={8} category="business" />} />
          <Route path="/entertainment" element={<News pageSize={8} category="entertainment" />} />
          <Route path="/general" element={<News pageSize={8} category="general" />} />
          <Route path="/health" element={<News pageSize={8} category="health" />} />
          <Route path="/science" element={<News pageSize={8} category="science" />} />
          <Route path="/sports" element={<News pageSize={8} category="sports" />} />
          <Route path="/technology" element={<News pageSize={8} category="technology" />} />
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

