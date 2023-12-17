import React from "react";
import { heroChefImg, heroVector } from "@/data/images";

const Hero = () => {
  
  const bgImage = {
    backgroundImage: `url(${heroVector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Chef Delights {" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                Flavors of India   
      </span>
              </h1>
              <p className="text-sm ">
              Journey through Chef Delights, where every bite tells a story. Immerse yourself in the vibrant tapestry of Indian spices and culinary wonders. From rich curries to tantalizing sweets, discover the heart and soul of Indian cuisine. Join us in a celebration of flavors that dance on your palate, echoing the spirit of India's diverse and delectable culinary heritage
             </p>
              <div>
              </div>
            </div>
            <div className=" flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="overflow-hidden flex justify-center items-center">
                <img
                  src={heroChefImg}
                  alt="Chef img"
                  width={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
