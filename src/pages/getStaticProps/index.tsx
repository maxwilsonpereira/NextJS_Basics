// getStaticProps runs at BUILD TIME! It does NOT RUN AT RUNTIME!

// http://localhost:3000/getStaticProps
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import styles from "../global.module.scss";
import path from "path";

// SERVER EXECUTION:
// OBS: GetStaticProps ONLY WORK WITHOUT GetStaticPaths
// on "stand alone pages", like this one.
// GetStaticPaths will work only on dynamic pages with [].
export const getStaticProps: GetStaticProps = async (context) => {
  // Because it will be executed on the server, you can use any
  // node.js method here. Example:
  const fs = require("fs");
  const listTxt = fs.readFileSync(
    path.join(process.cwd(), "src/pages/getStaticProps/list.txt"),
    "utf8"
  );

  // NEXT fetch IS NOT WORKING, because return {} does not wait:
  let fetchedName = "";
  await fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    response.json().then((data) => {
      console.log("fetchedName:", data[0].name); // Leanne Graham
      fetchedName = data[0].name; // Leanne Graham
    });
  });

  return {
    // REVALIDATE (optional) will refresh the page every x seconds
    // (it just works on PRODUCTION):
    revalidate: 10,
    props: {
      id: 12345,
      name: "Max Wilson",
      fetchedName: fetchedName,
      address: "Maxingstrasse 5",
      textFromFile: listTxt,
    },
  };
};

// SERVER + CLIENT EXECUTION:
// Next function will be executed on the server to get the props
// AND on the client, of course, to render on the browser.
export default function GetStaticPropsIndex(props) {
  const router = useRouter();
  function backToHome() {
    router.push("/"); // BACK FUNCTION WILL BE AVAILABLE
    // BACK FUNCTION WOULD NOT BE AVAILABLE:
    // router.replace("/");
  }
  return (
    <div className={styles.container}>
      <h1>GetStaticProps</h1>
      <br />
      <br />
      <h2>
        ID: {props.id}
        <br />
        NAME: {props.name}
        <br />
        ADDRESS: {props.address}
        <br />
        FETCHED NAME: {props.fetchedName}
        <br />
        <br />
        TEXT FROM FILE list.txt:
        <p>{props.textFromFile}</p>
      </h2>
      <br />
      <br />
      <button className={styles.btnHome} onClick={backToHome}>
        Back to Home
      </button>
    </div>
  );
}
