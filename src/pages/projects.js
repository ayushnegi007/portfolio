import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/icons";
import Layouts from "@/components/Layouts";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import project1 from "../../public/images/projects/menucard.png";
import project2 from "../../public/images/projects/drumkit.png";
import project3 from "../../public/images/projects/tictac.png";
import project4 from "../../public/images/projects/stopwatch.png";
import project5 from "../../public/images/projects/weather.png";

import TransitionEffect from "@/components/TransitionEffect";
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ">

    
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image src={img} alt={title} className="w-full h-auto"
        priority
        sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 50vw" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">{type} </span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />{" "}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4  bg-dark text-light p-2 px-6 text-lg font-semibold rounded dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>Ayush Negi|Projects page</title>
        <meta name="description" content="some info"></meta>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layouts className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="!text-7xl mb-16 sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Hotel Menu Card"
                summary="A hotel menu website made using React provides an interactive and dynamic platform for users to explore the hotel's food and beverage offerings. Utilizing React, a popular JavaScript library for building user interfaces, the website ensures a seamless and responsive experience"
                img={project1}
                github="https://github.com/ayushnegi007/MENU-CARD-REACT"
                link="https://github.com/ayushnegi007/MENU-CARD-REACT"
                type="Featured Project"
              />
            </div>
           
            <div className="col-span-12"><FeaturedProject
                title="Drum Kit Music"
                summary="A drum kit website made using JavaScript provides an engaging platform for users to play virtual drums directly in their web browser "
                img={project2}
                github="https://github.com/ayushnegi007/Drum-Kit-Completed"
                link="https://github.com/ayushnegi007/Drum-Kit-Completed"
                type="Featured Project"
              /></div>
           <div className="col-span-12"><FeaturedProject
                title="Tic Tac Toe Game"
                summary="
A Tic Tac Toe game made using JavaScript offers a simple yet engaging way for users to play the classic game directly in their web browser."
                img={project3}
                github="https://github.com/ayushnegi007/PRODIGY_WD_2--Tic-Tac-Toe-"
                link="https://github.com/ayushnegi007/PRODIGY_WD_2--Tic-Tac-Toe-"
                type="Featured Project"
              /></div>
              <div className="col-span-12"><FeaturedProject
                title="Stopwatch"
                summary="A stopwatch made using JavaScript is a simple yet functional web application that allows users to measure time intervals with precision. Has Start/Stop Functionality where users can start and stop the timer with the click of a button"
                img={project4}
                github="https://github.com/ayushnegi007/prodigy_wd_1-stopwatch"
                link="https://github.com/ayushnegi007/prodigy_wd_1-stopwatch"
                type="Featured Project"
              /></div>
               <div className="col-span-12"><FeaturedProject
                title="Weather APP"
                summary="A weather application using JavaScript leverages HTML, CSS, and JavaScript to provide real-time weather updates. It integrates with weather APIs like OpenWeatherMap to fetch data based on user input or geolocation. Users can enter a city name to get details such as temperature, humidity, and weather conditions. JavaScript handles API requests and dynamically updates the UI with the fetched data. "
                img={project5}
                github="https://github.com/ayushnegi007/Prodigy-WD-3-weatherAPP"
                link="https://github.com/ayushnegi007/Prodigy-WD-3-weatherAPP"
                type="Featured Project"
              /></div>
          </div>
        </Layouts>
      </main>
    </>
  );
};

export default projects;
