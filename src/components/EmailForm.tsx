import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Text,
  FormHelperText,
  FormErrorMessage,
  HStack,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { submitEmail } from "@/lib/firebase";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [pressed, setPressed] = useState(false);
  const toast = useToast();

  const handleSubmit = (e: any) => {
    if (!isError) {
      e.preventDefault();
      submitEmail(email);
      setEmail("");
      setPressed(true);
      toast({
        title: "Email Submitted.",
        description: "You've submitted your email",
        status: "success",
        duration: 3000,
        position: "bottom-left",
        isClosable: true,
      });
    }
    e.preventDefault();
  };
  const isError = email === "";

  useEffect(() => {
    console.log(isError);
  }, [isError]);

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <VStack>
          {" "}
          <FormLabel htmlFor="email"></FormLabel>
          <Text fontSize={"3xl"}>Keep me posted</Text>
          <Input
            size={"lg"}
            placeholder="email"
            type="email"
            id="email"
            aria-describedby="email-helper-text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </VStack>
      </FormControl>
      <Button mt={4} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default EmailForm;
