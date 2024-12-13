//Fuzail khan
//Monikapatel
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Destination from "./components/Destination";
import Footer from "./components/Footer"; 
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <>   
     <Router>
     <Navbar />
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </div>
      </div>
    </Router>
    <Footer/>
    </>

  );
}

export default App;
