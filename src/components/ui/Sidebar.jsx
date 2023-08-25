import { Box, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box
      float={"left"}
      w={isCollapsed ? "60px" : "250px"}
      h="100vh"
      bg="gray.800"
      color="white"
      p={4}
      position="fixed, sticky"
      left={0}
      top={0}
      transition="width 0.3s"
      flexDirection={"column"}
    >
      <Box>
        <Icon
          float={"right"}
          as={isCollapsed ? ArrowRightIcon : ArrowLeftIcon}
          onClick={toggleSidebar}
          cursor={"pointer"}
        />
      </Box>
      {/* Voeg hier de tags, soorten eten toe */}
    </Box>
  );
};

export default Sidebar;
