// THIS FILE:
// http://localhost:3000/pagenames/page2

import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../global.module.scss";

export default function Route() {
  const router = useRouter();
  function backToHome() {
    router.push("/");
  }
  return (
    <div className={styles.container}>
      <h1>
        Page: pagenames/page2
        <br />
        Folder: pages/pagenames/page2
      </h1>
      <br />
      <br />
      <Link href="/pagenames/page1">
        <button className={[styles.btnHome, styles.btnHomeGreen].join(" ")}>
          <a className={styles.linkFontWhite}>Page 1</a>
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
      <button className={styles.btnHome} onClick={backToHome}>
        Back to Home
      </button>
      <br />
      <br />
    </div>
  );
}
