import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import 'bootstrap-icons/font/bootstrap-icons.css';


function index(){
  
  return(
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  )
}

export default index;