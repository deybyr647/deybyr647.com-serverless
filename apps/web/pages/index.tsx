import type { NextPage } from "next";
import Navigation from "../components/Navigation";
import Metadata from "../components/Metadata";
import Footer from "../components/Footer";
import AboutSection from "../components/sections/About";
import ProjectSection from "../components/sections/projects/Projects";
import HeaderSection from "../components/sections/Header";
import Education from "../components/sections/Education";

const Home: NextPage = () => {
  return (
    <>
      <Metadata />
      <Navigation />
      <HeaderSection />
      <AboutSection />
      <Education />
      <ProjectSection />
      <Footer />
    </>
  );
};

export default Home;
