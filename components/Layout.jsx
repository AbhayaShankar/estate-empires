import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Estate Empires</title>
      </Head>

      <Box maxWidth={1280} m={"auto"}>
        <header>
          <Navbar />
        </header>

        <main>{children}</main>
      </Box>

      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default Layout;
