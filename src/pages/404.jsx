// pages/404.js
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';

const NotFound = () => {
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-lg text-gray-700 mb-8">
          Oops! The page you are looking for might be in another kitchen.
        </p>
        <Link href="/">
          <p className="text-blue-500 hover:underline">Go back to home</p>
        </Link>
      </div>
     
    </div>
    <Footer />
    </>
  );
};

export default NotFound;
