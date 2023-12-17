import { React, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ChefData } from "@/data/data";

const ChefRecipes = () => {
  const router = useRouter();
  const { chefId } = router.query;

  const selectedChef = ChefData.find((chef) => chef.id === parseInt(chefId));

  // State to track favorite recipes
  const [favoriteRecipes, setFavoriteRecipes] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("favoriteRecipes")) || [];
    }
    return [];
  });

  const [toastMessage, setToastMessage] = useState("");

  // Function to handle marking a recipe as a favorite
  const handleFavoriteClick = (recipeId, recipeName) => {
    // Check if the recipe is already marked as a favorite
    if (favoriteRecipes.includes(recipeId)) {
      // Remove the recipe from favorites
      setFavoriteRecipes((prevFavorites) =>
        prevFavorites.filter((id) => id !== recipeId)
      );
      // Remove the favorite recipe name from local storage
      localStorage.setItem(
        "favoriteRecipes",
        JSON.stringify(favoriteRecipes.filter((name) => name !== recipeName))
      );
      setToastMessage("Recipe removed from your favorites!");
    } else {
      // Mark the recipe as a favorite
      setFavoriteRecipes((prevFavorites) => [...prevFavorites, recipeId]);
      localStorage.setItem(
        "favoriteRecipes",
        JSON.stringify([...favoriteRecipes, recipeName])
      );
      setToastMessage("Recipe marked as your favorite!");
    }
  };

  useEffect(() => {
    if (toastMessage) {
      const timeoutId = setTimeout(() => {
        setToastMessage("");
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [toastMessage]);

  if (!selectedChef) {
    return <div>Chef not found</div>;
  }

  return (
    <>
      <Navbar />
      {toastMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-md">
          {toastMessage}
        </div>
      )}
      <div className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <img
            src={selectedChef.img}
            alt={selectedChef.name}
            className="rounded-full h-32 w-32 object-cover mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">{selectedChef.name}</h1>
          <p className="text-sm text-gray-500 mb-4">
            {selectedChef.experience} Years of Experience
          </p>
          <p className="text-sm text-gray-500 mb-4">
            {selectedChef.recipes.length} Recipes Created
          </p>
          <p className="text-sm text-gray-500 mb-8">
            {selectedChef.likes} Likes
          </p>
          <p className="text-base text-gray-700">{selectedChef.description}</p>
        </div>
      </div>
      <div className="container mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4">Recipes : </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {selectedChef.recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white shadow-md rounded-md p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-bold mb-2">{recipe.name}</h3>
              <ul className="list-disc ml-6 mb-4">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <p className="text-gray-700 mb-4"> Cooking Mehod : {recipe.cookingMethod}</p>
              <div className="flex items-center">
                <span className="text-gray-600 mr-2">
                  Rating: {recipe.rating}
                </span>
                <button
                  className="transition duration-300 transform hover:scale-110 focus:outline-none"
                  onClick={() => handleFavoriteClick(recipe.id, recipe.name)}
                >
                  {favoriteRecipes.includes(recipe.id) ? "❤️" : "🤍"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChefRecipes;
