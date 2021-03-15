// This content will be available in ALL PAGES!
// Keep here the minimal necessary, because you can custom
// SEO and more (title, content...) PAGE BY PAGE!
// _document.tsx is rendered only on the server side; It's the HTML structure.

import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    console.log("HELLO FROM _document.tsx! AVAILABLE only on the server side!");
    return (
      <Html>
        <Head>
          <meta property="something" content="whatever content" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
