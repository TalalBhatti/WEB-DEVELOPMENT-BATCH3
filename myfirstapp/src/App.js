import React from "react";
import ContactUs from "./ContactUs/contactUs";
import AboutUs from "./AboutUs/aboutUs";
import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page404 from "./page404.js/page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
