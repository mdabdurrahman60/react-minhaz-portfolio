import Container from "../utils/Container";
import {motion} from "framer-motion";
const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2
         whileInView={{opacity:1,y: 0}}
         initial={{opacity: 0,y:100}}
         transition={{duration:1.5}} className="my-20 text-center text-4xl">Experience</motion.h2>
        <Container>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical lg:pb-16 md:pb-12 pb-6">
          <li>
            <div className="timeline-middle">
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="timeline-start md:text-end mb-10 space-y-2.5 max-w-[450px]"
            >
              <time className="font-mono italic text-[#B1B1A2]">
                2022-Present
              </time>
              <div className="text-[20px] font-bold text-white">
                Web Development
              </div>
              <div className="lg:text-2xl md:text-[18px] text-[#B1B1A2] font-gray">
                2 years + self learning Experience
              </div>
            </div>
          </li>
        </ul>
        </Container>
        <p className="text-center">I am working on it...</p>
    </div>
  )
}

export default Experience
