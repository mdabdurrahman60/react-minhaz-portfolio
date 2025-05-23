import logo from "../assets/AbdurRahmanLogo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


const Navbar = () => {
  return  <nav className="flex items-center justify-between py-6">
    <div className=" flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/abdur-rahman60/"><FaLinkedin /></a>
        <a href="https://github.com/mdabdurrahman60"><FaGithub /></a> 
    </div>
  </nav>;
  
}

export default Navbar