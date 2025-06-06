import {RiReactjsLine} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import {SiMongodb} from "react-icons/si";
import {SiExpress } from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";
import {BiLogoDjango} from "react-icons/bi";
import {motion} from "framer-motion";
import chatgptimg from "../assets/icons/chatgpt.png"
import framermotionimg from "../assets/icons/FramerMotion.png"
import githubimg from "../assets/icons/github.png"
import replitimg from "../assets/icons/replit.png"
import vsimg from "../assets/icons/visualstudio.png"
import deepseekimg from "../assets/icons/deepseek.png"

const iconVariants = (duration)=>({
    initial: {y: -10},
    animate: {
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        },
    }
})
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
            whileInView={{opacity:1,y: 0}}
            initial={{opacity: 0,y:-100}}
            transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies
        </motion.h2>
        <div className="flex flex-wrap justify-center  inline-block">
        <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className="flex flex-wrap mr-3 items-center justify-end gap-4">
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate= "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate= "animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-7xl "/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate= "animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>
            
            
           
        </motion.div>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-start gap-4">
            <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate= "animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className="text-7xl text-yellow-600"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate= "animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate= "animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoDjango className="text-7xl text-neutral-400"/>
            </motion.div>
            
            
           
        </motion.div>
        </div>
        <br />
        <div className="flex flex-wrap justify-center  inline-block">
        <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className="flex flex-wrap mr-3 items-center justify-end gap-4">
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate= "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className="icon-size" src={chatgptimg} alt="" />
            </motion.div>
            <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate= "animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className="icon-size" src={framermotionimg} alt="" />
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate= "animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
               <img className="icon-size" src={githubimg} alt="" />
            </motion.div>
            
            
           
        </motion.div>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-start gap-4">
            <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate= "animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className="icon-size" src={replitimg} alt="" />
            </motion.div>
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate= "animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
               <img className="icon-size" src={vsimg} alt="" />
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate= "animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className="icon-size" src={deepseekimg} alt="" />
            </motion.div>
            
            
           
        </motion.div>
        </div>
    </div>
  )
}

export default Technologies