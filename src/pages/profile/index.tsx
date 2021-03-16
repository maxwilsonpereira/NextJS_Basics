import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../global.module.scss";
// access as administrator:
// http://localhost:3000/profile?username=Max&admin=yes
// access with no adm rights:
// http://localhost:3000/profile?username=Max&admin=no

export default function Profile() {
  const router = useRouter();
  function backToHome() {
    router.push("/");
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>This Title is just for SEO!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {router.query.admin === "yes" ? (
        <>
          <h1>
            WELCOME{" "}
            <span className={styles.uppercase}>{router.query.username}!</span>
          </h1>
          <h2>You are an administrator!</h2>
        </>
      ) : (
        <>
          <h1>
            WELCOME{" "}
            <span className={styles.uppercase}>{router.query.username}!</span>
          </h1>
          <h2>You are not an administrator!</h2>
        </>
      )}

      <br />
      <br />
      <button className={styles.btnHome} onClick={backToHome}>
        Back to Home
      </button>
    </div>
  );
}
