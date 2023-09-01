import { Box, Text, Image, Tag, TagLabel, Flex } from "@chakra-ui/react";
export const RecipeCard = ({ item, clickFn }) => {
  const cardStyle = {
    borderWidth: "1px",
    borderRadius: "lg",
    overflow: "hidden",
    boxShadow: "base",
    p: "4",
    mb: "4",
    h: "400px",
    w: "250px",
    margin: "4px",
  };

  const imgContainerStyle = {
    position: "relative", // Make the container relative for absolute positioning of the image
    overflow: "hidden", // Hide any overflowing content from the container
    height: "30%", // Max 30% of card height for the image container
    mb: "2", // Add some margin at the bottom of the image container
  };

  const imgStyle = {
    position: "absolute", // Absolutely position the image within the container
    objectFit: "cover", // Ensure the image covers the entire container
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    w: "100%", // Make the image take up the full width of the container
    h: "100%",
  };
  return (
    <Box
      key={item.recipe.label}
      {...cardStyle}
      onClick={clickFn}
      cursor={"pointer"}
    >
      <Box {...imgContainerStyle}>
        <Image src={item.recipe.image} {...imgStyle} />
      </Box>
      <Flex align={"center"}>
        {item.recipe.healthLabels.includes("Vegan") ? (
          <Tag bg={"green"} margin={"1"}>
            Vegan
          </Tag>
        ) : (
          <></>
        )}
        {item.recipe.healthLabels.includes("Vegetarian") ? (
          <Tag bg={"green"}>Vegetarian</Tag>
        ) : (
          <></>
        )}
      </Flex>
      <Text>{item.recipe.mealType}</Text>
      <Text>{item.recipe.label}</Text>
      <Flex flexWrap="wrap" p="4" mt="auto" mb="1">
        {item.recipe.dietLabels.map((lb) => (
          <Tag key={lb} mr="2" mb="1">
            <TagLabel>{lb}</TagLabel>
          </Tag>
        ))}
      </Flex>
      <Text>{item.recipe.dishType}</Text>
      <Flex flexWrap="wrap" p="4" mt="auto" mb="1">
        {item.recipe.cautions.map((caution) => (
          <Tag key={caution} mr="2" mb="1">
            <TagLabel>{caution}</TagLabel>
          </Tag>
        ))}
      </Flex>
    </Box>
  );
};
