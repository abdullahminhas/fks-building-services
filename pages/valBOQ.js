import React from "react";
import Navbar from "./components/navbar/navbar";
import style from "../styles/Valuations.module.css";
import Footer from "./components/footer/footer";
import Head from "next/head";

const BOQ = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Bill Of Quantity - FKS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Navbar /> */}
      <section>
        <div className={`${style.M5823WRAPPER} ${style.R585RESIDENTIALBG} `}>
          <div className={style.W986545CIRCLE742WRAPPER}>
            <div className={style.W986545CIRCLE}>
              {/* <p className={style.T457875TEXT}>We Provide</p> */}
              <p className={style.T457875HEADING}>Bill Of Quantity</p>
              {/* <button className={`btn ${style.C276543BTN}`}>Contact Us</button> */}
            </div>
          </div>
        </div>
      </section>
      <div className="container" style={{ paddingTop: "5.75rem" }}>
        <section className="pb-5">
          <p className={style.V458765HEADINGDARK}>Bill Of Quantity</p>
          <p className={style.S3456873SECOND}>
            At F.K.S. Building Services, we have a team of experienced engineers
            who specialize in preparing accurate and detailed bills of
            quantities for a wide range of projects, from residential buildings
            to large-scale commercial and industrial structures. Our engineers
            possess the expertise and knowledge to assess the project
            requirements and compile a comprehensive list of the materials,
            labor, and equipment needed for construction or installation.
            <br />
            Whether it's a residential property, a commercial building, or an
            industrial facility, our engineers diligently analyze architectural
            and engineering drawings, specifications, and project plans to
            determine the precise quantities of materials and resources
            required. This includes everything from construction materials like
            concrete, steel, and timber to specialized equipment and machinery.
          </p>
          <p
            className={style.S3456873SECOND}
            style={{ textAlign: "left", textAlignLast: "left" }}
          >
            By engaging our services, you can expect:
          </p>
          <ol
            className={style.S3456873SECOND}
            style={{ textAlign: "left", textAlignLast: "left" }}
          >
            <li>
              <b>Accurate Quantities</b>: Our engineers employ their expertise
              to ensure precise calculations of quantities, minimizing the risk
              of shortages or excesses during the construction or installation
              process. valuations.
            </li>
            <li>
              <b>Cost Efficiency</b>: The detailed bill of quantities allows for
              better cost control and budget management. It helps project
              stakeholders accurately estimate expenses and make informed
              decisions regarding procurement, resource allocation, and cost
              optimization.
            </li>
            <li>
              <b>Streamlined Processes</b>: Our comprehensive bills of
              quantities streamline the tendering and procurement processes by
              providing clear and detailed information to contractors,
              suppliers, and other stakeholders. This promotes transparency and
              facilitates efficient project execution.
            </li>
          </ol>
          <p className={style.S3456873SECOND}>
            From residential projects to complex commercial or industrial
            ventures, our engineers have the skills and knowledge to deliver
            accurate bills of quantities tailored to your specific requirements.
            Trust F.K.S. Building Services provides you with reliable and
            precise documentation that forms the foundation for successful
            construction and procurement processes.
          </p>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default BOQ;
