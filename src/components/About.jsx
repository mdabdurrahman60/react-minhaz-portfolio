import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import {motion} from "framer-motion";
import userIcon from "../assets/icon/user.png"
import gmailIcon from "../assets/icon/gmail.png"
import callIcon from "../assets/icon/call.png"
import locationIcon from "../assets/icon/location.png"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


const about = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1
         whileInView={{opacity:1,y: 0}}
         initial={{opacity: 0,y:100}}
         transition={{duration:1.5}}
          className="my-20 text-center text-4xl">Ab<span className="text-neutral-400">ou</span><span className="text-neutral-500">t</span>
            <span className="text-neutral-600"> M<span className="text-neutral-700">e</span></span>
        </motion.h1>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <motion.img 
                    whileInView={{opacity:1,x:0}}
                    initial = {{opacity:0 ,x : -100}}
                    transition={{duration:0.5}}
                    className="w-96 rounded-2xl" src={aboutImg} alt="about" />
                </div>
            </div>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial = {{opacity:0 ,x : 100}}
            transition={{duration:0.5}}
             className="w-full lg:w-1/2">
                    <div className="flex-col justify-center lg:justify-start">
                        <p className=" text-xl my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                        <ul>
                            <li className="flex items-center pb-5 ">
                                <img className="about-icon-size" src={userIcon} alt="..." />
                                <p className="ml-5 font-bold">Md Abdur Rahman Minhaz</p>
                            </li>
                            <li className="flex items-center pb-5">
                                <img className="about-icon-size" src={gmailIcon} alt="..." />
                                <p className="ml-5 font-bold">mdabdurrahmanminhaz@gmail.com</p>
                            </li>
                            <li className="flex items-center pb-5 ">
                                 <img className="about-icon-size" src={callIcon} alt="..." />
                                <p className="ml-5 font-bold"> 01819268649</p>
                            </li>
                            <li className="flex items-center pb-5">
                                 <img className="about-icon-size" src={locationIcon} alt="..." />
                                <p className="ml-5 font-bold">Dhaka,Bangladesh</p>
                            </li>
                            <li className="m-4 flex items-center justify-start gap-4 text-2xl pt-2">
                                <a className="mr-5" target="_blank" href="https://www.linkedin.com/in/abdur-rahman60/"><FaLinkedin /></a>
                                <a target="_blank" href="https://github.com/mdabdurrahman60"><FaGithub /></a> 
                            </li>
                        </ul>
                    </div>
                </motion.div>
        </div>
    </div>
  )
}

export default about