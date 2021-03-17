// Dynamic Routing:
// http://localhost:3000/routes/whatever - THIS PAGE!

import Link from "next/link";
import styles from "../../global.module.scss";

export default function RoutesLevel2() {
  return (
    <div className={styles.container}>
      <h1>Dynamic Routing Level 2!</h1>
      <br />
      <Link href="/routes">
        <button className={[styles.btnHome, styles.btnHomeGreen].join(" ")}>
          <a className={styles.linkFontWhite}>Back to Level 1</a>
        </button>
      </Link>
    </div>
  );
}
