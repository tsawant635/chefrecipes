import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import ChefSection from "@/components/ChefSection/ChefSection.jsx";
import AppStore from "@/components/AppStore/AppStore.jsx";

import Testimonial from "@/components/Testimonial/Testimonial.jsx";
import Footer from "@/components/Footer/Footer.jsx";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <ChefSection />
      {/* <CoverBanner /> */}
      <AppStore />
      <Testimonial />
      <Footer />

    </div>
  )
}
