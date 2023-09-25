import { Routes, Route } from "react-router-dom";

import Menu from "../menu/Menu";

import Contact from "../contact/Contact";
import Projects from "../projects/Projects";
import Home from "../home/Home";
import About from "../about/About";

import mainRootFileCSS from "../mainrootfile/mainRootFile.module.css";

function App() {
  return (
    <div className={mainRootFileCSS.mainWrapper}>
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
