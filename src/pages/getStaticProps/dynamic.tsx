import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// npm install @material-ui/core
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "../global.module.scss";

interface PageProps {
  toggleComponentHandler: () => void;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const DynamicRendering: React.FC<PageProps> = ({ toggleComponentHandler }) => {
  const [fetchedData, setFetchedData] = useState<User[]>([]);
  const router = useRouter();
  function backToHome() {
    router.push("/"); // BACK FUNCTION WILL BE AVAILABLE
    // BACK FUNCTION WOULD NOT BE AVAILABLE:
    // router.replace("/");
  }

  useEffect(() => {
    async function fetchData() {
      const fetchSimulation = [];
      const fetchedDataAux = [];
      // Simulating a large amount of data to be fetch
      for (let i = 0; i < 150; i++) {
        fetchSimulation[i] = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        fetchedDataAux[i] = await fetchSimulation[i].json();
      }
      setFetchedData(fetchedDataAux[0]);
    }
    fetchData();
  });

  return (
    <div className={styles.container}>
      {fetchedData.length < 1 ? (
        <CircularProgress color="primary" />
      ) : (
        <>
          <h1>Dinamic Rendering with React useState</h1>
          <hr className={styles.horizontalLine} />
          <h2>
            The data on this page was fetched using useEffect (run time
            fetching). That means that all the data will need to be fetched
            again every time the page is loaded or refreshed.
            <br />
            The time it takes to load the page will be always the same
            (depending on the connection).
            <br />
            Using "getStaticProps" would make it much faster after the first
            visit.
            <br />
            <span className={styles.fontRed}>
              * Same amount of data being fetched on each page!
            </span>
          </h2>
          <hr className={styles.horizontalLine} />
          <h2>Press the button "Static" to come back to the preview page:</h2>
          <br />
          <button
            className={[styles.btnHome, styles.btnHomeGreen].join(" ")}
            onClick={toggleComponentHandler}
          >
            Static
          </button>
          <br />
          <button className={styles.btnHome} onClick={backToHome}>
            Back to Home
          </button>
          <hr className={styles.horizontalLine} />
          <h2>
            Some of the data fetched using React useEffect on the client side:
          </h2>
          {fetchedData.map((data, index) => (
            <h4 key={data.id}>
              <span className={styles.fontRed}>NAME: </span>
              {data.name} / <span className={styles.fontRed}>EMAIL:</span>{" "}
              {data.email}
            </h4>
          ))}
          <hr className={styles.horizontalLine} />
          <br />
          <br />
          <br />
        </>
      )}
    </div>
  );
};

export default DynamicRendering;
