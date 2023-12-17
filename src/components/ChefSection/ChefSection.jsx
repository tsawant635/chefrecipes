import React from "react";
import Link from "next/link";
import { ChefData } from "@/data/data";

const ChefSection = () => {
  return (
    <>
      <span id="chefs"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Meet Our Chefs
            </p>
            <h1 className="text-3xl font-bold">Chef Section</h1>
            <p className="text-xs text-gray-400">
              Discover the culinary expertise of our talented chefs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ChefData.map((chef) => (
              <div
                key={chef.id}
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div>
                  <img
                    src={chef.img}
                    alt={chef.name}
                    width={300}
                    height={300}
                    className="object-cover max-h-[260px] rounded-t-2xl"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{chef.name}</h1>
                  <p className="text-gray-500 text-sm mb-2">
                    {chef.experience} Years of Experience
                  </p>
                  <p className="text-gray-500 text-sm mb-2">
                    {chef.recipes.length} Recipes Created
                  </p>
                  <p className="text-gray-500 text-sm mb-4">{chef.likes} Likes</p>
                  <Link href={`/chef/${chef.id}`}>
                    <div className="bg-primary text-white py-2 px-4 rounded-full">
                      View Recipes
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefSection;
