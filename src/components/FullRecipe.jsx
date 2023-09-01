import { useLocation } from "react-router-dom";
import {
  Box,
  Text,
  Image,
  UnorderedList,
  ListItem,
  Tag,
  TagLabel,
  Flex,
} from "@chakra-ui/react";

export const FullRecipe = () => {
  const location = useLocation();
  const full = location.state?.recipe;

  return (
    <>
      <Box m={"50px"}>
        <Text>{full.recipe.mealType}</Text>
        <Text>{full.recipe.dishType}</Text>
        <Image maxH={"400px"} src={full.recipe.image} />
        <Text>Servings: {full.recipe.yield}</Text>
        <Flex>
          <UnorderedList>
            <Text as="h2">Ingredients</Text>
            {full.recipe.ingredientLines.map((ingr, index) => (
              <ListItem key={index}>{ingr}</ListItem>
            ))}
          </UnorderedList>
        </Flex>
        <Flex flexWrap="wrap" p="4" mt="auto" mb="1">
          {full.recipe.dietLabels.map((lb) => (
            <Tag key={lb} mr="2" mb="1">
              <TagLabel>{lb}</TagLabel>
            </Tag>
          ))}
        </Flex>
        <Flex flexWrap="wrap" p="4" mt="auto" mb="1">
          {full.recipe.cautions.map((caution) => (
            <Tag key={caution} mr="2" mb="1">
              <TagLabel>{caution}</TagLabel>
            </Tag>
          ))}
          <Flex flexWrap="wrap">
            {full.recipe.healthLabels.map((health) => (
              <Tag key={health}>
                <TagLabel>{health}</TagLabel>
              </Tag>
            ))}
          </Flex>
        </Flex>
        <Box>
          <Text>
            {full.recipe.totalNutrients.ENERC_KCAL.label}:{" "}
            {Math.round(full.recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
            {full.recipe.totalNutrients.ENERC_KCAL.unit}
          </Text>
          <Text>
            {full.recipe.totalNutrients.FAT.label}:{" "}
            {Math.round(full.recipe.totalNutrients.FAT.quantity)}{" "}
            {full.recipe.totalNutrients.FAT.unit}
          </Text>
          <Text>
            {full.recipe.totalNutrients.CHOCDF.label}:{" "}
            {Math.round(full.recipe.totalNutrients.CHOCDF.quantity)}{" "}
            {full.recipe.totalNutrients.CHOCDF.unit}
          </Text>
          <Text>
            {full.recipe.totalNutrients.PROCNT.label}:{" "}
            {Math.round(full.recipe.totalNutrients.PROCNT.quantity)}{" "}
            {full.recipe.totalNutrients.PROCNT.unit}
          </Text>{" "}
          <Text>
            {full.recipe.totalNutrients.CHOLE.label}:{" "}
            {Math.round(full.recipe.totalNutrients.CHOLE.quantity)}{" "}
            {full.recipe.totalNutrients.CHOLE.unit}
          </Text>{" "}
          <Text>
            {full.recipe.totalNutrients.NA.label}:{" "}
            {Math.round(full.recipe.totalNutrients.NA.quantity)}{" "}
            {full.recipe.totalNutrients.NA.unit}
          </Text>
        </Box>
      </Box>
    </>
  );
};
