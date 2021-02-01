import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./global.module.scss";

// 404: This page could not be found.
export default function Error404Handler() {
  const router = useRouter();
  const [counter, setCounter] = useState<number>(3);

  useEffect(() => {
    console.log("ASASAS", router.query);
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (counter != 1) {
        setCounter(counter - 1);
      }
    }, 1000);
  }, [counter]);

  return (
    <div className={styles.container}>
      <h1>Here you can handle the 404 error!</h1>
      <br />
      <br />
      <div className={styles.counterCircle}>
        <h2 className={styles.centeredVertical}>{counter}</h2>
      </div>
    </div>
  );
}
