import { Button, Flex, Input, Title } from "@mantine/core";
import { ChangeEvent, useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleButton = () => {
    alert("Button");
  };

  return (
    <Flex gap="md" direction="column">
      <Title>Heading</Title>
      <Input placeholder="placeholder" onChange={handleInput} value={input} />
      <Button onClick={handleButton}>Button</Button>
    </Flex>
  );
}

export default App;
