import { Box, Flex, Input } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "./ui/RecipeCard";
import { useState } from "react";
import RecipeModal from "./RecipeModal";
import { Radio, RadioGroup, HStack } from "@chakra-ui/react";

export const RecipeList = ({ selectedTag }) => {
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedBox, setSelectedBox] = useState("");

  const handleBoxChange = (value) => {
    setSelectedBox(value);
    console.log(selectedBox);
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

  const filteredItems = data.hits.filter(
    (recipe) =>
      (selectedBox === "" || recipe.recipe.mealType.includes(selectedBox)) &&
      (selectedTag === "" ||
        recipe.recipe.healthLabels.includes(selectedTag)) &&
      (inputValue === "" ||
        recipe.recipe.label
          .toLowerCase()
          .includes(
            inputValue.toLowerCase() ||
              recipe.recipe.healthLabels
                .toLowerCase()
                .includes(inputValue.toLowerCase())
          ))
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
      <Flex width="100%" align="center">
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
      {filteredItems.map((item) => (
        <RecipeCard
          key={item.recipe.label}
          item={item}
          clickFn={() => openModal(item)}
        />
      ))}

      {inputValue === "" &&
        selectedBox === "" &&
        data.hits.map((item) => (
          <RecipeCard
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
  );
};
