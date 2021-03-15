// http://localhost:3000/catchallroutes/max - WORKS
// http://localhost:3000/catchallroutes/max/marcos/mario/caju - WORKS
// http://localhost:3000/catchAllRoutes/route1/route2/route3/route4 - WORKS

// http://localhost:3000/catchallroutes - IT WORKS!
// IF you name the file with 1 []: [...names].tsx, next would NOT work:
// http://localhost:3000/catchallroutes - NOW WOULD NOT WORK!

import { useRouter } from "next/router";
import styles from "../global.module.scss";

export default function Dynamic() {
  const router = useRouter();
  console.log(router.query);

  function backToHome() {
    router.push("/");
  }
  return (
    <div className={styles.container}>
      <h1>Catch All Routes!</h1>
      <br />
      <br />
      <button className={styles.btnHome} onClick={backToHome}>
        Back to Home
      </button>
      <br />
      <br />
      <h2>
        NAMES:
        <br />
        {router.query.names}
      </h2>
    </div>
  );
}
