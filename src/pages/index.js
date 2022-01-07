import React, { useRef } from "react";
import {
  Header,
  Showcase,
  About,
  Services,
  Project,
  Contact,
  TopButton,
  Footer,
} from "../components";
import "../styles/style.scss";
import "../styles/general.scss";
import "../styles/responsive.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Context from "../context/Context";

const Index = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  // Use Effect
  return (
    <Context>
      <main className="frame" ref={ref}>
        <div className="glass">
          <div className="landing">
            <Header />
            <Showcase />
            <About />
            <Services />
            <Project />
            <Contact />
            <Footer />
            <TopButton />
          </div>
        </div>
      </main>
    </Context>
  );
};

export default Index;
