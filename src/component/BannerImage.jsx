import BlockRevealAnimation from "react-block-reveal-animation";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import image from "../assets/123.png";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const BannerImage = () => {
  const handleResume = ()=>{
    window.open("https://drive.google.com/u/1/uc?id=1xaKHS0_fQEjDIdqLM4ykLkKJO7A10Fv4&export=download","_parent")
  }
  const handleCV = ()=>{
    window.open("https://drive.google.com/u/1/uc?id=1tpyr525-rnCrP9ySOJOEHODe6_eLjZaw&export=download","_parent")
  }
  return (
    <div className="flex flex-wrap h-screen items-center ">
      <div className="md:w-1/2">
        <BlockRevealAnimation
          className="myCustomClassName text-3xl font-bold pb-5"
          delay={1}
          duration={1}
        >
          Hello, it&apos;s me
        </BlockRevealAnimation>
        <br />
        <BlockRevealAnimation
          className="myCustomClassName text-5xl font-bold pb-3"
          delay={1}
          duration={2}
          color="#fff"
        >
          Mahbub Ali
        </BlockRevealAnimation>
        <br />
        <BlockRevealAnimation
          className="myCustomClassName font-bold "
          delay={1}
          duration={3}
          color="#fff"
        >
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "And I'am a Frontend Developer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "And I'am a Full Stack Developer",
              1000,
              "And I'am a MERN Stack Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "2em",
              display: "inline-block",
              color: "accent",
            }}
            repeat={Infinity}
          />
        </BlockRevealAnimation>
        <div className="flex justify-between w-40 my-5">
          <p className="text-3xl border-4 border-accent rounded-full">
            <Link to={`https://www.facebook.com/MahbubAli192`}><FaFacebook /></Link>
          </p>
          <div className="text-3xl border-4 border-accent rounded-full">
            <Link to={`https://github.com/Mahbub192`}><FaGithub /></Link>
          </div>
          <p className="text-3xl border-4 border-accent rounded-full">
            <Link to={``}><FaLinkedinIn /></Link>
          </p>
        </div>
        <div className="flex gap-6">
          <button onClick={handleCV} className="bg-accent text-[#fff] px-5 py-3 rounded-lg text-lg font-bold">
            Download CV
          </button>
          <button onClick={handleResume} className="bg-accent text-[#fff] px-5 py-3 rounded-lg text-lg font-bold">
            Download Resume
          </button>
        </div>
      </div>
      <div  className="md:w-1/2 mt-10 md:mt-0">
        <div className="">
          <img  src={image} alt="" className="rounded-full border-2 border-accent p-1 w-96 h-96 md:w-[600px] md:h-[600px] object-cover mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
