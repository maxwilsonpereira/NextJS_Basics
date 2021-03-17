// THIS FILE:
// http://localhost:3000/pagenames/page1

import Link from "next/link";
import styles from "../global.module.scss";

export default function Route() {
  return (
    <div className={styles.container}>
      <h1>
        Page: pagenames/page1
        <br />
        Folder: pages/pagenames/page1
      </h1>
      <br />
      <br />
      <Link href="/pagenames/page2">
        <button className={[styles.btnHome, styles.btnHomeGreen].join(" ")}>
          <a className={styles.linkFontWhite}>Page 2</a>
        </button>
      </Link>
      <br />
      <Link href="/pagenames">
        <button className={[styles.btnHome, styles.btnHomeGreen].join(" ")}>
          <a className={styles.linkFontWhite}>Back to "pagenames"</a>
        </button>
      </Link>
      <br />
      <br />
    </div>
  );
}
