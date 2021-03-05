import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import { LiveVideoContextProvider } from "../src/Context/LiveVideoContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
