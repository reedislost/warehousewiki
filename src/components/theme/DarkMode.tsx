import {
  Flex,
  Box,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const background = useColorModeValue("gray.700", "yellow.400");

  return (
    <Box
      display={{ base: "flex", md: "flex" }}
      alignItems="center"
      flexDirection={{ base: "column", md: "row" }}
      textAlign={{ base: "center", md: "initial" }}
      justifyContent="space-between"
      rounded="md"
    >
      <Button
        data-splitbee-event="dark mode"
        bg={background}
        color={useColorModeValue("white", "black")}
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Box>
  );
}
