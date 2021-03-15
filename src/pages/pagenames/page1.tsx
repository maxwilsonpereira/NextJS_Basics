// THIS FILE:
// http://localhost:3000/pagenames/page1

import Link from "next/link";
import styles from "../global.module.scss";

export default function Route() {
  return (
    <div className={styles.container}>
      <h1>CURRENT: pages/pagenames/page1</h1>
      <br />
      <br />
      <Link href="/pagenames/page2">
        <a className={styles.link}>Go to pages/pagenames/page2</a>
      </Link>
      <br />
      <br />
      <Link href="/pagenames">
        <a className={styles.link}>Back to "pagenames"</a>
      </Link>
    </div>
  );
}
