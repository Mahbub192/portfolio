import About from "./component/About";
import BannerImage from "./component/BannerImage";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import MySkill from "./component/MySkill";
import NavBar from "./component/NavBar";
import Project from "./component/Project";


const App = () => {
  return (
    <div className=" md:container md:mx-auto">
      <NavBar></NavBar>
      <BannerImage></BannerImage>
      <About></About>
      <MySkill/>
      <Project />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;