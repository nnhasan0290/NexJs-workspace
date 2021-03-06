import Head from "next/head";
import Navbar from "../components/Navbar.jsx";
import Main from "../components/Main.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.js";
import Projects from "../components/Projects.jsx";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}
