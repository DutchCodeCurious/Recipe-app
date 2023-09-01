import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const FullRecButton = ({ item }) => {
  console.log("DINGEN");
  return (
    <Link to={`/recipe/${item.recipe.label}`}>
      <Button>Full Recipe of: {item.recipe.label}</Button>
    </Link>
  );
};
