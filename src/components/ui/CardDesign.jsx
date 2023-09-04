import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Tag,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const CardDesign = ({ item }) => {
  const [recipe, setRecipe] = useState(item);
  const handleLinkClick = () => {
    setRecipe(item);
  };

  return (
    <Center py={6}>
      <Link to={`/layout/${item.recipe.label}`} state={{ recipe: recipe }}>
        <Box
          key={item.recipe.label}
          width={"250px"}
          height={"520px"}
          margin={"10px"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
          onClick={handleLinkClick}
          cursor={"pointer"}
        >
          <Box
            h={"210px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <Image
              h={"210px"}
              width={"full"}
              src={item.recipe.image}
              alt={item.recipe.label}
            />
          </Box>
          <Stack>
            <Box
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
              alignItems="center"
              display="flex"
              h={"25px"}
            >
              {item.recipe.healthLabels.includes("Vegan") ? (
                <Tag bg={"green"} margin={"1"} display={"inline-block"}>
                  Vegan
                </Tag>
              ) : null}
              {item.recipe.healthLabels.includes("Vegetarian") ? (
                <Tag bg={"green"} display={"inline-block"}>
                  Vegetarian
                </Tag>
              ) : null}
            </Box>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"xl"}
              fontFamily={"body"}
              h={"75px"}
            >
              {item.recipe.label}
            </Heading>
            <Text color={"gray.500"}>Dish: {item.recipe.mealType}</Text>
            <Text fontWeight={600}>{item.recipe.dietLabels}</Text>
          </Stack>
          <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              {item.recipe.cautions.length > 0 && (
                <Text color={"gray.500"}>Cations · </Text>
              )}
              {item.recipe.cautions.map((caution) => (
                <text key={caution}>{caution}</text>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Link>
    </Center>
  );
};
