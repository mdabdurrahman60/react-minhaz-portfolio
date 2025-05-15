import { PROJECTS } from "../constants";
import {motion} from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}} className="my-20 text-center text-4xl">Projects</motion.h2>
        <div>{PROJECTS.map((project,index)=>(
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center items-center">
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}} className="w-full lg:w-1/4">
                <a target="_blank" href={project.href}>
                    <img 
                src={project.image} 
                width={180} 
                height={180} 
                alt="{project.title}" 
                className="mb-6 rounded"
                />
                </a>
                
                
                </motion.div>
                <div className="w-full max-w-xl lg:w-3/4">
                <a target="_blank" href={project.href}>
                    <motion.h6
                    whileInView={{opacity:1,x:0}}
                    initial = {{opacity:0 ,x : 100}}
                transition={{duration:0.5}} className="mb-2 font-semibold"><a >{project.title}</a></motion.h6>
                </a>
                    
                    <motion.p 
                    whileInView={{opacity:1,x:0}}
                    initial = {{opacity:0 ,x : 100}}
                    transition={{duration:0.5}} className="mb-4 text-neutral-400">{project.description}</motion.p>
                    {project.technologies.map((tech,index)=>(
                        <motion.span 
                        whileInView={{opacity:1,x:0}}
                        initial = {{opacity:0 ,x : 100}}
                        transition={{duration:0.5}}
                        key={index}
                        className="mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-900">{tech}</motion.span>
                    ))}
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Projects