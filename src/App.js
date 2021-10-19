import { Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Skills />
      <Experience />
      <Education />
      <Achievements />
      <Footer />
    </Fragment>
  );
}

export default App;
