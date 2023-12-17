// pages/about.js
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
