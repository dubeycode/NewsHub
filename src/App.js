import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {BrowserRouter,Routes,Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
         <BrowserRouter>
         <Navbar />
           <LoadingBar
        color="#f11946"
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} pageSize={8} category="sports" />} />
          <Route path="/business" element={<News setProgress={this.setProgress} pageSize={8} category="business" />} />
          <Route path="/entertainment" element={<News setProgress={this.setProgress} pageSize={8} category="entertainment" />} />
          <Route path="/general" element={<News setProgress={this.setProgress} pageSize={8} category="general" />} />
          <Route path="/health" element={<News setProgress={this.setProgress} pageSize={8} category="health" />} />
          <Route path="/science" element={<News setProgress={this.setProgress} pageSize={8} category="science" />} />
          <Route path="/sports" element={<News setProgress={this.setProgress} pageSize={8} category="sports" />} />
          <Route path="/technology" element={<News setProgress={this.setProgress} pageSize={8} category="technology" />} />
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

