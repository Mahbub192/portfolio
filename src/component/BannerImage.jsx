import BlockRevealAnimation from "react-block-reveal-animation";
import { TypeAnimation } from "react-type-animation";
import { Tilt } from "react-tilt";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import image from "../assets/Mahbub10.png";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const BannerImage = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
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
          color="#ff0000"
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
              color: "crimson",
            }}
            repeat={Infinity}
          />
        </BlockRevealAnimation>
        <div className="flex justify-between w-40 my-5">
          <p className="text-3xl border-4 border-[crimson] rounded-full">
            <Link to={`https://www.facebook.com/MahbubAli192`}><FaFacebook /></Link>
          </p>
          <div className="text-3xl border-4 border-[crimson] rounded-full">
            <Link to={`https://github.com/Mahbub192`}><FaGithub /></Link>
          </div>
          <p className="text-3xl border-4 border-[crimson] rounded-full">
            <Link to={``}><FaLinkedinIn /></Link>
          </p>
        </div>
        <div className="flex gap-6">
          <button onClick={handleCV} className="bg-[crimson] text-[#fff] px-5 py-3 rounded-lg text-lg font-bold">
            Download CV
          </button>
          <button onClick={handleResume} className="bg-[crimson] text-[#fff] px-5 py-3 rounded-lg text-lg font-bold">
            Download Resume
          </button>
        </div>
      </div>
      <div  className="md:w-1/2 mt-10 md:mt-0">
        <div >
          <Tilt options={defaultOptions}>
            <img
              className="md:h-4/6 md:w-4/6 border-2 border-[crimson] mx-auto"
              style={{ borderRadius: "50px 250px" }}
              src={image}
              alt=""
            />
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
