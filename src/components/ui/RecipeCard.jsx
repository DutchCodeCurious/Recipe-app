import { Box, Text, Image, Tag, TagLabel } from "@chakra-ui/react";

export const RecipeCard = ({ item }) => {
  const cardStyle = {
    h: "400px",
    w: "400px",
  };

  const imgStyle = {
    h: "50px",
    w: "50px",
    objectFit: "cover",
  };
  return (
    <Box key={item.recipe.label} {...cardStyle}>
      <Image src={item.recipe.image} {...imgStyle} />
      <Text>{item.recipe.mealType}</Text>
      {/*}
      <Text>{item.recipe.label}</Text>
    */}
      <Text>{item.recipe.dishType}</Text>
      {/*}
      <Text>{item.recipe.cautions}</Text>
      */}
    </Box>
  );
};
