import React from "react";
import Navbar from "./components/navbar/navbar";
import style from "../styles/Valuations.module.css";
import Footer from "./components/footer/footer";
import Head from "next/head";

const rental = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Rental Valuations - FKS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Navbar /> */}
      <section>
        <div className={`${style.M5823WRAPPER} ${style.R585RESIDENTIALBG} `}>
          <div className={style.W986545CIRCLE742WRAPPER}>
            <div className={style.W986545CIRCLE}>
              {/* <p className={style.T457875TEXT}>We Provide</p> */}
              <p className={style.T457875HEADING}>Rental Valuations</p>
              {/* <button className={`btn ${style.C276543BTN}`}>Contact Us</button> */}
            </div>
          </div>
        </div>
      </section>
      <div className="container" style={{ paddingTop: "5.75rem" }}>
        <section>
          <p className={style.V458765HEADINGDARK}>Rental Valuations</p>
          <p className={style.S3456873SECOND}>
            As a property owner or investor, setting a realistic rental price is
            crucial to attracting prospective tenants and maximizing your rental
            income. At F.K.S. Building Services, we offer rental valuation
            services specifically designed to help you determine the potential
            rental income for your property.
            <br />
            Our experienced team specializes in assessing market trends,
            property features, location, and other relevant factors to provide
            you with an accurate estimation of the rental value. By leveraging
            our expertise, you can make informed decisions regarding pricing,
            repairs, and improvements that can enhance the appeal and
            profitability of your property.
            <br />
            Whether you own residential, commercial, or mixed-use properties,
            our rental valuation services provide valuable insights to help you
            optimize your rental income. By setting the right rental price, you
            can attract quality tenants, minimize vacancies, and achieve a
            favorable return on your investment.
            <br />
            Partner with us to benefit from our professional rental valuation
            services and ensure that your property makes the most of its initial
            interest from prospective tenants.
          </p>
        </section>
        <section>
          <div className="row mt-5 pb-5">
            <div className="col-md-6">
              <div className="d-flex flex-row align-items-center">
                <p className={style.H574COLHEADING}>What makes us different</p>
              </div>
              <span className={style.S3456873SECOND267}>
                At F.K.S. Building Services, we go beyond determining the rental
                income potential of your property. We also offer valuable
                suggestions on improvements or repairs that can enhance its
                rental potential and ensure it is in top condition before
                putting it on the market. With our comprehensive rental
                valuation services, you can maximize the return on your
                investment.
                <br />
                Our team of professional appraisers will conduct a thorough
                assessment of your property, leaving no stone unturned. This
                includes a meticulous inspection of the interior and exterior,
                as well as a detailed review of local market conditions. Based
                on our findings, we will provide you with an estimate of the
                potential rental income your property can generate.
                Additionally, we will recommend a rental rate that aligns with
                comparable properties in the area, ensuring competitiveness and
                profitability.
                <br />
                By availing of our rental valuation services, you can make
                informed decisions about your property, backed by expert
                insights and data-driven analysis. We understand that leaving
                your rental income to chance is not an option, and our services
                are designed to provide you with the confidence and knowledge
                needed to optimize your investment.
                <br />
                Contact us today to schedule your rental valuation and take a
                proactive approach toward maximizing the potential of your
                property's rental income.
              </span>
            </div>
            <div className="col-md-6 align-self-center">
              <img src="/resident-val.svg" className="mx-auto d-block" alt="" />
            </div>
          </div>
          {/* <div className="row mt-5">
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

export default rental;
