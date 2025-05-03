import React from "react";
import Navbar from "./components/navbar/navbar";
import style from "../styles/Valuations.module.css";
import Footer from "./components/footer/footer";
import Head from "next/head";

const solar = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Solar - FKS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Navbar /> */}
      <section>
        <div className={`${style.M5823WRAPPER} ${style.R585RESIDENTIALBG} `}>
          <div className={style.W986545CIRCLE742WRAPPER}>
            <div className={style.W986545CIRCLE}>
              {/* <p className={style.T457875TEXT}>We Provide</p> */}
              <p className={style.T457875HEADING}>Solar Services</p>
              {/* <button className={`btn ${style.C276543BTN}`}>Contact Us</button> */}
            </div>
          </div>
        </div>
      </section>
      <div className="container" style={{ paddingTop: "5.75rem" }}>
        <section className="pb-5">
          <p className={style.V458765HEADINGDARK}>Solar systems</p>
          <p className={style.S3456873SECOND}>
            As registered consultants with the Pakistan Engineering Council
            specializing in solar systems, F.K.S. Building Services is dedicated
            to developing high-quality solar projects that adhere to industry
            standards. Our team of engineers are experts in the field and
            possess the knowledge and skills necessary to design profitable
            solar projects.
            <br />
            We follow a comprehensive process to ensure the success and
            viability of each solar project. It begins with a thorough site
            survey to assess the suitability of the location and gather relevant
            data. Yield analysis is then conducted to evaluate the solar
            potential of the site, taking into account factors such as solar
            irradiation, shading, and orientation.
            <br />
            Careful selection of products and vendors is a crucial aspect of our
            approach. We collaborate with reputable suppliers to source
            high-quality solar panels, inverters, mounting systems, and other
            components necessary for the project. By choosing reliable and
            efficient products, we ensure the long-term performance and
            durability of the solar installation.
            <br />
            The preliminary design of the building is also taken into
            consideration during the feasibility study. Our engineers evaluate
            the structural aspects of the building to determine the optimal
            placement and integration of the solar system. This allows us to
            maximize energy generation while maintaining the structural
            integrity of the building.
            <br />
            Once the site survey, yield analysis, product selection, and
            preliminary design are completed, we prepare an initial estimate
            that covers all aspects of the project. This includes the costs of
            equipment, installation, permits, maintenance, and any other
            relevant expenses. Our goal is to provide you with a comprehensive
            understanding of the investment required and the potential returns
            of the solar project.
            <br />
            By engaging F.K.S. Building Services for your solar project, you can
            trust that our team will conduct a thorough feasibility study and
            provide you with accurate and detailed information. We strive to
            design solar projects that are not only environmentally sustainable
            but also financially viable, ensuring a profitable investment for
            our clients.
            <br />
            Count on us to deliver reliable, efficient, and profitable solar
            projects that meet the highest industry standards. Contact us today
            to discuss your solar project and begin the journey toward clean and
            sustainable energy.
          </p>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default solar;
