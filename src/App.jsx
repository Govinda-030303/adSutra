import React from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/main-sections/hero-section/HeroSection";
import AfterHeroCarousel from "./components/main-sections/crousel/afterHero/AfterHeroCrousel";
import TextSection from "./components/main-sections/text-section/TextSection";
import HowItWorks from "./components/main-sections/how-it-works/HowItWorks";
import WhyChooseUs from "./components/why-choose-us/WhyChooseUs";
import SocialMediaIcons from "./components/main-sections/social-media-icons/SocialMediaIcons";
import FeatureCard from "./components/main-sections/our-features/FeatureCard";
import FeatureSection from "./components/main-sections/our-features/FeatureSection";
import Footer from "./components/main-sections/footer/Footer";
import ContactForm from "./components/main-sections/contact-form/ContactForm";

const App = () => {
  return (
    <div className="">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/bgVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Navbar */}
        <div className="relative z-10">
          <Navbar />
        </div>

        {/* Hero Section */}
        <div className="relative z-5 h-full flex items-center justify-left pl-5">
          <HeroSection />
        </div>
      </div>

      <div className=" bg-[#0d031c]">
        {/* main section */}
        <AfterHeroCarousel />
        <TextSection />
        {/* <HowItWorks /> */}
        <WhyChooseUs />
        <SocialMediaIcons />

        <FeatureSection />
        <ContactForm />
        <Footer />
      </div>

    </div>
  );
};

export default App;
