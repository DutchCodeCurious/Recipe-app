import { Box, Flex } from "@chakra-ui/react";
import Header from "./ui/Header";

const Layout = ({ children }) => {
  return (
    <Box flex="1" flexDirection="column">
      <Header />
      <Flex>
        <Box p={8} flex={"1"} alignContent={"center"}>
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default Layout;
