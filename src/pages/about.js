import AnimatedText from "@/components/AnimatedText";
import Layouts from "@/components/Layouts";
import Head from "next/head";
import Image from "next/image";
import React, {useEffect, useRef} from "react";
import profilePic from "../../public/images/profile/developer-pic-5.jpg";
import { useSpring, useMotionValue, useInView } from "framer-motion";
import Skills from "@/components/Skills";
// import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";



const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000})
    const isInView = useInView(ref, {once:true});

useEffect(()=> {
   if(isInView){
    motionValue.set(value);
   }
},[isInView, value, motionValue])

useEffect(()=>{
    springValue.on("change", (latest)=>{
       if(ref.current && latest.toFixed() <= value){
        ref.current.textContent = latest.toFixed(0);
       }
    })
},[springValue, value])

    return <span ref={ref}></span>
}
const about = () => {
  return (
    <>
      <Head>
        <title>Ayush Negi|about page</title>
        {/* <meta name='description' content='some info'></meta> */}
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layouts className="pt-10">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="!text-7xl mb-16 lg:!text-7xl sm:!text-5xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="my-4 font-medium">
                Hi, I'm Ayush Negi skilled and passionate web developer with a solid background in creating dynamic and user-friendly web applications. Proficient in HTML, CSS, and JavaScript, I excel at building responsive and interactive interfaces. My expertise includes modern frameworks like React and backend technologies such as Node.js and Express.
              
              </p>
              <p className=" my-4 font-medium">
              Additionally, I am an experienced AWS practitioner, leveraging cloud services to enhance application performance, scalability, and security. My knowledge of AWS allows me to implement cloud-based solutions that optimize resource management and ensure high availability.
              </p>
              <p className="my-4 font-medium">
              With a strong eye for detail and a commitment to coding excellence, I am dedicated to developing innovative web solutions that enhance user experiences, drive engagement, and meet business objectives. Whether working independently or as part of a collaborative team, I strive to push the boundaries  and deliver top-notch results.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark drak:bg-light" />
              <Image
                src={profilePic}
                alt="ayush"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-6xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={5}/>+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">Projects completed</h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-6xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimatedNumbers value={1}/>+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">Years Of Experience</h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                {/* <span className="inline-block text-6xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">1+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm">Years Of Experience</h2> */}
              </div>
            </div>
            
          </div>
          <Skills />
        </Layouts>
        {/* <Experience /> */}
        <Education />
      </main>
    </>
  );
};
export default about;
