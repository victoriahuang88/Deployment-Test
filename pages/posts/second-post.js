import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout.js";

export default function SecondPost() {
  return (
    <>
      <Head>
        <title>Second Post</title>
        <script src="https://conect.facebook.net/en_US/sdk.js" />
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
      </Head>
      <Layout>
        <h1>This is our second page</h1>
        <h2>This is the seocnd heading</h2>
      </Layout>
    </>
  );
}
