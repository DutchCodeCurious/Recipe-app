import { RecipeList } from "../components/RecipeList";
import Layout from "../components/Layout";
import { useState } from "react";
export const Home = () => {
  const [selectedTag, setSelectedTag] = useState("");

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <Layout onTagClick={handleTagClick}>
      <RecipeList selectedTag={selectedTag} />
    </Layout>
  );
};
