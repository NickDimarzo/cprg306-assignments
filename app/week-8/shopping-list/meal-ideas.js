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

    function checkForMeals()
    {
        if (meals === null || ingredient === "")
        {
            return <li>No Meals Available</li>
        }
        else
        {
            return meals.map((meal, index) => (
                <li key={index} className="p-2 m-4 bg-slate-800 max-w-sm border-2 border-slate-800 hover:border-orange-400 hover:border-2">
                    <p>
                        {meal.strMeal}
                    </p>  
                </li>
            ))
        }
    }

    useEffect(() => {
        loadMealIdeas()
    }, [ingredient])

    return (
        <div className="p-2 m-4 bg-slate-900 max-w-sm w-full flex-row border-2 rounded-lg">
            <div className="flex - justify-center">
                <h1 className="font-bold text-3xl m-1">Meal Ideas</h1>
            </div>
            
            <ul>
                {checkForMeals()}
            </ul>
        </div>
    )


}