import React from "react";
import Navbar from "./components/navbar/navbar";
import style from "../styles/Valuations.module.css";
import Footer from "./components/footer/footer";
import Head from "next/head";

const equipMachine = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Equipment Plant & Machinery Valuation - FKS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Navbar /> */}
      <section>
        <div className={`${style.M5823WRAPPER} ${style.R585RESIDENTIALBG} `}>
          <div className={style.W986545CIRCLE742WRAPPER}>
            <div className={style.W986545CIRCLE}>
              {/* <p className={style.T457875TEXT}>We Provide</p> */}
              <p className={style.T457875HEADING}>
                Equipment Plant & Machinery Valuation
              </p>
              {/* <button className={`btn ${style.C276543BTN}`}>Contact Us</button> */}
            </div>
          </div>
        </div>
      </section>
      <div className="container" style={{ paddingTop: "5.75rem" }}>
        <section>
          <p className={style.V458765HEADINGDARK}>
            Equipment Plant & Machinery Valuation
          </p>
          <p
            className={`${style.S3456873SECOND} mb-0`}
            style={{ textAlignLast: "left" }}
          >
            At F.K.S. Building Services, our equipment and machinery valuation
            department stands out as a leader in the industry, thanks to our
            wealth of expertise, knowledge, and deep understanding of the market
            dynamics. We have established ourselves as specialists in valuations
            related to various sectors, including:
          </p>
          <ul
            className={style.S3456873SECOND}
            style={{ textAlign: "left", textAlignLast: "left" }}
          >
            <li>
              11kVA Feeder, 132kVA Transmission Lines, 132kVA/66kVA Grid
              Stations & Power Houses
            </li>
            <li>Rice, Flour & Agriculture Industry</li>
            <li>Cotton Mills</li>
            <li>Textile Industry</li>
            <li>Steel & Metal Industry</li>
            <li>Ceramic Industry</li>
            <li>Sanitary Wears</li>
            <li>Electrical & Power Industry</li>
            <li>Solar Systems</li>
            <li>Automotive Industry</li>
            <li>Food & Bevrages Industry</li>
            <li>Pharmaceutical Industry</li>
            <li>Petrochemical Industry</li>
            <li>Tobaco Industry</li>
            <li>Leather & Sports Goods Industry</li>
            <li>Medical & Surgical Industry</li>
          </ul>
          <p className={style.S3456873SECOND}>
            With a keen focus on these specific industries, we possess
            comprehensive insights into the equipment and machinery used within
            them. Our team is well-versed in the intricacies of valuing assets
            in these sectors, allowing us to provide accurate and reliable
            assessments. Whether it's appraising machinery in a rice mill or
            evaluating equipment in a textile factory, we offer tailored
            solutions that meet the unique needs of our clients in these
            industries.
          </p>
        </section>
        <section>
          <div className="row mt-5 pb-5">
            <div className="col-md-6">
              <div className="d-flex flex-row align-items-center">
                <p className={style.H574COLHEADING}>What makes us different</p>
              </div>
              <span className={style.S3456873SECOND267}>
                At F.K.S. Building Services, we offer expert valuations for an
                extensive array of equipment, plant, and machinery. Our team of
                experienced engineers possesses a deep understanding of the
                value associated with various types of assets, enabling us to
                provide reliable and accurate valuations across multiple
                industries.
                <br />
                Whether it's manufacturing equipment, construction machinery, or
                medical devices, our team has the expertise to assess and
                determine their true value. We employ a comprehensive approach,
                taking into account factors such as market trends, condition,
                age, and functionality to provide precise valuations. Our
                commitment to accuracy and attention to detail ensures that our
                clients can make informed decisions regarding their equipment
                assets.
                <br />
                With our specialized knowledge and comprehensive valuation
                services, we are dedicated to delivering reliable and
                trustworthy assessments for a wide range of equipment, plant,
                and machinery.
              </span>
            </div>
            <div className="col-md-6 align-self-center">
              <img
                src="/commercial-frame-1.svg"
                className="mx-auto d-block"
                alt=""
              />
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
                <p className={style.H574COLHEADING}>Established Reputation</p>
              </div>
              <span className={style.S3456873SECOND267}>
                F.K.S. Building Services has more than 5000 satisfied corporate
                clients in multifaceted industries which is an evident mark of
                our expertise.
              </span>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 align-self-center">
              <div className="d-flex flex-row align-items-center">
                <p className={style.H574COLHEADING}>We have the experience</p>
              </div>
              <span className={style.S3456873SECOND267}>
                F.K.S. Building Services as Asset Valuators has evaluated over
                35000 Valuations of residential / commercial land and building
                including project valuations and over 12,000 stocks Inspections
                on behalf of different Banks all over Pakistan, to date.
              </span>
            </div>
            <div className="col-md-6">
              <img
                src="/commercial-val-1.svg"
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

export default equipMachine;
