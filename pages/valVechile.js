import React from "react";
import Navbar from "./components/navbar/navbar";
import style from "../styles/Valuations.module.css";
import Footer from "./components/footer/footer";
import Head from "next/head";

const vechile = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Vehicle Inspection - FKS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Navbar /> */}
      <section>
        <div className={`${style.M5823WRAPPER} ${style.R585RESIDENTIALBG} `}>
          <div className={style.W986545CIRCLE742WRAPPER}>
            <div className={style.W986545CIRCLE}>
              {/* <p className={style.T457875TEXT}>We Provide</p> */}
              <p className={style.T457875HEADING}>Vehicle Inspection</p>
              {/* <button className={`btn ${style.C276543BTN}`}>Contact Us</button> */}
            </div>
          </div>
        </div>
      </section>
      <div className="container" style={{ paddingTop: "5.75rem" }}>
        <section className="d-flex flex-column align-items-center">
          <p className={style.V458765HEADINGDARK}>Vehicle Inspection</p>
          <p className={style.S3456873SECOND}>
            F.K.S. Building Services proudly stands as the premier provider of
            vehicle valuation solutions in Pakistan, catering specifically to
            the banking and insurance industry. Our comprehensive vehicle
            valuation services are designed to accurately determine the current
            market value of vehicles, ensuring they are insured or financed at
            their true worth.
            <br /> Vehicle valuations play a critical role in enabling accurate
            insurance coverage and financing decisions. By assessing the market
            value of a vehicle, our services provide the necessary information
            for insurance companies to determine the appropriate coverage and
            premiums. Similarly, financial institutions rely on our valuations
            to assess the value of a vehicle when offering financing options.
            <br />
            Our team of experts utilizes industry-leading methodologies and
            market analysis to provide reliable and precise vehicle valuations.
            By considering various factors such as make, model, condition,
            mileage, and market trends, we ensure that the valuation reflects
            the true worth of the vehicle.
            <br /> With F.K.S. Building Services as your trusted provider, you
            can have confidence in the accuracy and integrity of our vehicle
            valuation solutions. Our commitment to excellence and industry
            expertise has made us the preferred choice for banks and insurance
            companies in Pakistan.
            <br /> Ensure your vehicle is insured or financed at its real value.
            Choose F.K.S. Building Services for dependable and comprehensive
            vehicle valuation solutions that meet the specific needs of the
            banking and insurance industry.
          </p>
        </section>
        <section>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="d-flex flex-row align-items-center">
                <p className={style.H574COLHEADING}>
                  Our Role as Vehicle Inspector
                </p>
              </div>
              <span className={style.S3456873SECOND267}>
                At F.K.S. Building Services, our team of certified mechanics is
                dedicated to conducting thorough vehicle inspections to ensure a
                comprehensive understanding of its condition. When you bring
                your vehicle to us, we leave no stone unturned.
                <br />
                Our certified mechanics will perform a top-to-bottom inspection,
                including a meticulous road test, to identify any existing or
                potential issues. This comprehensive assessment covers all major
                systems, such as the engine, transmission, brakes, suspension,
                and more. We pay attention to every detail, ensuring that no
                aspect of your vehicle's performance and safety is overlooked.
                <br />
                In addition to the mechanical inspection, we also conduct a
                comprehensive check of the vehicle's history. This includes
                reviewing accident records, service history, and other relevant
                information to provide you with a complete picture of its
                background.
                <br />
                Following the inspection, we provide you with a detailed report
                of our findings. This report includes a comprehensive list of
                any repairs or maintenance that may be needed, allowing you to
                address potential issues proactively. We also offer an estimate
                of the remaining lifespan of major components, giving your
                insight into the longevity and durability of your vehicle.
                <br />
                With our meticulous inspections and detailed reports, you can
                make informed decisions about the maintenance, repairs, or
                potential purchase of a vehicle. Trust our certified mechanics
                to deliver accurate assessments and thorough evaluations that
                prioritize your safety and peace of mind.
                <br />
                Contact us today to schedule a vehicle inspection and benefit
                from our expertise in providing comprehensive reports and
                detailed assessments of your vehicle's condition.
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
                  Comprehensive & Authentic Value
                </p>
              </div>
              <span className={style.S3456873SECOND267}>
                At F.K.S. Building Services, our vehicle inspection services
                offer you peace of mind and the assurance of getting the best
                value for your money. Whether you're buying a used vehicle or
                want to ensure your current vehicle is in top condition, our
                inspections are a valuable resource.
                <br />
                <br />
                By scheduling a Vehicle Inspection with us, you can:
                <br />
                Obtain a Comprehensive Evaluation: Our experienced team will
                conduct a thorough inspection of the vehicle, covering all
                essential aspects. This includes assessing the engine,
                transmission, brakes, suspension, and other critical systems. We
                leave no stone unturned in ensuring that you have a
                comprehensive understanding of the vehicle's condition.
                <br />
                Identify Potential Issues: Our inspections are designed to catch
                any existing or potential issues before they become major
                problems. By identifying any hidden concerns or areas requiring
                attention, you can make informed decisions about repairs,
                negotiate pricing, or avoid purchasing a vehicle with
                significant underlying issues.
                <br />
                Drive with Confidence: With our inspection services, you can
                drive away with confidence, knowing that your vehicle has been
                thoroughly examined by our experts. This knowledge empowers you
                to make sound choices based on accurate information, ensuring
                your safety and satisfaction.
                <br />
                Contact us today to schedule your Vehicle Inspection and gain
                the peace of mind that comes with knowing the true condition of
                your vehicle. Don't let hidden issues or uncertainties
                compromise your investment—trust our comprehensive inspections
                to provide you with the confidence and knowledge you need to
                make informed decisions.
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

export default vechile;
