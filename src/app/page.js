"use client";

import { useState, useEffect } from 'react';

import Header from "../components/header";
import Herosection from "../components/herosection";
import Section1 from "../components/AboutUsComponents/section1";
import Section2 from "../components/AboutUsComponents/section2";
import Services from "../components/ServicesComponents/prices";
import Gallery from "../components/GalleryComponents/section";
import Footer from "../components/Footer/footer";
import Contact from "../components/ContactComponents/contactus";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // Show spinner for 1 second

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner" />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Herosection />
      <Section1 />
      <Section2 />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

