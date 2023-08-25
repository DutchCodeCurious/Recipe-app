import { Text, Stack } from "@chakra-ui/react";

const Header = () => {
  return (
    <Stack
      spacing={"1"}
      bg="gray.100"
      p={4}
      shadow="md"
      position={"absolute, fixed"}
      top={"0"}
      width={"100%"}
    >
      <Text fontSize="xl" fontWeight="bold" textAlign={"center"}>
        Recipe list
      </Text>
    </Stack>
  );
};

export default Header;
