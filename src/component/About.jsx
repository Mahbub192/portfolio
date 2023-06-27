import image from "../assets/Mahbub12.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const About = () => {
  return (
    <div className="mt-56 md:mt-10" id="about">
      <div className="flex flex-wrap mt-10 gap-8 md:gap-0 justify-center items-center">
        <div className="md:w-1/2">
          <img
            className=" h-96 w-full md:w-96 p-3 hover:p-0 rounded-full object-cover mx-auto border-2 border-[crimson]"
            src={image}
            alt=""
          />
        </div>
        <div data-aos="fade-right" data-aos-duration="1000" className="md:w-1/2 px-6">
          <h1 className="text-3xl font-bold ">
            About <span className="text-[crimson]">Me</span>
          </h1>
          <h3 className="text-2xl text-[crimson] pb-2">Developer</h3>
          <p className="leading-relaxed text-justify ">
            I am an experienced and passionate MEAN Stack Developer with
            expertise in both front-end and back-end development. With a strong
            foundation in HTML, CSS, JavaScript, and modern frameworks like
            React, I create user-friendly and visually appealing interfaces. On
            the back-end, I excel in utilizing the power of MongoDB, Express.js,
            and Node.js to build scalable and efficient web applications. My
            projects have ranged from small-scale applications to complex
            enterprise solutions, where I have implemented RESTful APIs, and
            integrated databases, and ensured seamless functionality. I am
            highly skilled in collaborating with cross-functional teams,
            contributing to brainstorming sessions, and resolving technical
            challenges. With a commitment to continuous learning, I stay updated
            on the latest industry trends and emerging technologies. I am
            dedicated to delivering high-quality solutions that exceed client
            expectations and contribute to the success of every project.
          </p>
        </div>
      </div>
      <div  className="mt-20 px-5 md:px-0">
        <h1 className="text-4xl font-bold">PERSONAL INFO</h1>
        <div className="flex-wrap md:flex  gap-6 md:gap-0 mt-10">
          <div data-aos="fade-right" className="flex md:w-1/2 flex-wrap leading-[3rem]">
            <div  className="lg:w-1/2">
              <p>
                <span className="text-slate-400">Name :</span>{" "}
                <span className="font-bold">Mahbub Ali</span>
              </p>
              <p>
                <span className="text-slate-400">Age:</span>{" "}
                <span className="font-bold">23</span>
              </p>
              <p>
                <span className="text-slate-400">Email:</span>{" "}
                <span className="font-bold">mahbubalid123@gmail.com</span>
              </p>
              <p>
                <span className="text-slate-400">Address:</span>{" "}
                <span className="font-bold">Mirput-10, Dhaka, Bangladesh</span>
              </p>
            </div>
            <div className=" lg:w-1/2">
              <p>
                <span className="text-slate-400">Phone Number :</span>{" "}
                <span className="font-bold">01600127050</span>{" "}
              </p>
              <p>
                <span className="text-slate-400">Skill :</span>{" "}
                <span className="font-bold">Full-Stack Developer</span>{" "}
              </p>
              <p>
                <span className="text-slate-400">Experience :</span>{" "}
                <span className="font-bold">1 Years</span>
              </p>
              <p>
                <span className="text-slate-400">Language :</span>{" "}
                <span className="font-bold">Bangla, English</span>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 grid md:grid-cols-2 gap-8">
            <div data-aos-duration="1000" data-aos="fade-up" className="bg-gray-900 px-8 text-[crimson] text-2xl font-bold flex flex-col justify-center shadow-xl py-5">
              <p>1+</p>
              <p>Years Of Experience</p>
            </div>
            <div data-aos-duration="1000" data-aos="fade-down" className="bg-gray-900 px-8 text-[crimson] text-2xl font-bold flex flex-col justify-center shadow-2xl py-5">
              <p>15+</p>
              <p>Project Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
