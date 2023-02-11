import Head from "next/head";

import { Inter } from "@next/font/google";
import {
  Box,
  Center,
  VStack,
  Text,
  HStack,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import carton from "../../public/carton.svg";
import forklift from "../../public/lift.svg";
import warehouse from "../../public/warehouse.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const width = useBreakpointValue({ base: 250, md: 350 });
  const height = useBreakpointValue({ base: 150, md: 600 });
  return (
    <>
      <Head>
        <title>Warehouse Wiki</title>
        <meta name="description" content="we ship shit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/carton.svg" />
      </Head>
      <Center minH={"75vh"} flexDirection="column">
        <Stack
          direction={useBreakpointValue({ base: "column", md: "row" })}
          mt={24}
          p={24}
          bg="#E6CBAB"
          borderRadius={"md"}
          boxShadow={"md"}
          spacing={9}
        >
          <Box>
            <Text fontSize={"3xl"}></Text>
          </Box>
          <Box p={1}>
            <Image
              src={forklift}
              alt={"warehouse wiki"}
              width={width}
              height={height}
            />
          </Box>
          <Image
            src={warehouse}
            alt={"warehouse wiki"}
            width={width}
            height={height}
          />
        </Stack>
      </Center>
    </>
  );
}
