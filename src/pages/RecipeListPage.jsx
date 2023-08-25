import { Center, Heading, Box } from "@chakra-ui/react";
import { RecipeList } from "../components/RecipeList";

export const RecipeListPage = () => {
  // You can play around with the console log, but ultimately remove it once you are done
  // console.log(data.hits[0].recipe.label);
  // data.hits.map((item) => {
  //  console.log(item.recipe.label);
  //});

  return (
    <Center h="100vh" flexDir="column">
      <Box>
        <Heading>Hier staan dingen!!</Heading>
      </Box>
      <RecipeList />
    </Center>
  );
};
