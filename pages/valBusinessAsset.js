import React from "react";
import Navbar from "./components/navbar/navbar";
import style from "../styles/Valuations.module.css";
import Footer from "./components/footer/footer";
import Head from "next/head";

const businessAsset = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Business & Asset Valuations - FKS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Navbar /> */}
      <section>
        <div className={`${style.M5823WRAPPER} ${style.R585RESIDENTIALBG} `}>
          <div className={style.W986545CIRCLE742WRAPPER}>
            <div className={style.W986545CIRCLE}>
              {/* <p className={style.T457875TEXT}>We Provide</p> */}
              <p className={style.T457875HEADING}>
                Business & Asset Valuations
              </p>
              {/* <button className={`btn ${style.C276543BTN}`}>Contact Us</button> */}
            </div>
          </div>
        </div>
      </section>
      <div className="container" style={{ paddingTop: "5.75rem" }}>
        <section>
          <p className={style.V458765HEADINGDARK}>
            Business & Asset Valuations
          </p>
          <p className={style.S3456873SECOND}>
            At F.K.S. Building Services, we understand that a business valuation
            is more than just a numerical exercise. Our team of skilled
            valuation experts recognizes the intricacies involved and takes the
            time to thoroughly comprehend the professional dynamics and key
            value drivers of a business.
            <br />
            Our experienced business and asset valuers bring a wealth of
            knowledge and draw upon their extensive experience in the field.
            They employ a comprehensive approach, considering various valuation
            approaches that are applicable to the specific circumstances of each
            business. This includes a thorough analysis of financial data,
            market trends, industry benchmarks, and other relevant factors that
            impact the value of the business.
            <br />
            By delving into the unique aspects and understanding the intricate
            dynamics of each business, we provide insightful and accurate
            valuations. We recognize that value is derived from a combination of
            tangible and intangible factors, and our experts take all these
            elements into consideration to deliver comprehensive and
            well-informed valuations.
            <br />
            With our specialized expertise and meticulous approach, we ensure
            that our clients receive reliable and tailored valuations that
            capture the true value of their businesses and assets.
          </p>
        </section>
        <section>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="d-flex flex-row align-items-center">
                <p className={style.H574COLHEADING}>
                  Reason for Asset Valuation
                </p>
              </div>
              <span className={style.S3456873SECOND267}>
                At F.K.S. Building Services, we specialize in providing expert
                valuations for businesses and their assets. Our team of
                experienced engineers possesses the necessary knowledge and
                expertise to accurately assess and determine the value of
                various types of businesses and assets.
                <br />
                Whether it's a small startup, a well-established company, or a
                specific asset within a business, our team is well-versed in
                evaluating their worth. We apply a combination of industry
                knowledge, market analysis, financial expertise, and valuation
                methodologies to ensure precise and reliable assessments.
                <br />
                Our comprehensive understanding of different business sectors
                and asset types allows us to provide tailored valuations that
                align with industry standards and best practices. We take into
                account the unique characteristics, market conditions, and value
                drivers specific to each business or asset, enabling us to
                deliver accurate and insightful valuations.
                <br />
                By entrusting us with your business and asset valuations, you
                can rely on our team's expertise to provide you with a thorough
                understanding of their value. We strive to deliver reliable and
                comprehensive valuations that assist our clients in making
                informed decisions and maximizing their business potential.
              </span>
            </div>
            <div className="col-md-6 align-self-center">
              <img src="/resident-val.svg" className="mx-auto d-block" alt="" />
            </div>
          </div>
          <div className="row mt-5 pb-5">
            <div className="col-md-6 align-self-center">
              <img
                src="/resident-val-1.svg"
                className="mx-auto d-block"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-row align-items-center">
                <p className={style.H574COLHEADING}>
                  Why should you consult us?
                </p>
              </div>
              <span className={style.S3456873SECOND267}>
                At F.K.S. Building Services, our business and asset valuation
                services encompass a range of comprehensive offerings:
                <br />
                <ol>
                  <li>
                    <b>Business Valuation</b>: Our team employs various
                    methodologies to assess the fair market value of a business.
                    This involves a meticulous examination of financial
                    statements, an in-depth analysis of market trends, and
                    careful consideration of the company's industry and
                    competitive landscape. By integrating these factors, we
                    provide accurate and insightful valuations that reflect the
                    true worth of the business.
                  </li>
                  <li>
                    <b>Asset Valuation</b>: We specialize in valuing diverse
                    types of assets, including equipment, plant and machinery,
                    real estate properties, and intellectual property. Our
                    experienced professionals employ a rigorous approach that
                    incorporates industry-specific knowledge, market conditions,
                    and asset-specific attributes to determine their precise
                    value. Whether it's appraising the worth of machinery,
                    assessing the market value of a property, or evaluating the
                    intellectual property portfolio, we deliver reliable and
                    comprehensive asset valuations.
                  </li>
                </ol>
                <br />
                By leveraging our expertise in both business and asset
                valuation, we offer comprehensive solutions tailored to the
                unique needs of our clients. Our meticulous approach ensures
                accurate assessments, enabling informed decision-making and
                maximizing the value of businesses and their assets.
              </span>
            </div>
          </div>
          {/* <div className="row mt-5">
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

export default businessAsset;
