import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const nevItem = (
    <>
      <li>
        <HashLink to={`#home`}>Home</HashLink>
      </li>
      <li>
        <HashLink to={`#about`}>About</HashLink>
      </li>
      <li>
        <HashLink to={`#skill`}>Skill</HashLink>
      </li>
      <li>
        <HashLink to={`#project`}>Project</HashLink>
      </li>
      {/* <li>
        <a>Blog</a>
      </li> */}
      <li>
        <HashLink to={`#contact`}>Contact</HashLink>
      </li>

    </>
  );
  return (
    <div className="navbar " id="home">
      <div className="navbar-start w-[1014px]">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 navbar-end"
          >
            {nevItem}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Portfolio</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nevItem}</ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Get started</a>
      </div> */}
    </div>
  );
};

export default NavBar;
