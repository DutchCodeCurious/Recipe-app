import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Flex,
  UnorderedList,
  ListItem,
  Tag,
  TagLabel,
  Image,
} from "@chakra-ui/react";

const RecipeModal = ({ isOpen, onClose, item }) => {
  console.log(item);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{item.recipe.label}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{item.recipe.mealType}</Text>
          <Text>{item.recipe.dishType}</Text>
          <Image src={item.recipe.image} />
          <Text>Servings: {item.recipe.yield}</Text>
          <Flex>
            <UnorderedList>
              <Text as="h2">Ingredients</Text>
              {item.recipe.ingredientLines.map((ingr, index) => (
                <ListItem key={index}>{ingr}</ListItem>
              ))}
            </UnorderedList>
          </Flex>
          <Flex flexWrap="wrap" p="4" mt="auto" mb="1">
            {item.recipe.dietLabels.map((lb) => (
              <Tag key={lb} mr="2" mb="1">
                <TagLabel>{lb}</TagLabel>
              </Tag>
            ))}
          </Flex>
          <Flex flexWrap="wrap" p="4" mt="auto" mb="1">
            {item.recipe.cautions.map((caution) => (
              <Tag key={caution} mr="2" mb="1">
                <TagLabel>{caution}</TagLabel>
              </Tag>
            ))}
            <Flex flexWrap="wrap">
              {item.recipe.healthLabels.map((health) => (
                <Tag key={health}>
                  <TagLabel>{health}</TagLabel>
                </Tag>
              ))}
            </Flex>
          </Flex>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RecipeModal;
