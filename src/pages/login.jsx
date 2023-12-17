
import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { signInWithEmailAndPassword, GithubAuthProvider ,signInWithPopup ,GoogleAuthProvider } from 'firebase/auth';
import { auth } from '@/config/firebase';
import { githubLogo, googleSign } from '@/data/images';

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.email || !formData.password) {
      setError('Email and Password are required');
      return;
    }
      setIsLoggingIn(true);

    try {
      // Sign in with email and password
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      // Redirect to home page after successful login
      localStorage.setItem('isUserSignedIn',true);
      const user = auth.currentUser;
      localStorage.setItem('displayName', user.displayName)
      localStorage.setItem('photoURL', user.photoURL)
 
      router.push('/');
    } catch (error) {
      setError(error.message);
    }finally {
        setIsLoggingIn(false);
      }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      localStorage.setItem('isUserSignedIn',true);
      const user = auth.currentUser;
      localStorage.setItem('displayName', user.displayName)
      localStorage.setItem('photoURL', user.photoURL)

 
      router.push('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGitHubSignIn = async () => {
    try {
      const provider = new GithubAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);  
      localStorage.setItem('isUserSignedIn', true);
      const user = auth.currentUser;
      localStorage.setItem('displayName', user.displayName);
      localStorage.setItem('photoURL', user.photoURL);
  
      router.push('/');
    } catch (error) {
      setError(error.message);
    }
  };
  

  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          disabled={isLoggingIn}
        >
          {isLoggingIn ? 'Logging in...' : 'Login'}
        </button>
        </form>
        <p className="mt-4 text-sm">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Register here
          </a>
        </p>

       <button
       className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center gap-2"
       onClick={handleGoogleSignIn}
     >
       <img src={googleSign} alt="Google Icon" className="w-6 h-6" />
       Sign In with Google
     </button>

     <button
     className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 flex items-center gap-2"
     onClick={handleGitHubSignIn}
   >
     <img src={githubLogo} alt="GitHub Icon" className="w-6 h-6" />
     Sign In with GitHub
   </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
