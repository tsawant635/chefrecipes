import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '@/config/firebase';

const Register = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photoURL: '',
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isSignup, setIsSignup] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setError(null);
    setSuccessMessage(null);

    // Validation
    if (!formData.name) {
      setError('Name is required');
      return;
    }

    if (!formData.email) {
      setError('Email is required');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }

    // Password confirmation
    if (!formData.password || !formData.photoURL) {
      setError('Password and Photo URL are required');
      return;
    }

    setIsSignup(true);

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Update user profile with name and photoURL
      await updateProfile(userCredential.user, {
        displayName: formData.name,
        photoURL: formData.photoURL,
      });

      // Set success message
      setSuccessMessage('Registration successful. Please go to the login page and log in.');

      // Redirect to login page after successful registration
      // router.push('/login');
    } catch (error) {
      setError(error.message);
    }
    finally {
      setIsSignup(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);

      localStorage.setItem('isUserSignedIn', true);
      const user = auth.currentUser;
      localStorage.setItem('displayName', user.displayName);
      localStorage.setItem('photoURL', user.photoURL);

      // Redirect to home or user details page after successful login
      router.push('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="photoURL"
                className="block text-sm font-medium text-gray-700"
              >
                Photo URL
              </label>
              <input
                type="text"
                id="photoURL"
                name="photoURL"
                value={formData.photoURL}
                onChange={handleChange}
                autoComplete="url"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              disabled={isSignup} // Disable the button while registering
            >
            {isSignup ? "Registering..." : "Register"}
            </button>
          </form>
          <p className="mt-4 text-sm">
            Already registered?{' '}
            <a href="/login" className="text-blue-500 hover:underline">
              Login here
            </a>
          </p>

          {/* Google Sign-In Button */}
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2"
            onClick={handleGoogleSignIn}
          >
            <img
              src={
                "https://res.cloudinary.com/dkjn33zdf/image/upload/v1702813195/transparent-google-suite-icon-google-icon-5f7f985ccd60e3.5687494416021975968412_jiayqe.png"
              }
              alt="Google Icon"
              className="w-6 h-6"
            />
            Sign up with Google
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
