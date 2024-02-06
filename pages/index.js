import Head from "next/head";
import {
  AiOutlineGithub,
  AiTwotoneMail,
  AiOutlineMail

} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import sebAvatar from "../public/avatarS.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        {/* <section className="min-h-screen"> */}
          <nav className="sticky top-0 z-50 py-10 mb-12 flex justify-between bg-white dark:bg-gray-900 px-2 md:px-20 lg:px-0 dark:text-white">
            <h1 className="font-burtons text-xl">SebastianDev</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl mr-10"
                />
              </li>
              <li>
    <a className="font-burtons text-xl mr-4 hover:text-teal-600" href="#home">Home</a>
            </li>
              <li>
    <a className="font-burtons text-xl mr-4 hover:text-teal-600" href="#projects">Projects</a>
            </li>
            <li>
    <a className="font-burtons text-xl hover:text-teal-600" href="#contact">Contact</a>
            </li>
            </ul>
          </nav>
          
    <section id="home" className="text-center p-10 py-10">
    <div className="flex flex-col md:flex-row items-center justify-center text-left">
      <div className="mb-6 md:mb-0 md:mr-8">
    <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
      Sebastian Buritica
    </h2>
    <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
    Full stack developer.
    </h3>
    <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:mx-0 md:text-xl">
    Full-stack developer specializing in responsive websites, efficient back-end solutions, and mobile applications. Dedicated to delivering high-quality code and user-centered design.
    </p>
    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
      <AiOutlineGithub />
    </div>
    </div>
    <div className="avatar-bounce w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full overflow-hidden relative">
        <Image src={sebAvatar} layout="fill" objectFit="cover" />
      </div>
    </div>
  </section>

        {/* </section> */}
        <section id="projects" className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I empower clients with tailored web and mobile solutions, ranging from static sites to dynamic, interactive platforms. Leveraging modern frameworks like React, Astro, and Next.js, I craft seamless experiences in JavaScript/TypeScript. My backend expertise spans RESTful API development with Node.js, Express.js, and Django. Plus, I deliver cross-platform mobile apps with React Native for both iOS and Android.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              My services span brand design, software development, and education, each infused with a commitment to quality and innovation.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
          </div>
        </section>
  <section id="contact" className="text-left py-10">
    <h2 className="text-3xl py-1 dark:text-white">Contact</h2>
    <p className="text-lg py-2 dark:text-white">
    Hey there! just hit me up so that we can start chatting, no pressure at all 👋
    </p>
    <div className="flex items-center gap-4 mt-3">
      <span className="inline-flex items-center justify-center p-2 bg-gray-200 rounded-full">
      <AiOutlineMail className="text-4xl text-teal-600 dark:text-gray-400" />
      </span>
      <div className="flex flex-col">
        <p className="text-lg dark:text-gray-200">Email</p>
        <p className="text-md dark:text-gray-200">sebastianb.devv@gmail.com</p>
      </div>
      </div>
  </section>
  <footer className="py-10">
  <div className="border-t border-gray-300 dark:border-gray-700 pt-8 flex justify-between items-center">
    <p className="text-md dark:text-gray-200">Copyright © 2024. All rights are reserved</p>
    <div className="flex gap-4">
      <AiOutlineGithub className="text-3xl text-gray-600 dark:text-gray-400" />
    </div>
  </div>
</footer>


      </main>
    </div>
  );
}
