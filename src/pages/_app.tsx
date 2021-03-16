// Progressbar / Spinner for the case of using getStaticProps:
// https://www.npmjs.com/package/nextjs-progressbar
// npm i nextjs-progressbar
import NextNprogress from "nextjs-progressbar";
// GLOBAL CSS files MUST BE imported here, at _app.tsx:
import "./globals.css";

function MyApp({ Component, pageProps }) {
  console.log(
    "HELLO FROM _app.tsx! AVAILABLE on the server and on the client side!"
  );
  // Internally, NEXT.JS passes all the pages on this <Component/> as props,
  // beginning with the file index.tsx:
  return (
    <>
      <NextNprogress
        color="#29D"
        startPosition={0.5}
        stopDelayMs={200}
        height={2}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
