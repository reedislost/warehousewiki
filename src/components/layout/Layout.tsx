import { Box, useBreakpointValue } from "@chakra-ui/react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }: any) {
  //conditional styles
  const containerPadding = useBreakpointValue({ base: 3, md: 9 });
  return (
    <Box p={containerPadding} display="flex" h="100vh" flexDirection="column">
      <Nav />

      <Box flex="1">{children}</Box>
      <Footer />
    </Box>
  );
}
