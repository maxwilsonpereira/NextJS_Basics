import React from "react";
// import { Link } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";

// npm i react-icons
// https://react-icons.github.io/react-icons/
import { FaLinkedin } from "react-icons/fa";

import classes from "./style.module.css";

export default function Footer() {
  return (
    <div className={classes.FooterDown}>
      <span className={classes.spanElement}>
        <p>Developed with React by Max Wilson Pereira</p>
      </span>
      <span className={classes.spanElement}>
        <a
          href="https://www.linkedin.com/in/maxwilsonpereira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={classes.favicon}>
            <FaLinkedin size={35} />
          </div>
        </a>
      </span>
    </div>
  );
}
