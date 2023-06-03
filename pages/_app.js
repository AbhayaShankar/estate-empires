import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import Head from "next/head";
import NProgress from "nprogress";
import Layout from "@/components/Layout";
import { Fragment } from "react";
import { Router } from "next/router";
import "../styles/style.css";

export default function App({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  return (
    <Fragment>
      <Head>
        <title>The Estate Empire - You think We Provide</title>
        <meta
          name="description"
          content="Estate empire lets you grab the opportunity to rent or buy your dream home with the best features possible."
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Fragment>
  );
}
