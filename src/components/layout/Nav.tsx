import {
  Box,
  Flex,
  Stack,
  useBreakpointValue,
  Text,
  useColorModeValue,
  HStack,
  Center,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const logoWidth = useBreakpointValue({ base: "50px", md: "60px" });
  const logoHeight = useBreakpointValue({ base: "40px", md: "50px" });
  return (
    <>
      <Center>
        <HStack>
          <Link href="/">
            <Text fontSize={"2xl"}>Home</Text>
          </Link>
          <Link href="/list">
            <Text fontSize={"2xl"}>List</Text>
          </Link>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7} alignItems="center">
              Home
            </Stack>
          </Flex>
        </HStack>
      </Center>
    </>
  );
}
