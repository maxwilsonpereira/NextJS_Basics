import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.scss";
import stylesGlobal from "../global.module.scss";
import jwt from "jsonwebtoken";
import LinkExample from "../../components/link";

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
      <Head>
        <title>This Title is just for SEO!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <span className={styles.title}>Next.ts</span>
      <br />
      <span className={styles.subTitle}>Next.js with typeScript by</span>
      <br />
      <br />
      {/* IMAGE: */}
      {/* src="/favicon.jpg" -> Consider / as the public folder: */}
      <a
        href="https://www.maxmixdigital.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={styles.maxmixlogo}
          src="/images/maxmixlogo.jpg"
          alt=""
          width={80}
          height={80}
        />
      </a>
      <br />
      <a
        href="https://github.com/maxwilsonpereira/NextJS_Basics
        "
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className={stylesGlobal.link}>Source code on gitHub</h3>
      </a>
      <hr className={stylesGlobal.horizontalLine} />
      {/* <form method="POST" action="/api/login"> */}
      <h3>
        Login simulation using the native Next.js API (for "admin access":
        username: maxwilson and password: pass123):
      </h3>
      <br />
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
      {message ? (
        <>
          <br />
          <h3>{message}</h3>
        </>
      ) : null}
      <hr className={stylesGlobal.horizontalLine} />
      <h2>CLICK TO SEE EXAMPLE OF:</h2>
      <h2>
        <Link href="/getStaticProps">
          <a
            className={[stylesGlobal.linkRed, stylesGlobal.fontLarger].join(
              " "
            )}
          >
            getStaticProps
          </a>
        </Link>
        <br />
        <Link href="/getStaticPaths/route1">
          <a className={stylesGlobal.linkRed}>getStaticPaths</a>
        </Link>
        <br />
        <Link href="/getServerSideProps">
          <a className={stylesGlobal.linkRed}>getServerSideProps</a>
        </Link>
      </h2>
      <hr className={stylesGlobal.horizontalLine} />
      <LinkExample />
      <hr className={stylesGlobal.horizontalLine} />
      <h2>EXAMPLE OF PAGES IN NEXT.JS:</h2>
      <Link href="/pagenames">
        <a className={stylesGlobal.link}>Page Names: Folder Names</a>
      </Link>
      <hr className={stylesGlobal.horizontalLine} />
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
      <hr className={stylesGlobal.horizontalLine} />
    </div>
  );
}
