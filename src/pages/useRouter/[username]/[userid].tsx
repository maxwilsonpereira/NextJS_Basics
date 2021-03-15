// Dynamic Routing:
// http://localhost:3000/userouter/whateveryouwant - THIS PAGE!
// EXAMPLE:
// http://localhost:3000/userouter/Max%20Wilson/123456
import { useRouter } from "next/router";
import styles from "../../global.module.scss";

export default function UseRouterSubSub() {
  const router = useRouter();
  console.log(router);
  console.log(router.query);
  // OUTPUT: {username: "Max Wilson", userid: "123456"}

  function backToHome() {
    router.push("/");
  }
  return (
    <>
      <div className={styles.container}>
        <h1>Dynamic Routing with useRouter and Query!</h1>
        <h2>Inside [username] folder, using [userid] as param!</h2>
        <br />
        <h2>Hello {router.query.username}</h2>
        <h3>
          Your userid is <b>{router.query.userid}</b>
        </h3>
        <br />
        <br />
        <button className={styles.btnHome} onClick={backToHome}>
          Back to Home
        </button>
      </div>
    </>
  );
}
