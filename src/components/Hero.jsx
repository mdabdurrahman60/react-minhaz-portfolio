import{HERO_CONTENT} from "../constants";
import profilePic from "../assets/AbdurRahman.png";
import {motion} from "framer-motion";
import resume from "../assets/AbdurRahmanResume.pdf"

const container = (delay) =>({
    hidden:{x:-100, opacity: 0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay}
    }

})
const Hero = () => {
  return  <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1
                    variants = {container(0)}
                    initial ="hidden"
                    animate = "visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                    Abdur Rahman
                </motion.h1>
                <motion.span
                 variants = {container(0.5)}
                 initial ="hidden"
                 animate = "visible"
                  className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                    Web Developer
                </motion.span>
                <motion.p
                 variants = {container(1)}
                 initial ="hidden"
                 animate = "visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter">
                    {HERO_CONTENT}
                </motion.p>
                <div className="py-5">
                <a target="_blank" href={resume} download>
                  <button className="btn btn-sm md:btn-lg md:font-bold md:text-2xl font-semibold text-[14px] btn-ghost border-0 rounded-md border-b-4 border-l-2 border-white text-gray text-lg font-Space_Grotesk">Download Resume</button>
                </a>
              </div>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center">
            <motion.img className="w-96 rounded-xl"
            initial= {{x:100,opacity:0}}
            animate={{x:0 , opacity:1}}
            transition={{duration: 1,delay: 0.7}}
            src={profilePic} alt="Abdur Rahman" />
        </div>
        </div>
    </div>
  </div>
  
}

export default Hero