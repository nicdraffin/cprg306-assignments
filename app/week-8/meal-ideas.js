"use client";

import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {

  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      if (!response.ok) {
        console.log(response.statusText);
        return [];
      }
      const data = await response.json();
      return data.meals;
    } catch (error) {
      console.log(`Error: ${error.message}`);
      return [];
    }
  }
  async function loadMealIdeas() {
    if (ingredient) {
      const mealData = await fetchMealIdeas(ingredient);
      setMeals(mealData);
    } else {
      setMeals([]);
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);


  return (
    <div className="meal-ideas">
      <h3 className="text-lg font-bold mb-2">Meal Ideas for: {ingredient}</h3>
      <ul className="meal-list space-y-2">
        {meals.length > 0 ? (
          meals.map((meal) => (
            console.log(meal),
            (
              <li key={meal.idMeal} className="flex items-center space-x-3">
                <p className="meal-name text-md">{meal.strMeal}</p>
              </li>
            )
          ))
        ) : (
          <p>No meals found for this ingredient.</p>
        )}
      </ul>
    </div>
  );
}
