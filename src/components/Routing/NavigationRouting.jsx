import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import AboutUs from "../AboutUs/AboutUs";
import AreaOfWork from "../AreaOfWork/AreaOfWork";
import YourOpinion from "../YourOpinion/YourOpinion";
import Contact from "../ContactUs/Contact";
import styles from "./NavigationRouting.module.css";

function NavigationRouting() {
  return (
    <div className={`${styles.envelop}`}>
      <Routes>
        <Route path="/" exact element={<Homepage />}></Route>
        <Route path="/about" exact element={<AboutUs />}></Route>
        <Route path="/area" element={<AreaOfWork />}></Route>
        <Route path="/feedback" element={<YourOpinion />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/*" element={<h2>Page not found</h2>}></Route>
      </Routes>
    </div>
  );
}

export default NavigationRouting;
