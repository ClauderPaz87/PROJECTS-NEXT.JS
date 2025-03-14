import NavBar from "@/components/NavBar";
import MyImage from "@/components/Image";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Particulas from "@/components/Particulas";

export default function Home() {
  return (
    <div>
      <Particulas/>
      <NavBar/>
      <MyImage/>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </div>
  );
}
