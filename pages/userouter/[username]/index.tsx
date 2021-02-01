// Dynamic Routing:
// http://localhost:3000/userouter/whateveryouwant - THIS PAGE!

import styles from "../../global.module.scss";

export default function UseRouterSub() {
  return (
    <>
      <div className={styles.container}>
        <h1>Dynamic Routing with useRouter!</h1>
        <h2>Inside [username] folder!</h2>
      </div>
    </>
  );
}
