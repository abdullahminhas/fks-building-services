import React from "react";
import Navbar from "./components/navbar/navbar";
import style from "../styles/Valuations.module.css";
import Footer from "./components/footer/footer";
import Head from "next/head";

const commoditiesStock = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Commodities & Stock Valuation - FKS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Navbar /> */}
      <section>
        <div className={`${style.M5823WRAPPER} ${style.R585RESIDENTIALBG} `}>
          <div className={style.W986545CIRCLE742WRAPPER}>
            <div className={style.W986545CIRCLE}>
              {/* <p className={style.T457875TEXT}>We Provide</p> */}
              <p className={style.T457875HEADING}>
                Commodities & Stock Valuation
              </p>
              {/* <button className={`btn ${style.C276543BTN}`}>Contact Us</button> */}
            </div>
          </div>
        </div>
      </section>
      <div className="container" style={{ paddingTop: "5.75rem" }}>
        <section>
          <p className={style.V458765HEADINGDARK}>
            Commodities & Stock Valuation
          </p>
          <p className={style.S3456873SECOND}>
            The primary objective of stocks valuation is to safeguard the
            financial risk and interests of Banks and Financial Institutions. By
            conducting thorough stocks valuation, these institutions aim to
            ensure the safety and security of their investments in the subject
            stocks.
            <br />
            Through the valuation process, various factors related to the stocks
            are carefully assessed to determine their value and potential risks.
            This includes analyzing financial statements, market conditions,
            industry trends, and other relevant factors. The goal is to provide
            a comprehensive evaluation that helps Banks and Financial
            Institutions make informed decisions regarding their investments in
            stocks.
            <br />
            By valuing stocks, these institutions can mitigate financial risks,
            identify potential areas of concern, and assess the overall
            stability and profitability of their investments. It allows them to
            make sound investment decisions, allocate resources effectively, and
            protect their interests in the stock market.
            <br />
            Ultimately, stocks valuation plays a crucial role in ensuring that
            Banks and Financial Institutions can make informed and prudent
            choices regarding their financial risk exposure and maintain the
            security of their investments in stocks.
          </p>
        </section>
        <section>
          <div className="row mt-5 pb-5">
            <div className="col-md-6">
              <div className="d-flex flex-row align-items-center">
                <p className={style.H574COLHEADING}>
                  Our Role as Stock Inspector
                </p>
              </div>
              <span className={style.S3456873SECOND267}>
                If you're looking to stay ahead in the commodities and stock
                markets, our valuation services are here to help you make
                informed investment decisions. We understand the importance of
                accurate and timely information in maximizing your returns.
                <br />
                Our team of experts will conduct a comprehensive analysis of
                your portfolio, considering various factors such as market
                trends, economic indicators, and other variables that can
                influence the value of your investments. By leveraging our
                expertise and industry knowledge, we will provide you with an
                accurate estimate of the current and potential value of your
                investments.
                <br />
                Furthermore, we offer recommendations on how to optimize your
                portfolio for maximum returns. Our services encompass market
                research, risk assessments, and portfolio management, ensuring
                that your investments are in capable hands. With our assistance,
                you can have peace of mind, knowing that your investment
                decisions are well-informed and aligned with your financial
                goals.
                <br />
                Don't wait any longer. Contact us today to schedule a valuation
                and start benefiting from our comprehensive services. Stay ahead
                of the game in the commodities and stock markets by making
                strategic investment choices based on reliable and timely
                information.
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

export default commoditiesStock;
