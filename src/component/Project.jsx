import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import image1 from "../assets/project1.png";
import image2 from "../assets/project2.png";
import image3 from "../assets/project3.png";
import image4 from "../assets/progect4.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const Project = () => {
  return (
    <div id="project">
      <h1 className="text-5xl font-bold text-center my-20">
        My <span className="text-[crimson]">Project</span>
      </h1>
      <div className="grid md:grid-cols-4 gap-3 mb-20">
        <div  className="overflow-hidden relative transition duration-200  rounded-xl transform hover:-translate-y-1">
          <div className="object-contain ">
            <img className="w-full h-72" src={image1} alt="" />
          </div>
          <div className="bg-gray-900 bg-opacity-80 opacity-0 duration-1000 p-5 rounded-xl hover:opacity-100 text-gray-300 absolute inset-0 flex flex-col justify-center ">
            <p className="text-xl font-bold py-2">Project Name: Yoga & Meditation</p>
            <p>Yoga and meditation cultivate harmony, tranquility, and self-awareness, fostering overall well-being and a profound sense of inner peace.</p>
            <Link to={`https://summer-camp-e3153.web.app/`} className="py-2 font-bold flex gap-3 items-center">Link: <span className="text-red-500 text-2xl"><FaExternalLinkAlt/></span></Link>
          </div>
        </div>
        <div className="overflow-hidden relative transition duration-200  rounded-xl transform hover:-translate-y-1">
          <div className="object-contain ">
            <img className="w-full h-72" src={image2} alt="" />
          </div>
          <div className="bg-gray-900 bg-opacity-80 opacity-0 duration-1000 p-5 rounded-xl hover:opacity-100 text-gray-300 absolute inset-0 flex flex-col justify-center ">
            <p className="text-xl font-bold py-2">Project Name: BrainSprouts</p>
            <p>A kids toy shop is a store that specializes in selling toys and games designed specifically for children.</p>
            <Link to={`https://toy-trove.web.app/`} className="py-2 font-bold flex gap-3 items-center">Link: <span className="text-red-500 text-2xl"><FaExternalLinkAlt/></span></Link>
          </div>
        </div>
        <div className="overflow-hidden relative transition duration-200  rounded-xl transform hover:-translate-y-1">
          <div className="object-contain ">
            <img className="w-full h-72" src={image3} alt="" />
          </div>
          <div className="bg-gray-900 bg-opacity-80 opacity-0 duration-1000 p-5 rounded-xl hover:opacity-100 text-gray-300 absolute inset-0 flex flex-col justify-center ">
            <p className="text-xl font-bold py-2">Project Name: Cooking Chef</p>
            <p>This website is a culinary treasure trove! With a vast array of recipes, clear instructions, and stunning visuals, it&apos;s a food lover&apos;s dream come true. The search function simplifies finding the ideal recipe, making cooking an absolute delight. Prepare to embark on a gastronomic adventure like no other!</p>
            <Link to={`https://cooking-chef-aef2c.web.app/`} className="py-2 font-bold flex gap-3 items-center">Link: <span className="text-red-500 text-2xl"><FaExternalLinkAlt/></span></Link>
          </div>
        </div>
        <div className="overflow-hidden relative transition duration-200  rounded-xl transform hover:-translate-y-1">
          <div className="object-contain ">
            <img className="w-full h-72" src={image4} alt="" />
          </div>
          <div className="bg-gray-900 bg-opacity-80 opacity-0 duration-1000 p-5 rounded-xl hover:opacity-100 text-gray-300 absolute inset-0 flex flex-col justify-center ">
            <p className="text-xl font-bold py-2">Project Name: Top 6 Job For Developer</p>
            <p>This website is a game-changer for job seekers. With an extensive selection of listings and intuitive navigation, it&apos;s a go-to resource for finding career opportunities. Say hello to your dream job!</p>
            <Link to={`https://tranquil-halva-a7f1c9.netlify.app/`} className="py-2 font-bold flex gap-3 items-center">Link: <span className="text-red-500 text-2xl"><FaExternalLinkAlt/></span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
