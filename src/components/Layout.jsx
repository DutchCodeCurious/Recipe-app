import { Box, Flex } from "@chakra-ui/react";
import Header from "./ui/Header";
import Sidebar from "./ui/Sidebar";

const Layout = ({ children, onTagClick }) => {
  return (
    <Box flex="1" flexDirection="column">
      <Header />
      <Sidebar onTagClick={onTagClick} />
      <Flex>
        <Box p={8} flex={"1"}>
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default Layout;
