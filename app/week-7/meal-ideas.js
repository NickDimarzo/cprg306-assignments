"use client"
import {useState, useEffect} from 'react'

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    const data = await response.json()
    return data.meals
}

export default function MealIdeas({ingredient}) {
  const [meals, setMeals] = useState([])

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient)
    setMeals(mealIdeas);
    }

    useEffect(() => {
        loadMealIdeas()
    }, [ingredient])

    return (
        <div>
            <h1>Meal Ideas</h1>
            <ul>
                {meals.map((meal, index) => (
                    <li key={index}>
                        <p>
                            {meal.strMeal}
                        </p>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                    </li>
                ))}
            </ul>
        </div>
    )


}