import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Chef's Blog</h1>
          <div className="my-8">
            <h2 className="text-2xl font-bold mb-2">
              Coming Soon: Exciting Recipes Await!
            </h2>
            <p className="text-gray-700">
              Stay tuned as our chefs prepare to share their culinary secrets
              and bring you on a delightful journey of flavors. Get ready for
              exciting recipes, cooking tips, and more!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
