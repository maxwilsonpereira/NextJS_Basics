// Dynamic Routing: Look file [name].tsx
// http://localhost:3000/route - THIS FILE

import { useRouter } from "next/router";
import styles from "../global.module.scss";

export default function Route() {
  const router = useRouter();
  function backToHome() {
    router.push("/");
  }
  return (
    <div className={styles.container}>
      <h1>Routing!</h1>
      <br />
      <br />
      <button className={styles.btnHome} onClick={backToHome}>
        Back to Home
      </button>
    </div>
  );
}
