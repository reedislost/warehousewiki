import { Box, Center, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";

export default function List() {
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
            <Text fontSize={"3xl"}>List</Text>
          </Box>
        </VStack>
      </Center>
    </>
  );
}
