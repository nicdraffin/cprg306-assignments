"use client";

import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {

  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      if (!response.ok) console.log(response.statusText);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }

  useEffect(() => {
    (async () => {
      if ( meals != null && meals.length > 0 ) {
        let mealList = [];
        for (let i = 0; i < meals.length; i++) {
          let thisMeal = await fetchMealIdeas(meals[i])
          mealList.push(thisMeal)
        }
        console.dir(mealList);
        setMeals(mealList);
        
      }
    })();
  
  }, [meals]);


  return (
    <div className="meal-ideas">
      <h3 className="text-lg font-bold mb-2">Meal Ideas for: {ingredient}</h3>
      <ul className="meal-list space-y-2">
        {meals && meals.length > 0 ? (
          meals.map((meal) => (
            <li key={meal.idMeal} className="flex items-center space-x-3">
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
