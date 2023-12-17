// ChefRecipes.js

import {React, useState ,useEffect} from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";


const ChefData = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dkjn33zdf/image/upload/v1702791448/Screenshot_2023-12-17_110608_iuywiq.png",
      name: "Chef Arjun Kapoor",
      experience: 10,
      recipes: 50,
      likes: 200,
      description:"lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu sapien et"
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dkjn33zdf/image/upload/v1702791448/Screenshot_2023-12-17_110608_iuywiq.png",
      name: "Chef Priya Sharma",
      experience: 8,
      recipes: 40,
      likes: 150,
      description:"lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu sapien et"
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dkjn33zdf/image/upload/v1702791448/Screenshot_2023-12-17_110608_iuywiq.png",
      name: "Chef Rajesh Patel",
      experience: 12,
      recipes: 60,
      likes: 250,
      description:"lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu sapien et"
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dkjn33zdf/image/upload/v1702791448/Screenshot_2023-12-17_110608_iuywiq.png",
      name: "Chef Ananya Singh",
      experience: 10,
      recipes: 50,
      likes: 200,
      description:"lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu sapien et"
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dkjn33zdf/image/upload/v1702791448/Screenshot_2023-12-17_110608_iuywiq.png",
      name: "Chef Vikram Kapoor",
      experience: 8,
      recipes: 40,
      likes: 150,
      description:"lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu sapien et"
    },
    {
      id: 6,
      img: "https://res.cloudinary.com/dkjn33zdf/image/upload/v1702791448/Screenshot_2023-12-17_110608_iuywiq.png",
      name: "Chef Aishwarya Singh",
      experience: 12,
      recipes: 60,
      likes: 250,
      description:"lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu sapien et"
    },
    // Add more chef data as needed
  ];

  const sampleRecipes = [
    {
      id: 1,
      name: "Delicious Dish 1",
      ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3", "Ingredient 4", "Ingredient 5"],
      cookingMethod: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
      isFavorite: false,
    },
    {
        id: 1,
        name: "Delicious Dish 1",
        ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3", "Ingredient 4", "Ingredient 5"],
        cookingMethod: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 4,
        isFavorite: false,
      },
      {
        id: 1,
        name: "Delicious Dish 1",
        ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3", "Ingredient 4", "Ingredient 5"],
        cookingMethod: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 4,
        isFavorite: false,
      },
      {
        id: 1,
        name: "Delicious Dish 1",
        ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3", "Ingredient 4", "Ingredient 5"],
        cookingMethod: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 4,
        isFavorite: false,
      },
      {
        id: 1,
        name: "Delicious Dish 1",
        ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3", "Ingredient 4", "Ingredient 5"],
        cookingMethod: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 4,
        isFavorite: false,
      },
      {
        id: 1,
        name: "Delicious Dish 1",
        ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3", "Ingredient 4", "Ingredient 5"],
        cookingMethod: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        rating: 4,
        isFavorite: false,
      },

    // ... add more recipes ...
  ];


  const ChefRecipes = () => {
    const router = useRouter();
    const { chefId } = router.query;
  
    const selectedChef = ChefData.find((chef) => chef.id === parseInt(chefId));

      // State to track favorite recipes
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

 // State for custom toast message
 const [toastMessage, setToastMessage] = useState('');
  
 // Function to handle marking a recipe as a favorite
 const handleFavoriteClick = (recipeId) => {
   // Check if the recipe is already marked as a favorite
   if (favoriteRecipes.includes(recipeId)) {
     setToastMessage('This recipe is already your favorite!');
   } else {
     // Mark the recipe as a favorite
     setFavoriteRecipes((prevFavorites) => [...prevFavorites, recipeId]);
     // Show a success toast message
     setToastMessage('Recipe marked as your favorite!');
   }
 };

  // Effect to clear the toast message after a delay
  useEffect(() => {
    if (toastMessage) {
      const timeoutId = setTimeout(() => {
        setToastMessage('');
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [toastMessage]);
  
    if (!selectedChef) {
      return <div>Chef not found</div>;
    }
  
    return (
      <>
      <Navbar/>
   {/* Custom Toast Message */}
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
        <p className="text-sm text-gray-500 mb-4">{selectedChef.experience} Years of Experience</p>
        <p className="text-sm text-gray-500 mb-4">{selectedChef.recipes} Recipes Created</p>
        <p className="text-sm text-gray-500 mb-8">{selectedChef.likes} Likes</p>
        <p className="text-base text-gray-700">{selectedChef.description}</p>
      </div>
    </div>
        <div className="container mx-auto p-8">
          <h2 className="text-2xl font-bold mb-4">Recipes : </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {sampleRecipes.map((recipe) => (
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
                <p className="text-gray-700 mb-4">{recipe.cookingMethod}</p>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">Rating: {recipe.rating}</span>
                  <button
                  className={`${
                    favoriteRecipes.includes(recipe.id) ? "text-red-500" : "text-gray-400"
                  } transition duration-300 transform hover:scale-110 focus:outline-none`}
                  onClick={() => handleFavoriteClick(recipe.id)}
                  disabled={favoriteRecipes.includes(recipe.id)}
                >
                  ❤️
                </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer/>
      </>
    );
  };
  
  export default ChefRecipes;