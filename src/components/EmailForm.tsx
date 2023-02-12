import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Text,
} from "@chakra-ui/react";
import { submitEmail } from "@/lib/firebase";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [pressed, setPressed] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    submitEmail(email);
    setEmail("");
    setPressed(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="email"></FormLabel>
        <Input
          size={"lg"}
          placeholder="email"
          type="email"
          id="email"
          aria-describedby="email-helper-text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <Center>
        {" "}
        <Button mt={4} type="submit">
          {!pressed ? <Text>Submit</Text> : <Text>Submitted</Text>}
        </Button>
      </Center>
    </form>
  );
};

export default EmailForm;
