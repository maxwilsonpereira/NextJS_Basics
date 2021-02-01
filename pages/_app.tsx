// GLOBAL CSS files MUST BE imported here, at _app.tsx:
import "./globals.css";

function MyApp({ Component, pageProps }) {
  console.log(
    "HELLO FROM _app.tsx! AVAILABLE on the server and on the client side!"
  );
  // Internally, NEXT.JS passes all the pages on this <Component/> as props,
  // beginning with the file indeex.tsx:
  return <Component {...pageProps} />;
}

export default MyApp;
