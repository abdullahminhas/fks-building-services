import React from "react";
import Navbar from "./components/navbar/navbar";
import style from "../styles/contact.module.css";
import Footer from "./components/footer/footer";
import Head from "next/head";

const Contact = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Contact Us - FKS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Navbar /> */}
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className={style.C8725CONTACTWRAPPER}>
              <form
                action="#"
                className="py-5 px-4 d-flex flex-column justify-content-between h-100"
              >
                <p className={style.C98763434CONTACTHEADING}>Contact Us</p>
                <input
                  type="text"
                  placeholder="Name"
                  className={style.I87347INPUT}
                />
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className={style.I87347INPUT}
                />
                <input
                  type="text"
                  placeholder="Tell Us about your Project"
                  className={style.I87347INPUT}
                />
                <button className={`btn ${style.S4583SENDBTN}`}>
                  Send Request{" "}
                  <img
                    src="/send.svg"
                    className="ms-3"
                    style={{ width: "20px", height: "20px" }}
                    alt=""
                  />
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="/contact.svg"
              className={style.C723568CONTACTIMG}
              alt=""
            />
            <p className={style.C8467CONTACTHEADING}>
              We would love to
              <br /> hear from you
            </p>
            <div className="row justify-content-end">
              <div className="col-md-8">
                <div className="d-flex flex-row  align-items-center mb-4">
                  <img src="/mail.svg" className="me-3" alt="" />
                  <a
                    href="mailto:info@fksbuildingservices.com"
                    className={style.C5684CONTACTLINK}
                  >
                    info@fksbuildingservices.com
                  </a>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <img src="/phone.svg" className="me-3" alt="" />
                  <div
                    className="d-flex flex-row"
                    style={{ columnGap: "3rem" }}
                  >
                    <a
                      href="tel:+92 55 3857252"
                      className={style.C5684CONTACTLINK}
                    >
                      +92 55 3857252,
                    </a>
                    <a
                      href="tel:+92 55 3731955"
                      className={style.C5684CONTACTLINK}
                    >
                      +92 55 3731955
                    </a>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-start mb-4">
                  <img src="/loc.svg" className="me-3 mt-1" alt="" />
                  <a href="#" className={style.C5684CONTACTLINK}>
                    142 Mumtaz market G.T. Road, Adjacent McDonald, Gujranwala
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: "5.75rem" }}>
          <p className={style.V458765HEADINGDARK}>Our Branch Network</p>
          <div className={`pb-4 ${style.S7458ROW}`}>
            <div className={style.S76545COLUMN}>
              <div className={style.C565334CARD}>
                <div className="py-4 px-3">
                  <p className={style.C56843CARDHEADING}>Head Office</p>
                  <div className="ms-4 position-relative">
                    <img
                      src="/loc-red.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Location</p>
                    <p className={style.C5684CONTACTLINK}>
                      142 Mumtaz market G.T. Road, Adjacent McDonald, Gujranwala
                    </p>
                  </div>
                  <div className="ms-4 position-relative">
                    <img
                      src="/phone-green.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Cell No.</p>
                    <p
                      className={`ms-4 d-flex align-items-center flex-wrap ${style.C5684CONTACTLINK}`}
                      style={{ columnGap: "1.95rem" }}
                    >
                      <a href="tel:+92 55 3731955" className={style.C86445CELL}>
                        +92 55 3731955
                      </a>
                      <a href="tel:+92 55 3857252" className={style.C86445CELL}>
                        +92 55 3857252,
                      </a>
                      <a href="tel:+923008643033" className={style.C86445CELL}>
                        +92 301 8643033
                      </a>
                    </p>
                  </div>
                  <div className="ms-4 position-relative">
                    <img
                      src="/person-purple.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Contact Person</p>
                    <p
                      className={`ms-4 d-flex align-items-center flex-wrap ${style.C5684CONTACTLINK}`}
                      style={{ columnGap: "1.95rem" }}
                    >
                      <a className={style.C86445CELL}>Sajjad Saeed Minhas</a>
                    </p>
                    {/* <p
                      className={`ms-4 d-flex align-items-center flex-wrap ${style.C5684CONTACTLINK}`}
                      style={{ columnGap: "1.95rem" }}
                    >
                      <span className={`w-100 ${style.C86445CELL}`}>
                        0333-4213122
                      </span>
                      <span className={`w-100 ${style.C86445CELL}`}>
                        0300-9643033
                      </span>
                    </p> */}
                  </div>
                  <div className="ms-4 position-relative">
                    <img
                      src="/email.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Email</p>
                    <ul className={style.ulPad} style={{ listStyle: "none" }}>
                      <li className={style.EMAIL56745LISTBULLETS}>
                        <a
                          href="mailto:sajjad.saeed@fksbuildingservices.com"
                          className={style.EMAIL734567LIST}
                        >
                          sajjad.saeed@fksbuildingservices.com
                        </a>
                      </li>
                      <li className={style.EMAIL56745LISTBULLETS}>
                        <a
                          href="mailto:fksbs111@gmail.com"
                          className={style.EMAIL734567LIST}
                        >
                          fksbs111@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.S76545COLUMN}>
              <div className={style.C565334CARD}>
                <div className="py-4 px-3">
                  <p className={style.C56843CARDHEADING}>Lahore Office</p>
                  <div className="ms-4 position-relative">
                    <img
                      src="/loc-red.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Location</p>
                    <p className={style.C5684CONTACTLINK}>
                      Suite # 26, 4th Floor, Big City Plaza, Gulberg III, Lahore
                    </p>
                  </div>
                  <div className="ms-4 position-relative">
                    <img
                      src="/phone-green.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Cell No.</p>
                    <p
                      className={`ms-4 d-flex align-items-center flex-wrap ${style.C5684CONTACTLINK}`}
                      style={{ columnGap: "1.95rem" }}
                    >
                      <a href="tel:03334213122" className={style.C86445CELL}>
                        0333-4213122
                      </a>
                      <a href="tel:03009643033" className={style.C86445CELL}>
                        0300-9643033
                      </a>
                      <a href="tel:03007422131" className={style.C86445CELL}>
                        0300-7422131
                      </a>
                    </p>
                  </div>
                  <div className="ms-4 position-relative">
                    <img
                      src="/person-purple.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Contact Person</p>
                    <p
                      className={`ms-4 d-flex align-items-center flex-wrap ${style.C5684CONTACTLINK}`}
                      style={{ columnGap: "1.95rem" }}
                    >
                      <a className={style.C86445CELL}>
                        Engr. Shahzad Khalid Minhas
                      </a>
                    </p>
                    {/* <p
                      className={`ms-4 d-flex align-items-center flex-wrap ${style.C5684CONTACTLINK}`}
                      style={{ columnGap: "1.95rem" }}
                    >
                      <span className={`w-100 ${style.C86445CELL}`}>
                        0333-4213122
                      </span>
                      <span className={`w-100 ${style.C86445CELL}`}>
                        0300-9643033
                      </span>
                    </p> */}
                  </div>
                  <div className="ms-4 position-relative">
                    <img
                      src="/email.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Email</p>
                    <ul className={style.ulPad} style={{ listStyle: "none" }}>
                      <li className={style.EMAIL56745LISTBULLETS}>
                        <a
                          href="mailto:shahzad.khalid@fksbuildingservices.com"
                          className={style.EMAIL734567LIST}
                        >
                          shahzad.khalid@fksbuildingservices.com
                        </a>
                      </li>
                      <li className={style.EMAIL56745LISTBULLETS}>
                        <a
                          href="mailto:ali.khan@fksbuildingservices.com"
                          className={style.EMAIL734567LIST}
                        >
                          ali.khan@fksbuildingservices.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.S76545COLUMN}>
              <div className={style.C565334CARD}>
                <div className="py-4 px-3">
                  <p className={style.C56843CARDHEADING}>Islamabad Office</p>
                  <div className="ms-4 position-relative">
                    <img
                      src="/loc-red.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Location</p>
                    <p className={style.C5684CONTACTLINK}>
                      Shop # 3, Ground Floor, London Plaza, G-9 Markaz,
                      Islamabad
                    </p>
                  </div>
                  <div className="ms-4 position-relative">
                    <img
                      src="/phone-green.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Cell No.</p>
                    <p
                      className={`ms-4 d-flex align-items-center flex-wrap ${style.C5684CONTACTLINK}`}
                      style={{ columnGap: "1.95rem" }}
                    >
                      <a href="tel:+923355542502" className={style.C86445CELL}>
                        +92 335 5542502
                      </a>
                      <a href="tel:+923012224502" className={style.C86445CELL}>
                        +92 301 2224502
                      </a>
                    </p>
                  </div>
                  <div className="ms-4 position-relative">
                    <img
                      src="/person-purple.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Contact Person</p>
                    <p
                      className={`ms-4 d-flex align-items-center flex-wrap ${style.C5684CONTACTLINK}`}
                      style={{ columnGap: "1.95rem" }}
                    >
                      <a className={style.C86445CELL}>Danyal Saud</a>
                    </p>
                  </div>
                  <div className="ms-4 position-relative">
                    <img
                      src="/email.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Email</p>
                    <ul className={style.ulPad} style={{ listStyle: "none" }}>
                      <li className={style.EMAIL56745LISTBULLETS}>
                        <a
                          href="mailto:adil.saleem@fksbuildingservices.com"
                          className={style.EMAIL734567LIST}
                        >
                          danyal.saud@fksbuildingservices.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.S76545COLUMN}>
              <div className={style.C565334CARD}>
                <div className="py-4 px-3">
                  <p className={style.C56843CARDHEADING}>Multan Office</p>
                  <div className="ms-4 position-relative">
                    <img
                      src="/loc-red.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Location</p>
                    <p className={style.C5684CONTACTLINK}>
                      175-A Post Office street, Nawan Sheher Multan
                    </p>
                  </div>
                  <div className="ms-4 position-relative">
                    <img
                      src="/phone-green.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Cell No.</p>
                    <p
                      className={`ms-4 d-flex align-items-center flex-wrap ${style.C5684CONTACTLINK}`}
                      style={{ columnGap: "1.95rem" }}
                    >
                      <a href="tel:+923086423842" className={style.C86445CELL}>
                        +92 308 6423842
                      </a>
                      <a href="tel:+923236423842" className={style.C86445CELL}>
                        +92 323 6423842
                      </a>
                    </p>
                  </div>
                  <div className="ms-4 position-relative">
                    <img
                      src="/person-purple.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Contact Person</p>
                    <p
                      className={`ms-4 d-flex align-items-center flex-wrap ${style.C5684CONTACTLINK}`}
                      style={{ columnGap: "1.95rem" }}
                    >
                      <a className={style.C86445CELL}>Burhan Mohsin</a>
                    </p>
                  </div>
                  <div className="ms-4 position-relative">
                    <img
                      src="/email.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Email</p>
                    <ul className={style.ulPad} style={{ listStyle: "none" }}>
                      <li className={style.EMAIL56745LISTBULLETS}>
                        <a
                          href="mailto:adil.saleem@fksbuildingservices.com"
                          className={style.EMAIL734567LIST}
                        >
                          burhan.mohsin@fksbuildingservices.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.S76545COLUMN}>
              <div className={style.C565334CARD}>
                <div className="py-4 px-3">
                  <p className={style.C56843CARDHEADING}>Faisalabad Office</p>
                  <div className="ms-4 position-relative">
                    <img
                      src="/loc-red.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Location</p>
                    <p className={style.C5684CONTACTLINK}>
                      FKS Building Services, Near Ittefaq Masjid, Street #6,
                      Block-Z, Madina Town, Faisalabad
                    </p>
                  </div>
                  <div className="ms-4 position-relative">
                    <img
                      src="/phone-green.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Cell No.</p>
                    <p
                      className={`ms-4 d-flex align-items-center flex-wrap ${style.C5684CONTACTLINK}`}
                      style={{ columnGap: "1.95rem" }}
                    >
                      <a href="tel:+923446002466" className={style.C86445CELL}>
                        +92 344 6002466
                      </a>
                    </p>
                  </div>
                  <div className="ms-4 position-relative">
                    <img
                      src="/person-purple.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Contact Person</p>
                    <p
                      className={`ms-4 d-flex align-items-center flex-wrap ${style.C5684CONTACTLINK}`}
                      style={{ columnGap: "1.95rem" }}
                    >
                      <a className={style.C86445CELL}>Muhammad Ali</a>
                    </p>
                  </div>
                  <div className="ms-4 position-relative">
                    <img
                      src="/email.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Email</p>
                    <ul className={style.ulPad} style={{ listStyle: "none" }}>
                      <li className={style.EMAIL56745LISTBULLETS}>
                        <a
                          href="mailto:adil.saleem@fksbuildingservices.com"
                          className={style.EMAIL734567LIST}
                        >
                          ali.khan@fksbuildingservices.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.S76545COLUMN}>
              <div className={style.C565334CARD}>
                <div className="py-4 px-3">
                  <p className={style.C56843CARDHEADING}>Mingora Office</p>
                  <div className="ms-4 position-relative">
                    <img
                      src="/loc-red.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Location</p>
                    <p className={style.C5684CONTACTLINK}>
                      Bunar Road, Tahir Abad Mingora, Swat
                    </p>
                  </div>
                  <div className="ms-4 position-relative">
                    <img
                      src="/phone-green.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Cell No.</p>
                    <p
                      className={`ms-4 d-flex align-items-center flex-wrap ${style.C5684CONTACTLINK}`}
                      style={{ columnGap: "1.95rem" }}
                    >
                      <a href="tel:+923355542502" className={style.C86445CELL}>
                        +92 335 5542502
                      </a>
                      <a href="tel:+923012224502" className={style.C86445CELL}>
                        +92 301 2224502
                      </a>
                    </p>
                  </div>
                  <div className="ms-4 position-relative">
                    <img
                      src="/person-purple.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Contact Person</p>
                    <p
                      className={`ms-4 d-flex align-items-center flex-wrap ${style.C5684CONTACTLINK}`}
                      style={{ columnGap: "1.95rem" }}
                    >
                      <a className={style.C86445CELL}>Danyal Saud</a>
                    </p>
                  </div>
                  <div className="ms-4 position-relative">
                    <img
                      src="/email.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Email</p>
                    <ul className={style.ulPad} style={{ listStyle: "none" }}>
                      <li className={style.EMAIL56745LISTBULLETS}>
                        <a
                          href="mailto:adil.saleem@fksbuildingservices.com"
                          className={style.EMAIL734567LIST}
                        >
                          danyal.saud@fksbuildingservices.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className={style.S76545COLUMN}>
              <div className={style.C565334CARD}>
                <div className="py-4 px-3">
                  <p className={style.C56843CARDHEADING}>Mingora Office</p>
                  <div className="ms-4 position-relative">
                    <img
                      src="/loc-red.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Location</p>
                    <p className={style.C5684CONTACTLINK}>
                      Bunar Road, Tahir Abad Mingora, Swat
                    </p>
                  </div>
                  <div className="ms-4 position-relative">
                    <img
                      src="/phone-green.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Cell No.</p>
                    <p
                      className={`ms-4 d-flex align-items-center flex-wrap ${style.C5684CONTACTLINK}`}
                      style={{ columnGap: "1.95rem" }}
                    >
                      <a href="tel:03334213122" className={style.C86445CELL}>
                        0322-6117700
                      </a>
                    </p>
                  </div>
                  <div className="ms-4 position-relative">
                    <img
                      src="/person-purple.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Contact Person</p>
                    <ul className={style.ulPad} style={{ listStyle: "none" }}>
                      <li className={style.EMAIL56745LISTBULLETS}>
                        <a href="#" className={style.EMAIL734567LIST}>
                          Mr. Badar Mahmood
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="ms-4 position-relative">
                    <img
                      src="/email.svg"
                      className={style.PIMG56783LOC}
                      alt=""
                    />
                    <p className={style.SH87653456SUBHEADING}>Email</p>
                    <ul style={{ listStyle: "none" }}>
                      <li className={style.EMAIL56745LISTBULLETS}>
                        <a
                          href="mailto:adil.saleem@fksbuildingservices.com"
                          className={style.EMAIL734567LIST}
                        >
                          danyal.saud@fksbuildingservices.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
