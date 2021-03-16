// getStaticProps runs at BUILD TIME! It does NOT RUN AT RUNTIME!
// All the values got inside it are going to be rendered on the browser,
// like this would be a static page.

// http://localhost:3000/getStaticProps
import React, { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import styles from "../global.module.scss";
import path from "path";
import DynamicComponent from "./dynamic";

// SERVER EXECUTION:
// OBS: GetStaticProps ONLY WORK WITHOUT GetStaticPaths
// on "stand alone pages", like this one.
// GetStaticPaths will work only on dynamic pages with [].
export const getStaticProps: GetStaticProps = async (context) => {
  // Console.log inside getStaticProps will be shown on the backend console!
  // Because it will be executed on the server, you can use any
  // node.js method here. Example:
  const fs = require("fs");
  const listTxt = fs.readFileSync(
    path.join(process.cwd(), "src/pages/getStaticProps/list.txt"),
    "utf8"
  );

  // Fetching some data:
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersFetched = await response.json();

  return {
    // REVALIDATE (optional) will refresh the page every X seconds
    // (it just works on PRODUCTION):
    revalidate: 600,
    props: {
      textFromFile: listTxt,
      usersFetched: usersFetched,
    },
  };
};

// SERVER + CLIENT EXECUTION:
// Next function will be executed on the server to get the props
// AND on the client, of course, to render on the browser.
export default function GetStaticPropsIndex({ textFromFile, usersFetched }) {
  console.log("*********** usersFetched:", usersFetched); // Leanne Graham
  const [toggleComponent, setToggleComponent] = useState<boolean>(false);
  const router = useRouter();
  function backToHome() {
    router.push("/"); // BACK FUNCTION WILL BE AVAILABLE
    // BACK FUNCTION WOULD NOT BE AVAILABLE:
    // router.replace("/");
  }

  const toggleComponentHandler = () => {
    setToggleComponent(!toggleComponent);
  };

  return (
    <>
      {toggleComponent ? (
        <DynamicComponent toggleComponentHandler={toggleComponentHandler} />
      ) : (
        <div className={styles.container}>
          <h1>GetStaticProps - Static Site Generation (SSG)</h1>
          <hr className={styles.horizontalLine} />
          <h2>
            Look the image on the bottom of this page (or look the real html
            code on the console) to see how the HTML looks like using
            GetStaticProps.
            <br />
            All the infos are there! Very good for SEO!
            <br />
          </h2>
          <hr className={styles.horizontalLine} />
          <h2>Some data fetched with getStaticProps on the server side:</h2>
          {usersFetched.map((user, index) => (
            <h4 key={usersFetched.id}>
              NAME: {usersFetched[index].name} / EMAIL:{" "}
              {usersFetched[index].email}
            </h4>
          ))}
          <hr className={styles.horizontalLine} />
          <h3>
            <b>TEXT FROM FILE list.txt:</b>
          </h3>
          <p>{textFromFile}</p>
          <hr className={styles.horizontalLine} />
          <h2>
            Press the button "Dynamic" to see this same page built with
            useEffect, that means, dinamicly:
          </h2>
          <br />
          <br />
          <button
            className={[styles.btnHome, styles.btnHomeGreen].join(" ")}
            onClick={toggleComponentHandler}
          >
            Dynamic
          </button>
          <br />
          <br />
          <button className={styles.btnHome} onClick={backToHome}>
            Back to Home
          </button>
          <br />
          <br />
          <br />
        </div>
      )}
    </>
  );
}
