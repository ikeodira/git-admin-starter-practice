import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Ike Dev</div>
      <div className={styles.text}>All rights reserved.</div>
    </div>
  );
}

export default Footer;
