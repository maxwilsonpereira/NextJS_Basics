// *** AVOID USING GetServerSideProps, because it is
// called on every request, even on production!

// http://localhost:3000/getServerSideProps
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import styles from "../global.module.scss";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: 12345,
      name: "Max Wilson",
    },
  };
};

export default function GetServerSidePropsIndex(props) {
  const router = useRouter();
  function backToHome() {
    router.push("/");
  }
  return (
    <div className={styles.container}>
      <h1>GetServerSideProps</h1>
      <br />
      <br />
      <h2>
        ID: {props.id}
        <br />
        NAME: {props.name}
      </h2>
      <br />
      <br />
      <button className={styles.btnHome} onClick={backToHome}>
        Back to Home
      </button>
    </div>
  );
}
