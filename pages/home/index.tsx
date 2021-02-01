import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.scss";
import stylesGlobal from "../global.module.scss";
import jwt from "jsonwebtoken";
import LinkExample from "../link";

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const router = useRouter();

  async function submitForm(e) {
    e.preventDefault();
    const res = await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      // api/login will return the token:
    }).then((token) => token.json());
    const token = res.token;

    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      json.admin
        ? router.push(`/profile?username=${username}&admin=yes`)
        : router.push(`/profile?username=${username}&admin=no`);
    } else {
      setMessage("Something went wrong!");
    }
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>Next.ts</span>
      <br />
      <span className={styles.subTitle}>Next.js with typeScript!</span>
      <br />
      <br />
      {/* IMAGE: */}
      {/* src="/favicon.jpg" -> Consider / as the public folder: */}
      <Image
        className={styles.maxmixlogo}
        src="/images/maxmixlogo.jpg"
        alt=""
        width={80}
        height={80}
      />
      <br /> <br />
      SOME CHANGES!!!
      {/* <form method="POST" action="/api/login"> */}
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input className={styles.btnLogin} type="submit" value="LOGIN" />
      </form>
      <br />
      <h3>{message}</h3>
      <br />
      <LinkExample />
      <br />
      <br />
      <Link href="/pagenames">
        <a className={stylesGlobal.link}>Page Names with Folder Structure</a>
      </Link>
      <br /> <br />
      <h2>
        <Link href="/getStaticProps">
          <a className={stylesGlobal.linkRed}>getStaticProps Example</a>
        </Link>
        <br />
        <Link href="/getStaticPaths/route1">
          <a className={stylesGlobal.linkRed}>getStaticPaths Example</a>
        </Link>
        <br />
        <Link href="/getServerSideProps">
          <a className={stylesGlobal.linkRed}>getServerSideProps Example</a>
        </Link>
      </h2>
      <br />
      <h3>
        {/* OMIT PUBLIC: <Link href="../../public/about.txt"> */}
        <Link href="../../about.txt">
          <a className={stylesGlobal.link}>File public/about.txt</a>
        </Link>
        <br />
        <Link href="../../foldera/file_a.txt">
          <a className={stylesGlobal.link}>File public/foldera/file_a.txt</a>
        </Link>
      </h3>
    </div>
  );
}
