// http://localhost:3000/getStaticPaths/route1

import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import styles from "../global.module.scss";

// SERVER EXECUTION:
// getStaticProps runs at BUILD TIME! It does NOT RUN AT RUNTIME!
// OBS: GetStaticProps ONLY WORK WITHOUT GetStaticPaths
// on "stand alone pages", like this one.
// GetStaticPaths will work only on dynamic pages with [].
// getStaticProps RUNS AT BUILD TIME.
export const getStaticProps: GetStaticProps = async (context) => {
  console.log("context.params.name:", context.params.name); // route1
  return {
    // REVALIDATE will refresh the page every x seconds
    // (it just works on PRODUCTION):
    revalidate: 10,
    props: {
      id: 12345,
      address: "Maxingstrasse 5",
    },
  };
};

// BUILD START
// http://localhost:3000/getStaticPaths/route1 -> take the output -> store it on the disk
// http://localhost:3000/getStaticPaths/route2 -> take the output -> store it on the disk
// http://localhost:3000/getStaticPaths/route3 -> take the output -> store it on the disk
// DONE! (fallback: false,)

// IF fallback: true, ANY OTHER ROUTE would be also available, example:
// http://localhost:3000/getStaticPaths/anyotherroute

// getStaticPaths (with fallback: false,) WILL ONLY RUN on the routes you
// specify on the paths, any other route will go to 404.tsx:
export const getStaticPaths: GetStaticPaths = async () => {
  // HERE you can access all node.js methods: db, fs, etc...
  return {
    // [name]:
    paths: [
      { params: { name: "route1" } },
      { params: { name: "route2" } },
      { params: { name: "route3" } },
    ],
    fallback: false, // WON'T CONTINUE in case of WRONG ROUTE!
    // TRUE: Rendering would continue and the return
    // of GetStaticPathsIndex() would be rendered for any route!
  };
};

// SERVER + CLIENT EXECUTION:
// Next function will be executed on the server to get the props
// AND on the client, of course, to render on the browser.
export default function GetStaticPathsIndex(props) {
  const router = useRouter();
  function backToHome() {
    router.push("/");
  }

  // fallback: true, you can use:
  if (router.isFallback) {
    return (
      <div className={styles.container}>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <h1>GetStaticPaths</h1>
      <br />
      <br />
      <h2>
        ID: {props.id}
        <br />
        ADDRESS: {props.address}
      </h2>
      <br />
      <br />
      <button className={styles.btnHome} onClick={backToHome}>
        Back to Home
      </button>
    </div>
  );
}
