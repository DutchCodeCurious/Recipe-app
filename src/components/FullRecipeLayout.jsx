import {
  Box,
  Tag,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  TagLabel,
  ListItem,
} from "@chakra-ui/react";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export const FullRecipeLayout = () => {
  const location = useLocation();
  const full = location.state?.recipe;

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            src={full.recipe.image}
            alt={full.recipe.label}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {full.recipe.label}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              {full.recipe.mealType}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {full.recipe.healthLabels.map((health) => (
                  <Tag overflow="visible" fontSize={"xs"} key={health}>
                    {health}
                  </Tag>
                ))}
              </Text>
            </VStack>
            <Stack spacing={{ base: 4, sm: 6 }} direction={"column"}>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Ingredients
              </Text>
              <Text fontSize={"lg"}>
                {full.recipe.ingredientLines.map((ingr, index) => (
                  <Text key={index}>{ingr}</Text>
                ))}
              </Text>
            </Stack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Total nutrients
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>
                    {" "}
                    {full.recipe.totalNutrients.ENERC_KCAL.label}:{" "}
                    {Math.round(full.recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
                    {full.recipe.totalNutrients.ENERC_KCAL.unit}
                  </ListItem>
                  <ListItem>
                    {" "}
                    {full.recipe.totalNutrients.FAT.label}:{" "}
                    {Math.round(full.recipe.totalNutrients.FAT.quantity)}{" "}
                    {full.recipe.totalNutrients.FAT.unit}
                  </ListItem>{" "}
                  <ListItem>
                    {" "}
                    {full.recipe.totalNutrients.CHOCDF.label}:{" "}
                    {Math.round(full.recipe.totalNutrients.CHOCDF.quantity)}{" "}
                    {full.recipe.totalNutrients.CHOCDF.unit}
                  </ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>
                    {" "}
                    {full.recipe.totalNutrients.PROCNT.label}:{" "}
                    {Math.round(full.recipe.totalNutrients.PROCNT.quantity)}{" "}
                    {full.recipe.totalNutrients.PROCNT.unit}
                  </ListItem>
                  <ListItem>
                    {" "}
                    {full.recipe.totalNutrients.CHOLE.label}:{" "}
                    {Math.round(full.recipe.totalNutrients.CHOLE.quantity)}{" "}
                    {full.recipe.totalNutrients.CHOLE.unit}
                  </ListItem>
                  <ListItem>
                    {" "}
                    {full.recipe.totalNutrients.NA.label}:{" "}
                    {Math.round(full.recipe.totalNutrients.NA.quantity)}{" "}
                    {full.recipe.totalNutrients.NA.unit}
                  </ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Recipe Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Servings:
                  </Text>{" "}
                  {full.recipe.yield}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Cooking time:
                  </Text>{" "}
                  {full.recipe.totalTime} minutes
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Diet:
                  </Text>{" "}
                  {full.recipe.dietLabels.map((lb) => (
                    <Tag key={lb} mr="2" mb="1">
                      <TagLabel>{lb}</TagLabel>
                    </Tag>
                  ))}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Cautions:
                  </Text>{" "}
                  {full.recipe.cautions.map((caution) => (
                    <Tag key={caution}>{caution}</Tag>
                  ))}
                </ListItem>
              </List>
            </Box>
          </Stack>
          <Link to={"/"}>
            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Back
            </Button>
          </Link>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
