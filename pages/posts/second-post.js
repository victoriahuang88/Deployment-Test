import Head from "next/head";

import Layout from "../../components/layout.js";

export default function SecondPost() {
  return (
    <>
      <Head>
        <title>Second Post</title>
      </Head>
      <Layout>
        <h1>This is our second page</h1>
        <h2>This is the seocnd heading</h2>
      </Layout>
    </>
  );
}
