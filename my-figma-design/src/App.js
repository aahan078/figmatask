import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";

import Footer from "./Footer";
import Childsection from "./Childsection";
import Aboutchabil from "./Pages/Aboutchabil";
import Test from "./Pages/Test";
import Main from "./Main";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <>
      
      <Header/>
      
      
        <Router>
        <Routes>
      <Route exact path="/" element={<Main/>}></Route>
          <Route exact path="/test" element={<Test/>}></Route>
          <Route exact path="/about" element={<Aboutchabil/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
      <Childsection/>
      <Footer />
    </>
  );
}
