import Head from "next/head";
import Link from "next/link";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import web1 from "../../public/web1.jpeg";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import Divyansh from "../../public/Divyansh.jpeg";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="  px-10  bg-magicpattern md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl font-bold">Divyansh.B</h1>
            <ul className="flex items-center space-x-5">
            <li className="p-3 font-bold  bg-purple-400 rounded-xl">
                <Link href="/about">About</Link>
              </li>
              <li className="p-3 font-bold  bg-purple-400 rounded-xl">
                <Link href="/contacts">Contact me</Link>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Divyansh Bajpai
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Developer
            </h3>
            <p className="text-xl py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              A college student who is intersted in becoming a full stack
              developer and likes UI/ UX designs.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={Divyansh} className="cover" />
            </div>
          </div>
        </section>
        <section className="flex flex-col">
        <h3 align="left" className="text-3xl py-1 dark:text-white  font-bold">About</h3>
       <p className="text-xl py-4 leading-8 text-gray-800 dark:text-gray-200 mb-11">
       My self  Divyansh Bajpai third year CSE student at VIT VELLORE , I am a passionate and ambitious college student with a strong focus on web development and computer science. I possesse a solid foundation in HTML, CSS, and JavaScript for front-end web development, as well as back-end technologies like Node.js and databases. I actively seeks opportunities to enhance his skills and stays up-to-date with the latest trends and technologies. With a solid understanding of algorithms and programming languages, I enjoy solving complex problems. With my  dedication, technical proficiency, and creative mindset, I am  poised to make a significant impact in the field of web development and computer science.
       </p>
        </section>
      <section className="flex flex-col mb-11">
      <h3 align="left" className="text-3xl py-1 dark:text-white  font-bold ">Programming Languages</h3>
      <span className="flex space-x-5">
        {" "}
        <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
          {" "}
          <Image
            height={100}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
            alt="bootstrap"
           width={100}
            
          />{" "}
        </a>{" "}
        <a
          href="https://www.cprogramming.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Image
          height={100}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
            alt="c"
           width={100}
            
          />{" "}
        </a>{" "}
        <a
          href="https://www.w3schools.com/cpp/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Image
          height={100}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
            alt="cplusplus"
           width={100}
            
          />{" "}
        </a>{" "}
        <a
          href="https://www.w3schools.com/css/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Image
          height={100}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3"
           width={100}
            
          />{" "}
        </a>{" "}
        <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
          {" "}
          <Image
          height={100}
            src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
            alt="figma"
           width={100}
            
          />{" "}
        </a>{" "}
        <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
          {" "}
          <Image
          height={100}
            src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
            alt="firebase"
           width={100}
            
          />{" "}
        </a>{" "}
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
          {" "}
          <Image
          height={100}
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
           width={100}
            
          />{" "}
        </a>{" "}
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
          {" "}
          <Image
          height={100}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
           width={100}
            
          />{" "}
        </a>{" "}
        <a href="https://www.java.com" target="_blank" rel="noreferrer">
          {" "}
          <Image
          height={100}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
            alt="java"
           width={100}
            
          />{" "}
        </a>{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Image
          height={100}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
           width={100}
            
          />{" "}
        </a>{" "}
        <a href="https://materializecss.com/" target="_blank" rel="noreferrer">
          {" "}
          <Image
          height={100}
            src="https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg"
            alt="materialize"
           width={100}
            
          />{" "}
        </a>{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          {" "}
          <Image
          height={100}
            src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
            alt="nextjs"
           width={100}
            
          />{" "}
        </a>{" "}
        <a href="https://nodejs.org" target="_blank" rel="noreferrer">
          {" "}
          <Image
          height={100}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="nodejs"
           width={100}
            
          />{" "}
        </a>{" "}
        <a href="https://nuxtjs.org/" target="_blank" rel="noreferrer">
          {" "}
          <Image
          height={100}
            src="https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg"
            alt="nuxtjs"
           width={100}
            
          />{" "}
        </a>{" "}
        <a href="https://www.python.org" target="_blank" rel="noreferrer">
          {" "}
          <Image
          height={100}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            alt="python"
           width={100}
            
          />{" "}
        </a>{" "}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          {" "}
          <Image
          height={100}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
           width={100}
            
          />{" "}
        </a>{" "}
        <a href="https://redux.js.org" target="_blank" rel="noreferrer">
          {" "}
          <Image
          height={100}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            alt="redux"
           width={100}
            
          />{" "}
        </a>{" "}
        <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
          {" "}
          <Image
          height={100}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
            alt="sass"
           width={100}
            
          />{" "}
        </a>{" "}
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          {" "}
          <Image
          height={100}
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            alt="tailwind"
           width={100}
            
          />{" "}
        </a>{" "}
        <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
          {" "}
          <Image
          height={100}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
            alt="vuejs"
           width={100}
            
          />{" "}
        </a>{" "}
        <a href="https://vuetifyjs.com/en/" target="_blank" rel="noreferrer">
          {" "}
          <Image
          height={100}
            src="https://bestofjs.org/logos/vuetify.svg"
            alt="vuetify"
           width={100}
            
          />{" "}
        </a>{" "}
      </span>
      </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white  font-bold">
              Projects
            </h3>
            <p className="text-xl py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a designer and developer,
              I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-xl py-2 leading-8 text-gray-800 dark:text-gray-200">
              I have create various Projects and Designs. Some of them are
              here..
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
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
     
    </div>
  );
}

