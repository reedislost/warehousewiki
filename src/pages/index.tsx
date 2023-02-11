import Head from "next/head";

import { Inter } from "@next/font/google";
import { Box, Center, VStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import carton from "../../public/carton.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Warehouse Wiki</title>
        <meta name="description" content="Simple Info on Warehouses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/carton.svg" />
      </Head>
      <Center minH={"90vh"}>
        <VStack>
          <Box>
            <Text fontSize={"3xl"}>Warehouse Wiki</Text>
          </Box>
          <Image src={carton} alt={"warehouse wiki"} width={150} height={250} />
        </VStack>
      </Center>
    </>
  );
}
