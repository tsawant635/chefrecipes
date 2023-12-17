// ChefDetails.jsx

import React from "react";
import { useParams } from "react-router-dom";

const ChefDetails = () => {
  const { id } = useParams(); // Extracts the chef id from the URL

  // Replace this data with your actual chef data
  const chef = {
    id: 1,
    img: "https://res.cloudinary.com/dkjn33zdf/image/upload/v1702791448/Screenshot_2023-12-17_110608_iuywiq.png",
    name: "Chef Arjun Kapoor",
    experience: 10,
    recipes: 50,
    likes: 200,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget metus ac urna congue tincidunt.",
  };

  // Replace this data with your actual recipe data
  const recipes = [
    {
      id: 1,
      name: "Special Curry",
      ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3", "Ingredient 4", "Ingredient 5"],
      cookingMethod: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
    },
    // Add more recipes as needed
  ];

  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={chef.img} alt={chef.name} className="rounded-lg mb-4" />
            <h1 className="text-3xl font-bold">{chef.name}</h1>
            <p className="text-gray-500 mb-2">{chef.experience} Years of Experience</p>
            <p className="text-gray-500 mb-2">{chef.recipes} Recipes Created</p>
            <p className="text-gray-500 mb-4">{chef.likes} Likes</p>
            <p className="text-gray-700">{chef.bio}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe) => (
                <div key={recipe.id} className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">{recipe.name}</h3>
                  <ul className="list-disc list-inside">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                  <p className="text-gray-700 mt-2">{recipe.cookingMethod}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-500">Rating: {recipe.rating}</span>
                    <button className="bg-primary text-white px-3 py-1 rounded-full">
                      Favorite
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefDetails;
