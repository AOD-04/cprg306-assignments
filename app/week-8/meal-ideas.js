'use client';

import { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];

  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('Error fetching meal ideas:', error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      const ideas = await fetchMealIdeas(ingredient);
      setMeals(ideas);
    }

    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Meal Ideas for {ingredient} </h2>
      {meals.length === 0 ? (
        <p>No meal ideas found.</p>
      ) : (
        <ul className="grid grid-cols-2 gap-4">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="border p-2 rounded shadow">
              <p className="text-center mt-2">{meal.strMeal}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
