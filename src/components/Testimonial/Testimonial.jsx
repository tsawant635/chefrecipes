import React from "react";
import Slider from "react-slick";

const reviewData = [
  {
    id: 1,
    name: "Tukaram",
    text: "Chef Delights has revolutionized my palate with its exquisite dishes. The fusion of flavors is unparalleled, making every bite a culinary masterpiece. A delightful journey through authentic Indian cuisine!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Mayur",
    text: "Indulging in Chef Delights' creations is a sensory experience like no other. The carefully crafted recipes showcase the richness of Indian spices, creating a symphony of taste and aroma. Truly a gastronomic adventure!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Sam",
    text: "Chef Delights is a haven for food enthusiasts. The diverse range of recipes reflects the true essence of Indian culinary artistry. Each dish tells a unique story, and the flavors transport you to the heart of India. An absolute delight!",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Neha",
    text: "The flavors at Chef Delights transport me back to the streets of Mumbai. Each bite tells a story of spices and warmth. Truly an authentic culinary experience!",
    img: "https://picsum.photos/104/104",
  },
];

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

