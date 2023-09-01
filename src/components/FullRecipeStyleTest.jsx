import { useLocation } from "react-router-dom";
import styled from "styled-components";

const RecipeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const RecipeImage = styled.img`
  max-width: 50%;
  height: 400px;
  margin-bottom: 10px;
`;

const RecipeHeading = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const RecipeList = styled.ul`
  list-style: none;
  padding: 0;
`;

const RecipeListItem = styled.li`
  margin: 5px 0;
`;

const RecipeTag = styled.span`
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 5px;
`;

const RecipeInfo = styled.div`
  margin-top: auto;
  text-align: center;
`;

export const FullRecipe = () => {
  const location = useLocation();
  const full = location.state?.recipe;

  return (
    <RecipeCard>
      <RecipeHeading>{full.recipe.mealType}</RecipeHeading>
      <RecipeImage src={full.recipe.image} alt={full.recipe.dishType} />
      <RecipeList>
        <RecipeHeading>Ingredients</RecipeHeading>
        {full.recipe.ingredientLines.map((ingr, index) => (
          <RecipeListItem key={index}>{ingr}</RecipeListItem>
        ))}
      </RecipeList>
      <div>
        {full.recipe.dietLabels.map((lb, index) => (
          <RecipeTag key={index}>{lb}</RecipeTag>
        ))}
      </div>
      <div>
        {full.recipe.cautions.map((caution, index) => (
          <RecipeTag key={index}>{caution}</RecipeTag>
        ))}
        {full.recipe.healthLabels.map((health, index) => (
          <RecipeTag key={index}>{health}</RecipeTag>
        ))}
      </div>
      <RecipeInfo>
        <p>
          {full.recipe.totalNutrients.ENERC_KCAL.label}:{" "}
          {Math.round(full.recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
          {full.recipe.totalNutrients.ENERC_KCAL.unit}
        </p>
        <p>
          {full.recipe.totalNutrients.FAT.label}:{" "}
          {Math.round(full.recipe.totalNutrients.FAT.quantity)}{" "}
          {full.recipe.totalNutrients.FAT.unit}
        </p>
        <p>
          {full.recipe.totalNutrients.CHOCDF.label}:{" "}
          {Math.round(full.recipe.totalNutrients.CHOCDF.quantity)}{" "}
          {full.recipe.totalNutrients.CHOCDF.unit}
        </p>
        <p>
          {full.recipe.totalNutrients.PROCNT.label}:{" "}
          {Math.round(full.recipe.totalNutrients.PROCNT.quantity)}{" "}
          {full.recipe.totalNutrients.PROCNT.unit}
        </p>
        <p>
          {full.recipe.totalNutrients.CHOLE.label}:{" "}
          {Math.round(full.recipe.totalNutrients.CHOLE.quantity)}{" "}
          {full.recipe.totalNutrients.CHOLE.unit}
        </p>
        <p>
          {full.recipe.totalNutrients.NA.label}:{" "}
          {Math.round(full.recipe.totalNutrients.NA.quantity)}{" "}
          {full.recipe.totalNutrients.NA.unit}
        </p>
      </RecipeInfo>
    </RecipeCard>
  );
};
