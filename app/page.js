import Navbar from "./Navbar";
import VortexDemo from "./HeroSection";
import BackgroundBoxesDemo from "./AboutSection";
import ServicesPage from "./ServicesPage";
import RandomSection from "./RandomSection";
import ShootingStarsAndStarsBackgroundDemo from "./Footer";

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
      <RandomSection />  

      <ShootingStarsAndStarsBackgroundDemo />
      
    </div>
  );
}
