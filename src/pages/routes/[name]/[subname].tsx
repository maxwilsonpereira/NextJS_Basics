// Dynamic Routing: The route will be created DYNAMICALLY!
// http://localhost:3000/routes/whateveruser/whateverproduct - THIS PAGE!

import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../global.module.scss";

export default function RoutesLevel2() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1>Dynamic Routing Level 3!</h1>
      <br />
      <h2>Name: {router.query.subname}</h2>
      <br />
      <Link href="/routes/whatever">
        <button className={[styles.btnHome, styles.btnHomeGreen].join(" ")}>
          <a className={styles.linkFontWhite}>Back to Level 2</a>
        </button>
      </Link>
    </div>
  );
}
