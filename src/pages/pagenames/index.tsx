// THIS FILE:
// http://localhost:3000/pagenames

import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../global.module.scss";

export default function Route() {
  const router = useRouter();
  function backToHome() {
    router.push("/");
  }
  return (
    <div className={styles.container}>
      <h1>
        Page: pagenames
        <br />
        Folder: pages/pagenames
      </h1>
      <br />
      <br />
      <Link href="/pagenames/page1">
        <button className={[styles.btnHome, styles.btnHomeGreen].join(" ")}>
          <a className={styles.linkFontWhite}>Page 1</a>
        </button>
      </Link>
      <br />
      <Link href="/pagenames/page2">
        <button className={[styles.btnHome, styles.btnHomeGreen].join(" ")}>
          <a className={styles.linkFontWhite}>Page 2</a>
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
