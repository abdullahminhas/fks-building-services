import React from "react";
import Navbar from "./components/navbar/navbar";
import style from "../styles/about.module.css";
import Footer from "./components/footer/footer";
import Head from "next/head";

const about = () => {
  return (
    <React.Fragment>
      <Head>
        <title>About Us - FKS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Navbar /> */}
      <div className="container">
        <div className={style.W594MAINWRAPPER}>
          <img src="/main-img-1.png" className={style.I585IMGWRAPPED} alt="" />
          <img src="/main-img-1.png" className={style.I585IMGWRAPPED} alt="" />
          <img src="/main-img-1.png" className={style.I585IMGWRAPPED} alt="" />
          <img src="/main-img-1.png" className={style.I585IMGWRAPPED} alt="" />
        </div>
        <p className={style.M54567PAGEHEADING}>About Us</p>
        <div className="row">
          <div className="col-md-6 align-self-center">
            <p className={style.P76534PARALITE}>
              F.K.S Building Services, an organization with a rich history of
              commitment and excellence spanning over 29 years, has emerged as
              one of the most esteemed brands in the banking industry,
              particularly in the areas of credit risk management and collateral
              management. As an industry leader, we possess comprehensive
              expertise in trade operations, collateral management, asset
              valuations, stock inspections, and business information services.
            </p>
            <p className={style.P76534PARALITE}>
              Our journey towards success commenced in 1994 as a proprietorship
              business, and through our unwavering focus on prudent practices,
              technological advancements, team building, and integrity, we have
              grown into an incorporated company. Over the past three decades,
              we have achieved remarkable progress in terms of our operations,
              market presence, and product offerings. Currently, we boast a
              network of four branches across the country and employ over 20
              well-trained individuals. However, we firmly believe that this is
              only the beginning of our ascent.
            </p>
            <p className={style.P76534PARALITE}>
              We are dedicated to continually pushing the boundaries of our
              capabilities, striving for further growth, and setting new
              benchmarks in our industry. Our commitment to providing
              exceptional services and maintaining our reputation as a trusted
              partner remains unwavering. With a strong infrastructure and a
              talented team, we are poised to shape a promising future for F.K.S
              Building Services.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/aboutcol2.svg" className="d-block mx-auto" alt="" />
          </div>
        </div>
        <section
          className={style.P4873PXCUSTOM}
          style={{ marginTop: "6.5rem" }}
        >
          <div className="row">
            <div className="col-md-6 align-self-end">
              <p className={`mb-0 ${style.AB73459SUBHEADING}`}>1</p>
              <p className={style.AB73459SUBHEADING}>Our Vision</p>
              <span className={style.AB73459PARA}>
                Our ultimate objective is to establish ourselves as a premier
                firm, prioritizing the delivery of high-quality services that
                benefit both our esteemed banking partners and valued clients.
                With unwavering dedication, we strive to act in the best
                interest of all stakeholders, ensuring their satisfaction and
                achieving mutually beneficial outcomes.
              </span>
            </div>
            <div className="col-md-6">
              <img src="/frame.svg" className={style.VW9876534} alt="" />
            </div>
          </div>
          <div className="row" style={{ marginTop: "6rem" }}>
            <div className="col-md-6 order-2 order-sm-1">
              <img src="/mission.svg" className={style.VW98765345} alt="" />
            </div>
            <div className="col-md-6 align-self-center order-1 order-sm-2">
              <p className={`mb-0 ${style.AB73459SUBHEADING}`}>2</p>
              <p className={style.AB73459SUBHEADING}>Our Mission</p>
              <span className={style.AB73459PARA}>
                At <b className="text-dark">FKS Building Services</b>, we
                maintain a steadfast commitment to not only being among the top
                firms in our industry but also upholding the principles of
                excellence. We achieve this by engaging in ongoing activities
                that promote sustained growth, delivering quality services that
                exceed expectations, and creating a safe and conducive working
                environment for all beneficiaries involved. Through these
                efforts, we ensure that our clients and partners continue to
                receive exceptional outcomes while fostering a positive and
                productive atmosphere for our employees.
              </span>
            </div>
          </div>
          <div
            className="row"
            style={{ marginTop: "6rem", paddingBottom: "3rem" }}
          >
            <div className="col-md-6">
              <p className={`mb-0 ${style.AB73459SUBHEADING}`}>3</p>
              <p className={style.AB73459SUBHEADING}>
                Membership Affiliations & Associations
              </p>

              <ul>
                <li className={`${style.AB73459PARA} pb-4`}>
                  F.K.S Building Services is an “Any Amount” asset valuator of
                  the Pakistan Banks Association (“PBA”) for all three of panels
                  for the current year.
                </li>
                <li className={`${style.AB73459PARA} pb-4`}>
                  Shortlisted by the State Bank of Pakistan for Assets
                  evaluation under SBP regulation.
                </li>
                <li className={`${style.AB73459PARA} pb-4`}>
                  F.K.S Building Services is licensed by Pakistan Engineering
                  Council as Consultant.
                </li>
                <li className={`${style.AB73459PARA} pb-4`}>
                  Registered with the Federal Board of Revenue (“FBR”) & Punjab
                  Revenue Authority ("PRA").
                </li>
                <li className={`${style.AB73459PARA} pb-4`}>
                  Registered with the Council of Architect and Town Planning,
                  Pakistan.
                </li>
              </ul>
            </div>
            <div className="col-md-6 align-self-center">
              <img src="/frame1.svg" className={style.VW98765345} alt="" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default about;
