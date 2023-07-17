import { Link } from "react-router-dom";
import image1 from "../assets/project1.png";
import image2 from "../assets/project2.png";
import image3 from "../assets/project3.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Project = () => {
  return (
    <div id="project">
      <h1 className="text-5xl font-bold text-center my-20">
        My <span className="text-accent">Project</span>
      </h1>
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="card md:w-96 bg-base-100 shadow-xl border-2 border-accent">
          <figure>
          <img className="w-full h-72" src={image1} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Project Name: Yoga & Meditation</h2>
            <p> Yoga and meditation cultivate harmony, tranquility, and
              self-awareness, fostering overall well-being and a profound sense
              of inner peace.</p>
            <div className="card-actions justify-end">
            <Link
              to={`https://yoga-meditation-ae9ff.web.app/`}
              className="py-2 font-bold flex gap-3 items-center"
            >
              <button className="btn btn-accent">View Now</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card md:w-96 bg-base-100 shadow-xl border-2 border-accent">
          <figure>
          <img className="w-full h-72" src={image2} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Project Name: Brain Sprouts</h2>
            <p> A kids toy shop is a store that specializes in selling toys and
              games designed specifically for children.</p>
            <div className="card-actions justify-end">
            <Link
              to={`https://toy-trove.web.app/`}
              className="py-2 font-bold flex gap-3 items-center"
            >
              <button className="btn btn-accent">View Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card md:w-96 bg-base-100 shadow-xl border-2 border-accent">
          <figure>
          <img className="w-full h-72" src={image3} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Project Name: Cooking Chef</h2>
            <p> This website is a culinary treasure trove! With a vast array of
              recipes, clear instructions, and stunning visuals, it&apos;s a
              food lover&apos;s dream come true. The search function simplifies...</p>
            <div className="card-actions justify-end">
            <Link
              to={`https://cooking-chef-83d66.web.app/`}
              className="py-2 font-bold flex gap-3 items-center"
            >
              <button className="btn btn-accent">View Now</button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="card md:w-96 bg-base-100 shadow-xl border-2 border-accent">
          <figure>
          <img className="w-full h-72" src={image4} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> Project Name: Top 6 Job For Developer</h2>
            <p> This website is a game-changer for job seekers. With an extensive
              selection of listings and intuitive navigation, it&apos;s a go-to
              resource for finding career opportunities. Say hello to your dream
              job!</p>
            <div className="card-actions justify-end">
            <Link
              to={`https://tranquil-halva-a7f1c9.netlify.app/`}
              className="py-2 font-bold flex gap-3 items-center"
            >
              <button className="btn btn-accent">View Now</button>
              </Link>
            </div>
          </div>
        </div> */}
        
      </div>
    </div>
  );
};

export default Project;
