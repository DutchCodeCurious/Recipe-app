import { Box } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "./ui/RecipeCard";

export const RecipeList = () => {
  const listStyle = {
    spacing: "4",
    align: "center",
    justify: "center",
    display: "flex",
    flexWrap: "wrap",
  };
  return (
    <Box {...listStyle}>
      {data.hits.map((item) => (
        <RecipeCard key={item.recipe.label} item={item} />
      ))}
      ;
    </Box>
  );
};
