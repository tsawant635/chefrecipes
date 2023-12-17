// pages/UserDetails.js
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { useEffect, useState } from 'react';

const UserDetails = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("John Doe");
  const [userPhotoURL, setUserPhotoURL] = useState(
    "https://res.cloudinary.com/dkjn33zdf/image/upload/v1702791448/Screenshot_2023-12-17_110608_iuywiq.png"
  );

  useEffect(() => {
    // Check if the user is signed in by checking localStorage
    const signedIn = localStorage.getItem('isUserSignedIn');
    if (!signedIn) {
      // If not signed in, redirect to login page
      router.push('/login');
    } else {
      // Get user details from localStorage
      const displayName = localStorage.getItem('displayName') || 'John Doe';
      setUserName(displayName);
      const photoURL = localStorage.getItem('photoURL') || "https://res.cloudinary.com/dkjn33zdf/image/upload/v1702791448/Screenshot_2023-12-17_110608_iuywiq.png";
      setUserPhotoURL(photoURL);
    }
  }, []);

  const handleLogout = () => {
    // Clear all localStorage items
    localStorage.clear();

    // Redirect to login page after successful logout
    router.push('/login');
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">User Details</h2>
          <div className="mb-4">
            <img
              src={userPhotoURL}
              alt="Profile"
              className="w-20 h-20 rounded-full mb-2"
            />
            <p className="text-lg font-semibold">{userName}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserDetails;
