import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/lib/extendTheme";
import { useEffect } from "react";
import splitbee from "@splitbee/web";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  useEffect((): void => {
    splitbee.init({ apiUrl: "/sb-api", scriptUrl: "/sb.js" });
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
