import { Box, Flex, Input } from "@chakra-ui/react";
import { data } from "../utils/data";
import { useState } from "react";
import RecipeModal from "./RecipeModal";
import { Radio, RadioGroup, HStack } from "@chakra-ui/react";
import { CardDesign } from "./ui/CardDesign";

export const RecipeList = ({ selectedTag }) => {
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedBox, setSelectedBox] = useState("");

  const handleBoxChange = (value) => {
    setSelectedBox(value);
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const handleKeyDown = (event) => {
    setInputValue(event.target.value);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  function filterItem(item, selectedBox, selectedTag, inputValue) {
    const { recipe } = item;

    if (!recipe || !recipe.mealType || !recipe.healthLabels || !recipe.label) {
      return false;
    }

    const boxCondition =
      selectedBox === "" || recipe.mealType.includes(selectedBox);

    const tagCondition =
      selectedTag === "" || recipe.healthLabels.includes(selectedTag);

    const inputValueCondition =
      inputValue === "" ||
      recipe.label.toLowerCase().includes(inputValue.toLowerCase()) ||
      recipe.healthLabels.some((label) =>
        label.toLowerCase().includes(inputValue.toLowerCase())
      );

    return boxCondition && tagCondition && inputValueCondition;
  }

  const filteredItems = data.hits.filter((item) =>
    filterItem(item, selectedBox, selectedTag, inputValue)
  );

  const listStyle = {
    spacing: "4",
    align: "center",
    justify: "center",
    display: "flex",
    flexWrap: "wrap",
  };

  return (
    <Box {...listStyle}>
      <Flex width="100%" align="center" justifyContent={"center"}>
        <Input
          width="40%"
          type="text"
          name="searchInput"
          id="searchInput"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          marginRight="10px"
        />
        <RadioGroup value={selectedBox} onChange={handleBoxChange}>
          <HStack justifyContent="flex-end" spacing={2}>
            <Radio value="breakfast">Breakfast</Radio>
            <Radio value="lunch/dinner">Lunch/Dinner</Radio>
            <Radio value="snack">Snack</Radio>
            <Radio value="" isChecked>
              All
            </Radio>
          </HStack>
        </RadioGroup>
      </Flex>
      <Box
        alignItems={"center"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {filteredItems.map((item) => (
          <CardDesign
            key={item.recipe.label}
            item={item}
            clickFn={() => openModal(item)}
          />
        ))}
        {selectedItem !== null && (
          <RecipeModal
            isOpen={isModalOpen}
            onClose={closeModal}
            item={selectedItem}
          />
        )}
      </Box>
    </Box>
  );
};
