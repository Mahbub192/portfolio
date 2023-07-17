import { FaGraduationCap } from "react-icons/fa";
import pythonImage from "../assets/PythonLogo.png";
import tailwindImage from "../assets/Tailwind-img.png";
import viteImage from "../assets/Vitejslogo.png";
import bootstrapImage from "../assets/bootstrapImage.png";
import cImage from "../assets/cImage.jpg";
import cssImage from "../assets/cssImage.png";
import expressImage from "../assets/expressImage.jpg";
import figmaImage from "../assets/figmaImage.png";
import firebaseImage from "../assets/firebaseImage.jpg";
import htmlImage from "../assets/htmlImage.png";
import javaImage from "../assets/javaImage.png";
import jsImage from "../assets/jsImage.png";
import mongodbImage from "../assets/mongodbImage.png";
import mysqualImage from "../assets/mysqualImage.jpg";
import nextImage from "../assets/nextjsImage.png";
import nodeImage from "../assets/nodejsImage.jpg";
import reactImage from "../assets/react.svg";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const MySkill = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-20" id="skill">
        My <span className="text-accent">Skills</span>
      </h1>
      <div data-aos-duration="2000" data-aos="zoom-out-left" className="grid md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        <div className="bg-gray-900 flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <img className="h-20 w-16 pt-3" src={htmlImage} alt="" />
          <p className="text-2xl font-bold py-3">HTML</p>
        </div>
        <div className="bg-gray-900 flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <img className="h-20 w-16 pt-3" src={cssImage} alt="" />
          <p className="text-2xl font-bold py-3">CSS</p>
        </div>
        <div className="bg-gray-900 flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <img className="h-32 w-24" src={cImage} alt="" />
          <p className="text-2xl font-bold py-3">C Programming</p>
        </div>
        <div className="bg-gray-900 flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <img className="h-20 w-16 pt-3" src={jsImage} alt="" />
          <p className="text-2xl font-bold py-3">JavaScript</p>
        </div>
        <div className="bg-gray-900 flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <img className="h-20 w-16 pt-3" src={javaImage} alt="" />
          <p className="text-2xl font-bold py-3">Java</p>
        </div>
        <div className="bg-gray-900 flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <img className="h-20 w-16 pt-3" src={figmaImage} alt="" />
          <p className="text-2xl font-bold py-3">Figma</p>
        </div>
        <div className="bg-gray-900 flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <img className="h-20 w-16 pt-3" src={firebaseImage} alt="" />
          <p className="text-2xl font-bold py-3">Firebase</p>
        </div>
        <div className="bg-gray-900 flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <img className="h-20 w-16 pt-3" src={reactImage} alt="" />
          <p className="text-2xl font-bold py-3">React Js</p>
        </div>
        <div className="bg-gray-900 flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <img className="h-20 w-16 pt-3" src={viteImage} alt="" />
          <p className="text-2xl font-bold py-3">Vite</p>
        </div>
        <div className="bg-gray-900 flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <img className="h-20 w-16 pt-3" src={tailwindImage} alt="" />
          <p className="text-2xl font-bold py-3">Tailwind CSS</p>
        </div>
        <div className="bg-gray-900 flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <img className="h-20 w-16 pt-3" src={nodeImage} alt="" />
          <p className="text-2xl font-bold py-3">Node Js</p>
        </div>
        <div className="bg-gray-900 flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <img className="h-20 w-16 pt-3" src={nextImage} alt="" />
          <p className="text-2xl font-bold py-3">Next Js</p>
        </div>
        <div className="bg-gray-900 flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <img className="h-20 w-16 pt-3" src={mysqualImage} alt="" />
          <p className="text-2xl font-bold py-3">MySQL</p>
        </div>
        <div className="bg-gray-900 flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <img className="h-20 w-16 pt-3" src={mongodbImage} alt="" />
          <p className="text-2xl font-bold py-3">MongoDB</p>
        </div>
        <div className="bg-gray-900 flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <img className="h-24 w-34" src={expressImage} alt="" />
          <p className="text-2xl font-bold py-3">Express Js</p>
        </div>
        <div className="bg-gray-900 flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <img className="h-20 w-16 pt-3" src={bootstrapImage} alt="" />
          <p className="text-2xl font-bold py-3">Bootstrap </p>
        </div>
        <div className="bg-gray-900 flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <img className="h-20 w-16 pt-3" src={pythonImage} alt="" />
          <p className="text-2xl font-bold py-3">Python </p>
        </div>
      </div>
      <div className="my-20 px-5 md:px-5">
        <h2 className="text-center font-bold text-5xl">
          My <span className="text-accent">Education</span>
        </h2>
        <div className="flex flex-wrap relative">
          <div   className="md:w-1/2 flex flex-col  lg:flex-row mt-10">
            <p className="bg-[crimson] absolute px-3 py-3 rounded-full text-3xl"><FaGraduationCap/></p>
            <div className="  divider lg:divider-horizontal"></div>
            <div>
              <h1 className="bg-gray-900 px-5 py-3 rounded-2xl w-36">
                2019 - 2023
              </h1>
              <p className="pl-1 pt-2">University</p>
              <h1 className="text-xl py-2">Green University Of Bangladesh</h1>
              <p className="text-lg pb-2">
                Bachelor of Science in Computer Science and Engineering (B.Sc in
                CSE)
              </p>
              <p>CGPA 3.57 out of 4</p>
            </div>
          </div>
          <div  className=" relative md:w-1/2 flex flex-col  lg:flex-row mt-10">
          <p className="bg-[crimson] absolute px-3 py-3 rounded-full text-3xl"><FaGraduationCap/></p>
            <div className="divider lg:divider-horizontal"></div>
            <div>
              <h1 className="bg-gray-900 px-5 py-3 rounded-2xl w-36">
                2022 - 2023
              </h1>
              <p className="pl-1 pt-2">Course</p>
              <h1 className="text-xl py-2">Programming Hero</h1>
              <p className="text-lg pb-2">
              Complete Web Development Course With Jhankar Mahbub
              </p>
              <p>Avg Mark: 59.58 out of 60</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
