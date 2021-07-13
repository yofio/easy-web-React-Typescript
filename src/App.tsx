import { Button, ChakraProvider } from "@chakra-ui/react";
import thema from "./thema/thema";

export default function App() {
  return (
    <div className="App">
      <ChakraProvider theme={thema}>
        <Button colorScheme="teal">ボタン</Button>
        <p>aaaaaaaaa</p>
      </ChakraProvider>
    </div>
  );
}
