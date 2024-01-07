import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={`${styles.mt80}`}>
      <footer className={`${styles.footer}`}>
        <div>
          <div className={`${styles.wave} ${styles.wave1} mt-1`}></div>
          <div className={`${styles.wave} ${styles.wave2} mt-1`}></div>
          <div className={`${styles.wave} ${styles.wave3} mt-1`}></div>
          <div className={`${styles.wave} ${styles.wave4} mt-1`}></div>          
        </div>
        <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Footer;
