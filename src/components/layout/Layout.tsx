import { Box, useBreakpointValue } from "@chakra-ui/react";

export default function Layout({ children }: any) {
  //conditional styles
  const containerPadding = useBreakpointValue({ base: 3, md: 9 });
  return (
    <Box p={containerPadding} display="flex" h="100vh" flexDirection="column">
      <Box flex="1">{children}</Box>
    </Box>
  );
}
