import {
  Flex,
  Box,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  const background = useColorModeValue("gray.600", "gray.400");
  return (
    <Box
      display={{ base: "flex", md: "flex" }}
      alignItems="center"
      flexDirection={{ base: "column", md: "row" }}
      textAlign={{ base: "center", md: "initial" }}
      justifyContent="space-between"
      rounded="md"
    >
      <Button onClick={toggleColorMode} background="none">
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Box>
  );
}
