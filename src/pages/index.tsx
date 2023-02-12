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
  Input,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import carton from "../../public/carton.svg";
import forklift from "../../public/lift.svg";
import warehouse from "../../public/warehouse.svg";
import { useEffect, useState } from "react";
import { submitEmail } from "@/lib/firebase";
import EmailForm from "@/components/EmailForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const width = useBreakpointValue({ base: 250, md: 350 });
  const height = useBreakpointValue({ base: 150, md: 600 });
  const [email, setEmail] = useState("");

  const onChange = (e: any) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    console.log(email);
  }, [email]);
  return (
    <>
      <Head>
        <title>Warehouse Wiki</title>
        <meta name="description" content="we ship shit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/carton.svg" />
      </Head>
      <Center minH={"75vh"} flexDirection="column">
        <Stack direction={"column"} mt={24} p={24} spacing={9}>
          <EmailForm />
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
