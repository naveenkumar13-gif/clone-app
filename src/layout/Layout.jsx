import React from "react";
import Hero from "../components/hero/index";
import NavBar from "../components/navbar";
import Action from "../components/action";
import Feature from "../components/feature";
import About from "../components/about";
import WhyWe from "../components/whywe";
import Bussiness from "../components/bussiness";
import Testimonials from "../components/testimonials";
import Contact from "../components/contact";
import Footer from "../components/footer";

function Layout() {
  return (
    <div className="section  hero-bg">
      <NavBar />
      <main className="main section ">
        <Hero />
        <Action />
        {/* <Feature /> *
        <About />
        <WhyWe />
        <Bussiness />
        <Testimonials />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
