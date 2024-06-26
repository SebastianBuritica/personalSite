import Head from "next/head";
import {
  AiOutlineGithub,
  AiTwotoneMail,
  AiOutlineMail

} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsX } from 'react-icons/bs';
import Modal from 'react-modal';
import { useState } from "react";
import sebAvatar from "../public/avatarS.png";
import Image from "next/image";
import web1 from "../public/cryptoVerse.png";
import web2 from "../public/ecommerce.png";
import web3 from "../public/lendingpoint.png";
import web4 from "../public/gridTxt.jpg";

Modal.setAppElement('#__next');

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState({});

  const projects = [
    { name: 'Cryptoverse', src: web1, description: 'Full responsive project created with React.js using redux as state library tool in order to handle all of the different API calls and render the data in different ways including charts and dashboards.' },
    { name: 'Ecommerce', src: web2, description: 'Full stack ecommerce application created with technologies such as next.js, react.js, sanity and usage of libraries created for payments such as stripe, fully dinamic, modern and responsive..' },
    { name: 'LendingPoint', src: web3, description: 'Fintech application in which I worked along with other front end developers, backend developers, designers, QAs, scrum masters and tech leads, I worked in both the website application and the mobile application, the apps were created using technologies such as react, react native, redux, tailwind, axios, among others and the purpose of the app was to provide financial services to lending point clients.' },
    { name: 'Testimonies', src: web4, description: 'Static project with testimonies showing in display grid CSS abilities to contain and organize all of the different testimonies.' },
  ];

  function openModal(project) {
    setCurrentProject(project);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>SebastianDev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 sm:px-10 md:px-20 lg:px-40">
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
      Sebastian Benitez
    </h2>
    <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
    Full stack developer.
    </h3>
    <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:mx-0 md:text-xl">
    Full-stack developer specializing in responsive websites, efficient back-end solutions, and mobile applications. Dedicated to delivering high-quality code and user-centered design.
    </p>
    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://github.com/SebastianBuritica" target='blank' className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
      <AiOutlineGithub />
    </a>
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
        {projects.map((project, index) => (
          <div key={index} className="basis-1/3 flex-1" onClick={() => openModal(project)}>
            <Image className="rounded-lg object-cover cursor-pointer" width={"100%"} height={"100%"} layout="responsive" src={project.src} alt={project.name} />
          </div>
        ))}
      </div>
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="flex items-start justify-between">
    <h2 className="font-burtons text-xl hover:text-teal-600">
      {currentProject.name}
    </h2>
    <button onClick={closeModal} className="text-2xl">
      <BsX />
    </button>
  </div>
        <Image src={currentProject.src} width={"100%"} height={"100%"} layout="responsive" />
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">{currentProject.description}</p>
        {/* <button onClick={closeModal}>Close</button> */}
      </Modal>
        </section>
  <section id="contact" className="text-left py-10">
    <h2 className="text-3xl py-1 dark:text-white">Contact</h2>
    <p className="text-lg py-2 dark:text-white">
    Hey there! Lets create amazing projects together, feel free to send me an email 👋
    </p>
    <div className="flex items-center gap-4 mt-3">
      <span className="inline-flex items-center justify-center p-2 bg-gray-200 rounded-full">
  <a href="mailto:sebastianb.devv@gmail.com" className="text-4xl text-teal-600 dark:text-gray-400">
    <AiOutlineMail />
  </a>
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
      <a href="https://github.com/SebastianBuritica" target='blank' className="text-3xl text-gray-600 dark:text-gray-400">
    <AiOutlineGithub />
  </a>
    </div>
  </div>
</footer>


      </main>
    </div>
  );
}
