import { Box, Icon, Button } from "@chakra-ui/react";
import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { data } from "../../utils/data";
import { VStack } from "@chakra-ui/react";

const Sidebar = ({ onTagClick }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleTagClick = (healthlabel) => {
    onTagClick(healthlabel);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const uniqueHealthLabels = new Set();
  data.hits.forEach((recipe) => {
    recipe.recipe.healthLabels.forEach((healthlabel) =>
      uniqueHealthLabels.add(healthlabel)
    );
  });

  return (
    <Box
      float={"left"}
      w={isCollapsed ? "60px" : "250px"}
      h="100%"
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
      <VStack
        spacing={2}
        float={"left"}
        visibility={isCollapsed ? "hidden" : "none"}
      >
        <Button
          float="left"
          bg="white"
          color={"black"}
          size="xs"
          colorScheme="teal"
          variant="solid"
          cursor={"pointer"}
          onClick={() => handleTagClick("")}
        >
          Reset
        </Button>
        {Array.from(uniqueHealthLabels).map((health) => (
          <Button
            bg=""
            size="xs"
            colorScheme="teal"
            variant="solid"
            value={health}
            key={health}
            cursor={"pointer"}
            onClick={() => handleTagClick(health)}
            _focus={{
              bg: "green",
            }}
          >
            {health}
          </Button>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
