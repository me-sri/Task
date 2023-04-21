import React from "react";
// import Components 

import About from "./About";
import Claims from "./Claims";
import Clients from "./Clients";
import HealthCare from "./HealthCare";
import Utlize from "./Utlize";
import Consulting from "./Consulting";
import ContactForm from "./ContactForm";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <HealthCare />
      <Claims />
      <Utlize />
      <Consulting />
      <Clients />
      <ContactForm />
    </div>
  );
};

export default Home;
