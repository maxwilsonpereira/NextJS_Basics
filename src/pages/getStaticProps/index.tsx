// * Progressbar / Spinner: Look file _app.tsx

// getStaticProps runs at BUILD TIME! It does NOT RUN AT RUNTIME!
// All the values got inside it are going to be rendered on the browser,
// like this would be a static page.
// OBS: GetStaticProps ONLY WORK WITHOUT GetStaticPaths
// on "stand alone pages", like this one.
// GetStaticPaths will work only on dynamic pages with [].

// http://localhost:3000/getStaticProps
import React, { useState } from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import styles from "../global.module.scss";
import path from "path";
import DynamicComponent from "./dynamic";

// SERVER EXECUTION:
export const getStaticProps: GetStaticProps = async (context) => {
  // Here inside you can fetch all the data you need before the component is rendered.
  // Console.log inside getStaticProps will be shown on the backend console!
  // Because it will be executed on the server, you can use any
  // node.js method here. Example:
  const fs = require("fs");
  const listTxt = fs.readFileSync(
    path.join(process.cwd(), "src/pages/getStaticProps/list.txt"),
    "utf8"
  );

  const fetchSimulation = [];
  const fetchedDataAux = [];
  // Simulating a large amount of data to be fetch:
  for (let i = 0; i < 150; i++) {
    fetchSimulation[i] = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    fetchedDataAux[i] = await fetchSimulation[i].json();
  }

  return {
    props: {
      textFromFile: listTxt,
      fetchedData: fetchedDataAux[0],
    },
    // REVALIDATE (optional) will refresh the page every X seconds
    // (it just works on PRODUCTION):
    revalidate: 600,
  };
};

// SERVER + CLIENT EXECUTION:
// Next function will be executed on the server to get the props
// AND on the client, of course, to render on the browser.
export default function GetStaticPropsIndex({ textFromFile, fetchedData }) {
  //   console.log("*********** fetchedData:", fetchedData);
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
          <h2>Look how fast I am!</h2>
          <hr className={styles.horizontalLine} />
          <h2>
            The data on this page will be fetched at buid time, that means the
            data will be fetched once and from this moment it will stay on the
            client side as if the page would be a static page.
            <br />
            The page is loaded much faster (almost instantly) after the first
            time it was visited and this method of rendering improves a lot the
            SEO engines.
          </h2>
          <h3>
            A "revalidate" attribute can be used inside getStaticProps function
            to make it fetch the data agina after a disered time.
          </h3>
          <h2>
            <span className={styles.fontRed}>
              * Same amount of data being fetched on each page!
            </span>
          </h2>
          <hr className={styles.horizontalLine} />
          <h2>
            Press the button "Dynamic" to the same page being rendered using
            React useEffect, that means, dynamically:
          </h2>
          <br />
          <button
            className={[styles.btnHome, styles.btnHomeGreen].join(" ")}
            onClick={toggleComponentHandler}
          >
            Dynamic
          </button>
          <br />
          <button className={styles.btnHome} onClick={backToHome}>
            Back to Home
          </button>
          <hr className={styles.horizontalLine} />
          <h2>
            Some of the data fetched with getStaticProps on the server side:
          </h2>
          <br />
          {fetchedData &&
            fetchedData.map((data) => (
              <h4 key={data.id}>
                <span className={styles.fontRed}>NAME: </span>
                {data.name} / <span className={styles.fontRed}>EMAIL:</span>{" "}
                {data.email}
              </h4>
            ))}
          <hr className={styles.horizontalLine} />
          <h3>
            <b>EXTRA TEXT FILE FETCHED FROM THE FILE list.txt:</b>
          </h3>
          <p>{textFromFile}</p>
          <br />
          <br />
          <br />
        </div>
      )}
    </>
  );
}
