import React from "react";
import Navbar from "./components/navbar/navbar";
import style from "../styles/Valuations.module.css";
import Footer from "./components/footer/footer";
import Head from "next/head";

const stability = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Stability Certificates - FKS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Navbar /> */}
      <section>
        <div className={`${style.M5823WRAPPER} ${style.R585RESIDENTIALBG} `}>
          <div className={style.W986545CIRCLE742WRAPPER}>
            <div className={style.W986545CIRCLE}>
              {/* <p className={style.T457875TEXT}>We Provide</p> */}
              <p className={style.T457875HEADING}>Stability Certificates </p>
              {/* <button className={`btn ${style.C276543BTN}`}>Contact Us</button> */}
            </div>
          </div>
        </div>
      </section>
      <div className="container" style={{ paddingTop: "5.75rem" }}>
        <section className="pb-5">
          <p className={style.V458765HEADINGDARK}>
            Building Stabilities - Structure Stability
          </p>
          <p className={style.S3456873SECOND} style={{ textAlignLast: "left" }}>
            At F.K.S. Building Services, our stability certificates encompass a
            comprehensive range of areas to provide you with a thorough
            assessment of your property. We understand the importance of
            ensuring structural integrity, energy efficiency, environmental
            safety, and fire prevention measures. Our certificates cover the
            following key areas:
          </p>
          <ol
            className={style.S3456873SECOND}
            style={{ textAlign: "left", textAlignLast: "left" }}
          >
            <li>
              <b>Structural Integrity</b>: Our experienced professionals conduct
              a meticulous examination to check for any weaknesses or damage to
              the foundation, beams, supports, and other structural components
              of the building. We assess the overall stability and structural
              soundness, providing you with an accurate evaluation of the
              property's structural integrity.
            </li>
            <li>
              <b>Energy Efficiency</b>: As part of our stability certificates,
              we assess the home's energy usage and identify potential
              opportunities for improving energy efficiency. This includes
              evaluating appliances, insulation, HVAC systems, and other
              relevant factors. Our aim is to provide recommendations that can
              help you reduce energy consumption, lower utility costs, and
              create a more environmentally friendly living or working space. 3.
              Environmental Concerns: We recognize the importance of a healthy
              and safe living
            </li>
            <li>
              <b>Environmental Concerns</b>: We recognize the importance of a
              healthy and safe living environment. Our stability certificates
              include testing for the presence of harmful substances such as
              radon, mold, or other environmental hazards. By identifying and
              addressing these concerns, we help ensure that your property
              maintains a high standard of environmental safety.
            </li>
            <li>
              <b>Fire Safety</b>: Fire prevention and safety are paramount. Our
              professionals inspect the home's smoke detectors, fire exits, and
              other fire safety features to ensure they are in good working
              order and comply with relevant regulations. We prioritize the
              protection of occupants and property by providing an assessment of
              the property's fire safety measures.
            </li>
          </ol>
          <p className={style.S3456873SECOND}>
            By obtaining our stability certificate, you gain valuable insights
            into the condition of your property across these critical areas.
            Whether you are a homeowner, property investor, or real estate
            professional, our certificates provide you with peace of mind,
            highlighting any areas that require attention or improvement.
            <br />
            Trust F.K.S. Building Services to deliver comprehensive stability
            certificates that address structural integrity, energy efficiency,
            environmental concerns, and fire safety. Our goal is to ensure your
            property meets the highest standards of safety, performance, and
            sustainability.
          </p>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default stability;
