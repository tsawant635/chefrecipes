import React from "react";
import { reviewData } from "@/data/data";


const Testimonial = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="300" className="py-10">
      <div className="container">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            What our customers say
          </p>
          <h1 className="text-3xl font-bold">Reviews</h1>
          <p className="text-xs text-gray-400">
            Hear from our valued patrons about their delightful experiences at Chef Delights. Each review is a testament to the exceptional flavors and culinary journey we offer.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="300"
          className="flex flex-wrap justify-center gap-6"
        >
          {reviewData.map((data) => (
            <div key={data.id} className="max-w-[300px] mx-auto">
              <div
                className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
              >
                <img
                  className="rounded-full block mx-auto"
                  src={data.img}
                  alt=""
                />
                <p className="text-gray-500 text-sm">{data.text}</p>
                <h1 className="text-xl font-bold">{data.name}</h1>
                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                  ,,
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

