// Dynamic Routing: Look file [subname].tsx
// http://localhost:3000/routes - THIS PAGE!

import Link from "next/link";
import styles from "../global.module.scss";

export default function RoutesLevel1() {
  return (
    <div className={styles.container}>
      <h1>Dynamic Routing Level 1!</h1>
      <br />
      <Link href="/">
        <button className={styles.btnHome}>
          <a className={styles.linkFontWhite}>Back to Home</a>
        </button>
      </Link>
    </div>
  );
}
