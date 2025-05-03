import React from "react";
import Navbar from "./components/navbar/navbar";
import style from "../styles/Valuations.module.css";
import Footer from "./components/footer/footer";
import Head from "next/head";

const powerSector = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Power Sector Valuations - FKS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Navbar /> */}
      <section>
        <div className={`${style.M5823WRAPPER} ${style.R585RESIDENTIALBG} `}>
          <div className={style.W986545CIRCLE742WRAPPER}>
            <div className={style.W986545CIRCLE}>
              {/* <p className={style.T457875TEXT}>We Provide</p> */}
              <p className={style.T457875HEADING}>Power Sector Valuations</p>
              {/* <button className={`btn ${style.C276543BTN}`}>Contact Us</button> */}
            </div>
          </div>
        </div>
      </section>
      <div className="container" style={{ paddingTop: "5.75rem" }}>
        <section className="pb-5">
          <p className={style.V458765HEADINGDARK}>Power Sector</p>
          <p className={style.S3456873SECOND}>
            At F.K.S. Building Services, we have a dedicated team of engineers
            who specialize in the power sector, particularly in grid stations,
            transmission lines, feeders, and powerhouses. Our expertise in this
            area allows us to provide comprehensive and accurate valuations for
            various power infrastructure components. Some of the specific areas
            we specialize in include:
          </p>
          <ol
            className={style.S3456873SECOND}
            style={{ textAlign: "left", textAlignLast: "left" }}
          >
            <li>
              <b>Grid Stations</b>: Our team has extensive experience in valuing
              grid stations of different capacities, including 33kVA, 66kVA, and
              132kVA. We understand the technical aspects, equipment, and
              systems involved in grid stations, allowing us to provide reliable
              valuations.
            </li>
            <li>
              <b>Transmission Lines</b>: We are well-versed in valuing
              transmission lines, including those with capacities of 33kVA,
              66kVA, and 132kVA. Our engineers understand the complexities of
              transmission line infrastructure, such as towers, conductors,
              insulators, and protective devices, enabling us to assess their
              value accurately.
            </li>
            <li>
              <b>Feeders</b>: Our expertise extends to valuing 11kVA feeders,
              which are crucial components of power distribution networks. We
              consider factors such as capacity, load-bearing capability,
              equipment, and associated infrastructure when valuing feeders.
            </li>
            <li>
              <b>Powerhouses</b>: Our team is knowledgeable in valuing
              powerhouses, which house power generation equipment and related
              systems. We understand the various aspects of powerhouses,
              including generators, turbines, control systems, cooling systems,
              and auxiliary equipment, enabling us to provide comprehensive
              valuations.
            </li>
          </ol>
          <p
            className={style.S3456873SECOND}
            style={{ textAlign: "left", textAlignLast: "left" }}
          >
            Our esteemed clients in the power sector include:
          </p>
          <ul
            className={style.S3456873SECOND}
            style={{ textAlign: "left", textAlignLast: "left" }}
          >
            <li>Lahore Electric Supply Company (LESCO)</li>
            <li>Faisalabad Electric Supply Company (FESCO)</li>
            <li>Gujranwala Electric Power Company (GEPCO)</li>
            <li>Peshawar Electric Supply Company (PESCO)</li>
            <li>Islamabad Electric Supply Company (IESCO)</li>
            <li>Quaid E Azam Soalr Park</li>
            <li>Kohsar Power House</li>
            <li>Mangla Power House</li>
            <li>Tarbela Power house</li>
            <li>Ghazi-Barotha Hydropower Project</li>
          </ul>
          <p className={style.S3456873SECOND}>
            Having the opportunity to work with such reputable organizations is
            a testament to our expertise, reliability, and commitment to
            delivering high-quality valuation services in the industry.
            <br />
            If you require valuations for grid stations, transmission lines,
            feeders, powerhouses, or any other power infrastructure assets, our
            specialized team is ready to assist you. Contact us today to discuss
            your specific needs and leverage our industry knowledge and
            expertise to maximize the value of your power sector investments.
          </p>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default powerSector;
