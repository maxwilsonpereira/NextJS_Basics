import { useRouter } from "next/router";
import styles from "./global.module.scss";

export default function PageExample() {
  const router = useRouter();
  function backToHome() {
    router.push("/"); // BACK FUNCTION WILL BE AVAILABLE
    // BACK FUNCTION WOULD NOT BE AVAILABLE:
    // router.replace("/");
  }
  return (
    <div className={styles.container}>
      <h1>This is a page!</h1>
      <h2>Access at:</h2>
      <h3>http://localhost:3000/pageexample</h3>
      <br />
      <button className={styles.btnHome} onClick={backToHome}>
        HOME
      </button>
    </div>
  );
}
