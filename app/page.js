import Navbar from "./Navbar";
import VortexDemo from "./HeroSection";
import BackgroundBoxesDemo from "./AboutSection";
import ServicesPage from "./ServicesPage";
import FeaturesSectionDemo from "./GlobeNew";
import RandomSection from "./RandomSection";
import ShootingStarsAndStarsBackgroundDemo from "./Footer";
import './css/UpperRandom.css'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="hero-section mt-20">
      <VortexDemo />
      </div>
      <div className="about-section mt-20">
      <BackgroundBoxesDemo />
      </div>
      <ServicesPage />
      <div className="content w-1/2 inline-block upper-random-bg px-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic possimus ipsam ullam voluptates animi itaque quae, minus sed iste, architecto, ad explicabo a pariatur! Beatae sapiente delectus quas ad quis.
      </div>
      <FeaturesSectionDemo />
      <RandomSection />  
      <ShootingStarsAndStarsBackgroundDemo />
      
    </div>
  );
}
