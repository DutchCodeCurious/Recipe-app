import { data } from "../utils/data";

export const dessertRecipes = data.hits.filter((recipe) =>
  recipe.recipe.dishType.includes("desserts")
);

export const lunchDinnerRecipe = data.hits.filter((recipe) =>
  recipe.recipe.mealType.includes("lunch/dinner")
);

export const mainCourseRecipe = data.hits.filter((recipe) =>
  recipe.recipe.dishType.includes("main course")
);

export const breakfastRecipe = data.hits.filter((recipe) =>
  recipe.recipe.mealType.includes("breakfast")
);

export const allMealTypes = () => {
  data.hits((recipe) => console.log(recipe.recipe.mealType));
};

const allMealType = () => {
  const uniqueMealTypes = new Set();

  data.hits.forEach((recipe) =>
    recipe.recipe.mealType.forEach((mealType) => uniqueMealTypes.add(mealType))
  );

  uniqueMealTypes.forEach((mealType) => console.log(mealType));
};

const allDishType = () => {
  const uniqueDishTypes = new Set();

  data.hits.forEach((recipe) =>
    recipe.recipe.dishType.forEach((dishType) => uniqueDishTypes.add(dishType))
  );

  uniqueDishTypes.forEach((dishType) => console.log(dishType));
};

const allHealthLables = () => {
  const uniqueHealthLabels = new Set();
  data.hits.forEach((recipe) =>
    recipe.recipe.healthlabels.forEach((healthlabel) =>
      uniqueHealthLabels.add(healthlabel)
    )
  );
};
