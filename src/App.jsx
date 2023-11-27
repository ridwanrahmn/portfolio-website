import { useEffect } from "react";
import AOS from "aos";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import PortfolioPage from "./components/PortfolioPage";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <NavigationBar />
      <HomePage />
      <AboutPage />
      <PortfolioPage />
      <Footer />
    </>
  );
};

export default App;
