import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// npm install @material-ui/core
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
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
  const [usersFetched, setUsersFetched] = useState<User[]>([]);
  const router = useRouter();
  function backToHome() {
    router.push("/"); // BACK FUNCTION WILL BE AVAILABLE
    // BACK FUNCTION WOULD NOT BE AVAILABLE:
    // router.replace("/");
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const usersFetchedAux = await response.json();
      setUsersFetched(usersFetchedAux);
    }
    fetchData();
  });

  return (
    <div className={styles.container}>
      {usersFetched.length < 1 ? (
        <CircularProgress color="primary" />
      ) : (
        <>
          <h1>Dinamic Rendering with React</h1>
          <hr className={styles.horizontalLine} />
          <h2>
            Look the image on the bottom of this page (or look the real html
            code on the console) to see how the HTML looks like without using
            GetStaticProps.
            <br />
            The infos are NOT there! Bad for SEO!
            <br />
          </h2>
          <hr className={styles.horizontalLine} />

          <h2>Some data fetched with useEffect on the client side:</h2>
          {usersFetched.map((user, index) => (
            <h4 key={usersFetched[index].id}>
              NAME: {usersFetched[index].name} / EMAIL:{" "}
              {usersFetched[index].email}
            </h4>
          ))}
          <hr className={styles.horizontalLine} />
          <h2>Press the button "Static" to come back to the preview page.</h2>
          <br />
          <br />
          <button
            className={[styles.btnHome, styles.btnHomeGreen].join(" ")}
            onClick={toggleComponentHandler}
          >
            Static
          </button>
          <br />
          <br />
          <button className={styles.btnHome} onClick={backToHome}>
            Back to Home
          </button>
          <br />
          <br />
          <br />
        </>
      )}
    </div>
  );
};

export default DynamicRendering;
