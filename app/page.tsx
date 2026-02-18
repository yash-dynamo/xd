import Navbar from "./components/Navbar";
import Ticker from "./components/Ticker";
import HeroSection from "./components/HeroSection";
import BentoSection from "./components/BentoSection";
import SeductiveSection from "./components/SeductiveSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <main style={{ background: "#07000d", minHeight: "100vh" }}>
        <Navbar />
        <Ticker />
        <HeroSection />
        <BentoSection />
        <SeductiveSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
