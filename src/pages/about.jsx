import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <img
            src="https://res.cloudinary.com/dkjn33zdf/image/upload/v1702822112/hotel-sandy-s-tower_ota2un.jpg"
            alt="Chef"
            className="rounded w-240 h-140 mx-auto mb-4"
          />
          <p className="text-lg text-gray-700">
            Meet our talented Chefs whose passion for culinary arts has brought
            delightful flavors to our kitchen. With years of experience and a
            commitment to quality, Chef crafts exquisite dishes that leave a
            lasting impression on every plate.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
