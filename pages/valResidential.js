import React from "react";
import Navbar from "./components/navbar/navbar";
import style from "../styles/Valuations.module.css";
import Footer from "./components/footer/footer";
import Head from "next/head";

const valResidential = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Residential Valuations - FKS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Navbar /> */}
      <section>
        <div className={`${style.M5823WRAPPER} ${style.R585RESIDENTIALBG} `}>
          <div className={style.W986545CIRCLE742WRAPPER}>
            <div className={style.W986545CIRCLE}>
              {/* <p className={style.T457875TEXT}>We Provide</p> */}
              <p className={style.T457875HEADING}>Residential Valuations</p>
              {/* <button className={`btn ${style.C276543BTN}`}>Contact Us</button> */}
            </div>
          </div>
        </div>
      </section>
      <div className="container" style={{ paddingTop: "5.75rem" }}>
        <section className="pb-5">
          <p className={style.V458765HEADINGDARK}>Residential Valuations</p>
          <p className={style.S3456873SECOND}>
            At FKS Building Services, we specialize in providing expert house
            evaluations that offer valuable insights to homeowners, buyers, and
            sellers regarding the condition of their properties. Our team of
            experienced engineers employs a wide array of tools and techniques
            to assess properties thoroughly, identifying any potential issues or
            areas that may require improvement. By availing of our services, you
            can make informed decisions about your home with confidence.
            <br />
            Valuation Services form a significant component of FKS Building
            Services' business operations. As an organization, we act as trusted
            assets surveyors and valuers, catering to the valuation needs of
            various clients including banks, leasing companies, corporations,
            and individuals. Whether it is assessing the value of real estate,
            equipment, or other assets, we bring our expertise to provide
            accurate and reliable valuations for our client's specific
            requirements
          </p>
        </section>
        <section>
          {/* <div className="row mt-5">
            <div className="col-md-6 align-self-center">
              <div className="d-flex flex-row align-items-center">
                <p className={style.H574COLHEADING}>
                  Approved Valuer by The PBA
                </p>
              </div>
              <span className={style.S3456873SECOND267}>
                F.K.S. Building Services, under the Prudential Regulations of
                the State Bank of Pakistan, has been enlisted as the Approved
                Valuer by the Pakistan Banks Association (PBA) under all of
                their Panels i.e., 1, 2 & 3 having the “Any Amount” Financial /
                Credit Limit for the valuation.
              </span>
            </div>
            <div className="col-md-6">
              <img src="/resident-val.svg" className="mx-auto d-block" alt="" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <img
                src="/resident-val-1.svg"
                className="mx-auto d-block"
                alt=""
              />
            </div>
            <div className="col-md-6 align-self-center">
              <div className="d-flex flex-row align-items-center">
                <p className={style.H574COLHEADING}>We are experts</p>
              </div>
              <span className={style.S3456873SECOND267}>
                F.K.S. Building Services have years of knowledgebase, expertise
                and experience in residential valuation services. As a panel
                valuer for almost all national and international banks across
                the Pakistan and a broad portfolio of private and local clients,
                our residential valuation team provides the most authentic
                residential valuation advice.
              </span>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 align-self-center">
              <div className="d-flex flex-row align-items-center">
                <p className={style.H574COLHEADING}>
                  Industrially recognized specialists
                </p>
              </div>
              <span className={style.S3456873SECOND267}>
                We are recognized as specialists by the industry in the
                valuation of Villas, Housing Projects, Apartments, Towers and
                Development Sites. We offer specialist approach in providing
                independent advice to clients and have one of the largest
                residential valuation teams in the country.
              </span>
            </div>
            <div className="col-md-6">
              <img
                src="/resident-val-2.svg"
                className="mx-auto d-block"
                alt=""
              />
            </div>
          </div> */}
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default valResidential;
