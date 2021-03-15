import Link from "next/link";
import styles from "../../pages/global.module.scss";

export default function LinkExample() {
  return (
    <>
      <Link href="/route/whatever">
        <a className={styles.link}>Routing Example</a>
      </Link>
      <br />
      <Link href="/routes/whatever/Max%20Wilson">
        <a className={styles.link}>Dynamic Routing Level 3</a>
      </Link>
      <br />
      <Link href="/routes/whatever">
        <a className={styles.link}>Dynamic Routing Level 2</a>
      </Link>
      <br />
      <Link href="/routes">
        <a className={styles.link}>Dynamic Routing Level 1</a>
      </Link>
    </>
  );
}

// PUSH can also be used (example at route file):
// import { useRouter } from "next/router";
// router.push("/");
