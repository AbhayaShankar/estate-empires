import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import Head from "next/head";
import { NProgress } from "nprogress";
import Layout from "@/components/Layout";
import { Fragment } from "react";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>The Estate Empire - You think We Provide</title>
        <meta />
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Fragment>
  );
}
