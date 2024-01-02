import React from "react";
import { NavLink } from "react-router-dom";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GavelTwoToneIcon from "@mui/icons-material/GavelTwoTone";
import RateReviewTwoToneIcon from "@mui/icons-material/RateReviewTwoTone";
import PermContactCalendarTwoToneIcon from "@mui/icons-material/PermContactCalendarTwoTone";
import styles from "../SideNav/NavMenu.module.css";

function NavMenu() {
//   React.useEffect(() => {
//     let navLinks = document.querySelectorAll(".nav-link");
//     if (document.documentElement.clientWidth > 992) {
//       navLinks.forEach((link) => {
//         link.removeAttribute("data-bs-toggle");
//         link.removeAttribute("data-bs-target");
//       });
//     }
//     else{
//         navLinks.forEach((link) => {
//             link.setAttribute("data-bs-toggle", "collapse");
//             link.setAttribute("data-bs-target", "#navbarNav");
//           });
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [document.documentElement.clientWidth]);
  return (
    <nav className={`navbar navbar-expand-lg ${styles.advNavBackground}`}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className={`navbar-nav ${styles.advNavbar} d-flex justify-content-evenly hidden-xs`}>
            <div className="nav-item">
              <NavLink to="/" className={`nav-link ${styles.advNavLink}`}>
                <div className="d-flex">
                  <HomeTwoToneIcon /> Home
                </div>
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink to="/about" className="nav-link">
                <div className="d-flex">
                  <InfoTwoToneIcon /> About Sangita
                </div>
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink to="/area" className="nav-link">
                <div className="d-flex">
                  <GavelTwoToneIcon /> Area of Work
                </div>
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink to="/feedback" className="nav-link">
                <div className="d-flex">
                  <RateReviewTwoToneIcon /> Your opinion
                </div>
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink to="/contact" className="nav-link">
                <div className="d-flex">
                  <PermContactCalendarTwoToneIcon /> Contact
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
