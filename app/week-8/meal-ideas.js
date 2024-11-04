"use client";

import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();

      let shuffled = [...data.meals];
      shuffled = shuffled.sort(() => 0.5 - Math.random()).slice(0, 10);
      setMeals(shuffled);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }

  useEffect(() => {
    if (ingredient) {
      fetchMealIdeas(ingredient);
    }
  }, [ingredient]);

  return (
    <div className="meal-ideas">
      <h3 className="text-lg font-bold mb-2">Meal Ideas for: {ingredient}</h3>
      <ul className="meal-list space-y-2">
        {meals && meals.length > 0 ? (
          meals.map((meal) => (
            <li key={meal.idMeal} className="flex items-center space-x-3">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-16 h-16 rounded-md"
              />
              <p className="meal-name text-md">{meal.strMeal}</p>
            </li>
          ))
        ) : (
          <p>No meals found for this ingredient.</p>
        )}
      </ul>
    </div>
  );
}
