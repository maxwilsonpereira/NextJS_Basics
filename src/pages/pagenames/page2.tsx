// THIS FILE:
// http://localhost:3000/pagenames/page2

import Link from "next/link";
import styles from "../global.module.scss";

export default function Route() {
  return (
    <div className={styles.container}>
      <h1>CURRENT: pages/pagenames/page2</h1>
      <br />
      <br />
      <Link href="/pagenames/page1">
        <a className={styles.link}>Back to "pagenames/page1"</a>
      </Link>
    </div>
  );
}
