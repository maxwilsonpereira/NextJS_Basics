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
      <h1>Page Folder: pages/pagenames</h1>
      <br />
      <br />
      <Link href="/pagenames/page1">
        <a className={styles.link}>Page 1</a>
      </Link>
      <br />
      <Link href="/pagenames/page2">
        <a className={styles.link}>Page 2</a>
      </Link>
      <br />
      <br />
      <button className={styles.btnHome} onClick={backToHome}>
        Back to Home
      </button>
    </div>
  );
}
