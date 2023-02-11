import Head from "next/head";

import { Inter } from "@next/font/google";
import {
  Box,
  Center,
  VStack,
  Text,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import carton from "../../public/carton.svg";

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
        <VStack>
          <Box>
            <Text fontSize={"3xl"}>Warehouse.Wiki</Text>
          </Box>
          <Box>
            <Text fontSize={"3xl"}></Text>
          </Box>
          <Image
            src={carton}
            alt={"warehouse wiki"}
            width={width}
            height={height}
          />
        </VStack>
      </Center>
    </>
  );
}
