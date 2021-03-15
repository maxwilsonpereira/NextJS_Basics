// Dynamic Routing: The route will be created DYNAMICALLY!
// http://localhost:3000/route - INDEX.TSX FILE
// TO WORK, ADD index.tsx
// http://localhost:3000/route/whateveruser - THIS FILE
// 2 segments don't work:
// http://localhost:3000/route/whateveruser/whateverproduct - DOESN'T WORK

import { useRouter } from "next/router";
import styles from "../global.module.scss";

export default function Route() {
  const router = useRouter();
  function backToHome() {
    // LOOK ALSO: router.replace("/");
    router.push("/");
  }
  return (
    <div className={styles.container}>
      <h1>Dynamic Routing</h1>
      <br />
      <h2>Name: {router.query.name}</h2>
      <br />
      <button className={styles.btnHome} onClick={backToHome}>
        Back to Home
      </button>
    </div>
  );
}
