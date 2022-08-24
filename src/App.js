import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <React.Fragment>
          <Router>
            <Navbar />
          </Router>

          <Form />
          <Router>
            <Footer />
          </Router>
        </React.Fragment>
      </div>
    </>
  );
}

export default App;
