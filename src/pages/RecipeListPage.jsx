import { Center } from "@chakra-ui/react";
import { RecipeList } from "../components/RecipeList";
import Layout from "../components/Layout";
import { useState } from "react";
export const RecipeListPage = () => {
  const [selectedTag, setSelectedTag] = useState("");
  const listStyle = {};

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <Layout onTagClick={handleTagClick}>
      <Center {...listStyle}>
        <RecipeList selectedTag={selectedTag} />
      </Center>
    </Layout>
  );
};
