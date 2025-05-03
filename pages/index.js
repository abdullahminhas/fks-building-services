import React, { useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import style from "../styles/Home.module.css";
import Head from "next/head";
import Footer from "./components/footer/footer";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init();
  });

  return (
    <React.Fragment>
      <Head>
        <title>FKS Building Services</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Navbar /> */}
      <div className="container">
        <section id="mainSection">
          <div
            className="row justify-content-between align-items-end"
            style={{ minHeight: "calc(100vh - 56px)" }}
          >
            <div className={`col-md-6 mb-5 ${style.A34587BG}`}>
              <p className={style.A8534HEADING}>FKS Building Services</p>
              <p className={style.A3958PARA}>
                With an enduring dedication to excellence spanning over 29
                years, F.K.S Building Services has emerged as a highly esteemed
                entity within the banking industry, specifically renowned for
                its expertise in credit risk management and collateral
                management.
              </p>
              <div
                className={`d-flex flex-row align-items-center ${style.GAP9845}`}
              >
                <a
                  onClick={() => router.push("/contact")}
                  className={`btn ${style.BTN4743}`}
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <img src="/main.png" className={style.A4872IMG} alt="" />
            </div>
          </div>
        </section>
        <section id="serviceSection" className="pb-5">
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ marginTop: "5.65rem" }}
          >
            <p className={style.S345698SECOND}>Our Services</p>
            <p className={style.S3456873SECOND}>
              FKS offers a diverse range of valuation services, proudly
              presenting a team composed of multifaceted professionals capable
              of assisting both established business conglomerates and emerging
              market players in obtaining optimal valuations for their
              enterprises. Our association with and recognition by the Pakistan
              Banks Association (PBA) further underscores our credibility and
              expertise in this domain.
            </p>
          </div>
          <div className={style.S7458ROW}>
            <div className={style.S76545COLUMN}>
              <div className={`h-100 ${style.S7458CARD}`}>
                <div className="card-body p-4">
                  <span
                    className={`${style.S2565WRAPP} ${style.BG35476PRIMARY}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={style.S87445SVG}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_87_586)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.3532 23.2943C19.6636 23.2943 20.9205 22.7737 21.8471 21.847C22.7738 20.9204 23.2943 19.6636 23.2943 18.3531C23.2943 17.0426 22.7738 15.7858 21.8471 14.8592C20.9205 13.9325 19.6636 13.4119 18.3532 13.4119C17.0427 13.4119 15.7859 13.9325 14.8592 14.8592C13.9326 15.7858 13.412 17.0426 13.412 18.3531C13.412 19.6636 13.9326 20.9204 14.8592 21.847C15.7859 22.7737 17.0427 23.2943 18.3532 23.2943ZM20.7235 16.9512C20.7712 16.8717 20.8027 16.7835 20.8163 16.6918C20.8298 16.6001 20.8252 16.5066 20.8027 16.4167C20.7801 16.3268 20.7401 16.2422 20.6848 16.1677C20.6296 16.0932 20.5602 16.0304 20.4807 15.9827C20.4012 15.9351 20.313 15.9036 20.2213 15.89C20.1296 15.8764 20.0361 15.881 19.9462 15.9036C19.8562 15.9261 19.7716 15.9662 19.6972 16.0214C19.6227 16.0767 19.5599 16.146 19.5122 16.2256L17.8605 18.9785L17.0882 18.2063C16.9557 18.0737 16.7759 17.9993 16.5885 17.9993C16.401 17.9993 16.2212 18.0737 16.0887 18.2063C15.9561 18.3388 15.8817 18.5186 15.8817 18.706C15.8817 18.8935 15.9561 19.0733 16.0887 19.2058L17.1814 20.2971C17.2951 20.4111 17.4334 20.4976 17.5856 20.5501C17.7378 20.6026 17.8999 20.6197 18.0597 20.6001C18.2195 20.5805 18.3728 20.5247 18.5078 20.437C18.6428 20.3492 18.756 20.2319 18.8388 20.0938L20.7235 16.9512Z"
                        />
                        <path d="M3.52917 2.11764C3.52917 1.74321 3.67791 1.38413 3.94267 1.11937C4.20743 0.854611 4.56652 0.705872 4.94094 0.705872L19.0586 0.705872C19.433 0.705872 19.7921 0.854611 20.0569 1.11937C20.3216 1.38413 20.4704 1.74321 20.4704 2.11764V11.2941C20.4704 11.4813 20.396 11.6609 20.2636 11.7932C20.1312 11.9256 19.9517 12 19.7645 12C19.5773 12 19.3977 11.9256 19.2653 11.7932C19.133 11.6609 19.0586 11.4813 19.0586 11.2941V2.11764H4.94094V21.8823H9.17623V18.3529C9.17623 18.1657 9.2506 17.9862 9.38298 17.8538C9.51536 17.7214 9.6949 17.647 9.88212 17.647H11.9998V23.2941H4.94094C4.56652 23.2941 4.20743 23.1454 3.94267 22.8806C3.67791 22.6159 3.52917 22.2568 3.52917 21.8823V2.11764Z" />
                        <path d="M7.05928 3.52911C6.87206 3.52911 6.69252 3.60348 6.56014 3.73586C6.42776 3.86824 6.35339 4.04778 6.35339 4.235V5.64676C6.35339 5.83397 6.42776 6.01352 6.56014 6.1459C6.69252 6.27827 6.87206 6.35264 7.05928 6.35264H8.47104C8.65825 6.35264 8.8378 6.27827 8.97017 6.1459C9.10255 6.01352 9.17692 5.83397 9.17692 5.64676V4.235C9.17692 4.04778 9.10255 3.86824 8.97017 3.73586C8.8378 3.60348 8.65825 3.52911 8.47104 3.52911H7.05928ZM11.2946 3.52911C11.1074 3.52911 10.9278 3.60348 10.7954 3.73586C10.6631 3.86824 10.5887 4.04778 10.5887 4.235V5.64676C10.5887 5.83397 10.6631 6.01352 10.7954 6.1459C10.9278 6.27827 11.1074 6.35264 11.2946 6.35264H12.7063C12.8935 6.35264 13.0731 6.27827 13.2055 6.1459C13.3378 6.01352 13.4122 5.83397 13.4122 5.64676V4.235C13.4122 4.04778 13.3378 3.86824 13.2055 3.73586C13.0731 3.60348 12.8935 3.52911 12.7063 3.52911H11.2946ZM15.5299 3.52911C15.3427 3.52911 15.1631 3.60348 15.0307 3.73586C14.8984 3.86824 14.824 4.04778 14.824 4.235V5.64676C14.824 5.83397 14.8984 6.01352 15.0307 6.1459C15.1631 6.27827 15.3427 6.35264 15.5299 6.35264H16.9416C17.1288 6.35264 17.3084 6.27827 17.4408 6.1459C17.5731 6.01352 17.6475 5.83397 17.6475 5.64676V4.235C17.6475 4.04778 17.5731 3.86824 17.4408 3.73586C17.3084 3.60348 17.1288 3.52911 16.9416 3.52911H15.5299ZM7.05928 7.76441C6.87206 7.76441 6.69252 7.83878 6.56014 7.97116C6.42776 8.10353 6.35339 8.28308 6.35339 8.47029V9.88206C6.35339 10.0693 6.42776 10.2488 6.56014 10.3812C6.69252 10.5136 6.87206 10.5879 7.05928 10.5879H8.47104C8.65825 10.5879 8.8378 10.5136 8.97017 10.3812C9.10255 10.2488 9.17692 10.0693 9.17692 9.88206V8.47029C9.17692 8.28308 9.10255 8.10353 8.97017 7.97116C8.8378 7.83878 8.65825 7.76441 8.47104 7.76441H7.05928ZM11.2946 7.76441C11.1074 7.76441 10.9278 7.83878 10.7954 7.97116C10.6631 8.10353 10.5887 8.28308 10.5887 8.47029V9.88206C10.5887 10.0693 10.6631 10.2488 10.7954 10.3812C10.9278 10.5136 11.1074 10.5879 11.2946 10.5879H12.7063C12.8935 10.5879 13.0731 10.5136 13.2055 10.3812C13.3378 10.2488 13.4122 10.0693 13.4122 9.88206V8.47029C13.4122 8.28308 13.3378 8.10353 13.2055 7.97116C13.0731 7.83878 12.8935 7.76441 12.7063 7.76441H11.2946ZM15.5299 7.76441C15.3427 7.76441 15.1631 7.83878 15.0307 7.97116C14.8984 8.10353 14.824 8.28308 14.824 8.47029V9.88206C14.824 10.0693 14.8984 10.2488 15.0307 10.3812C15.1631 10.5136 15.3427 10.5879 15.5299 10.5879H16.9416C17.1288 10.5879 17.3084 10.5136 17.4408 10.3812C17.5731 10.2488 17.6475 10.0693 17.6475 9.88206V8.47029C17.6475 8.28308 17.5731 8.10353 17.4408 7.97116C17.3084 7.83878 17.1288 7.76441 16.9416 7.76441H15.5299ZM7.05928 11.9997C6.87206 11.9997 6.69252 12.0741 6.56014 12.2064C6.42776 12.3388 6.35339 12.5184 6.35339 12.7056V14.1173C6.35339 14.3046 6.42776 14.4841 6.56014 14.6165C6.69252 14.7489 6.87206 14.8232 7.05928 14.8232H8.47104C8.65825 14.8232 8.8378 14.7489 8.97017 14.6165C9.10255 14.4841 9.17692 14.3046 9.17692 14.1173V12.7056C9.17692 12.5184 9.10255 12.3388 8.97017 12.2064C8.8378 12.0741 8.65825 11.9997 8.47104 11.9997H7.05928ZM11.2946 11.9997C11.1074 11.9997 10.9278 12.0741 10.7954 12.2064C10.6631 12.3388 10.5887 12.5184 10.5887 12.7056V14.1173C10.5887 14.3046 10.6631 14.4841 10.7954 14.6165C10.9278 14.7489 11.1074 14.8232 11.2946 14.8232H12.7063C12.8935 14.8232 13.0731 14.7489 13.2055 14.6165C13.3378 14.4841 13.4122 14.3046 13.4122 14.1173V12.7056C13.4122 12.5184 13.3378 12.3388 13.2055 12.2064C13.0731 12.0741 12.8935 11.9997 12.7063 11.9997H11.2946Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_87_586">
                          <rect
                            width="22.5882"
                            height="22.5882"
                            transform="translate(0.705933 0.705872)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <p className={style.S1352HEADING}>Valuations</p>
                  <p className={`${style.S834369} text-cut-3`}>
                    FKS offers a wide range of valuation services and takes
                    pride in our team of diverse talents, capable of providing
                    expert guidance to both established business empires and new
                    market entrants in identifying the optimal valuation for
                    their enterprise. Our association with the esteemed Pakistan
                    Banks Association (PBA) further underscores our credibility
                    and expertise in this domain, and we remain committed to
                    providing high-quality services to all our clients and
                    partners.
                  </p>

                  <p
                    className={style.S8234234LINK}
                    onClick={() => router.push("/valuations")}
                  >
                    See More
                  </p>
                </div>
              </div>
            </div>
            <div className={style.S76545COLUMN}>
              <div className={`h-100 ${style.S7458CARD}`}>
                <div className="card-body p-4">
                  <span
                    className={`${style.S2565WRAPP} ${style.BG35476DANGER}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className={style.S87445SVG}
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0z" />
                    </svg>
                  </span>
                  <p
                    className={style.S1352HEADING}
                    onClick={() => router.push("/valuations")}
                  >
                    Power Sector
                  </p>
                  <p className={`${style.S834369} text-cut-3`}>
                    At F.K.S. Building Services, we have a dedicated team of
                    engineers who specialize in the power sector, particularly
                    in grid stations, transmission lines, feeders, and
                    powerhouses. Our expertise in this area allows us to provide
                    comprehensive and accurate valuations for various power
                    infrastructure components. Some of the specific areas we
                    specialize in include
                  </p>

                  <p
                    className={style.S8234234LINK}
                    onClick={() => router.push("/valPowerSector")}
                  >
                    See More
                  </p>
                </div>
              </div>
            </div>
            <div className={style.S76545COLUMN}>
              <div className={`h-100 ${style.S7458CARD}`}>
                <div className="card-body p-4">
                  <span
                    className={`${style.S2565WRAPP} ${style.BG35476DANGER}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={style.S87445SVG}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.94141 12.0004H9.1767V13.4122H4.94141V12.0004ZM4.94141 9.17686H12.0002V10.5886H4.94141V9.17686ZM4.94141 6.35333H12.0002V7.7651H4.94141V6.35333Z" />
                      <path d="M10.5878 19.0585H3.52895V4.94088H20.4701V11.9997H21.8819V4.94088C21.8819 4.56646 21.7332 4.20737 21.4684 3.94261C21.2036 3.67785 20.8446 3.52911 20.4701 3.52911H3.52895C3.15453 3.52911 2.79544 3.67785 2.53068 3.94261C2.26593 4.20737 2.11719 4.56646 2.11719 4.94088V19.0585C2.11719 19.4329 2.26593 19.792 2.53068 20.0568C2.79544 20.3216 3.15453 20.4703 3.52895 20.4703H10.5878V19.0585Z" />
                      <path d="M16.2356 18.7697L14.4074 16.9415L13.4121 17.9368L16.2356 20.7603L21.8827 15.1133L20.8874 14.118L16.2356 18.7697Z" />
                    </svg>
                  </span>
                  <p
                    className={style.S1352HEADING}
                    onClick={() => router.push("/valuations")}
                  >
                    Stability Certificates
                  </p>
                  <p className={`${style.S834369} text-cut-3`}>
                    At F.K.S. Building Services, our stability certificates
                    encompass a comprehensive range of areas to provide you with
                    a thorough assessment of your property. We understand the
                    importance of ensuring structural integrity, energy
                    efficiency, environmental safety, and fire prevention
                    measures. Our certificates cover the following key areas
                  </p>

                  <p
                    className={style.S8234234LINK}
                    onClick={() => router.push("/valStabilityCertificates")}
                  >
                    See More
                  </p>
                </div>
              </div>
            </div>
            <div className={style.S76545COLUMN}>
              <div className={`h-100 ${style.S7458CARD}`}>
                <div className="card-body p-4">
                  <span
                    className={`${style.S2565WRAPP} ${style.BG35476DANGERLIGHT}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={style.S87445SVG}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_87_598)">
                        <path d="M11.002 2.8235C11.2668 2.55884 11.6258 2.41016 12.0001 2.41016C12.3745 2.41016 12.7335 2.55884 12.9983 2.8235L16.2354 6.06068V4.23527C16.2354 4.04805 16.3098 3.86851 16.4422 3.73613C16.5746 3.60375 16.7541 3.52938 16.9413 3.52938H18.3531C18.5403 3.52938 18.7198 3.60375 18.8522 3.73613C18.9846 3.86851 19.059 4.04805 19.059 4.23527V8.88421L22.3823 12.2061C22.4479 12.2717 22.4999 12.3496 22.5355 12.4354C22.571 12.5211 22.5893 12.613 22.5893 12.7059C22.5893 12.7987 22.571 12.8906 22.5355 12.9763C22.4999 13.0621 22.4479 13.14 22.3823 13.2056C22.3166 13.2712 22.2387 13.3233 22.153 13.3588C22.0672 13.3943 21.9753 13.4126 21.8825 13.4126C21.7897 13.4126 21.6978 13.3943 21.612 13.3588C21.5263 13.3233 21.4484 13.2712 21.3827 13.2056L12.0001 3.82162L4.94131 10.8804V19.7647C4.94131 19.9519 5.01568 20.1314 5.14806 20.2638C5.28044 20.3962 5.45998 20.4706 5.6472 20.4706H11.2943C11.4815 20.4706 11.661 20.5449 11.7934 20.6773C11.9258 20.8097 12.0001 20.9892 12.0001 21.1764C12.0001 21.3637 11.9258 21.5432 11.7934 21.6756C11.661 21.808 11.4815 21.8823 11.2943 21.8823H5.6472C5.08556 21.8823 4.54693 21.6592 4.14979 21.2621C3.75266 20.8649 3.52955 20.3263 3.52955 19.7647V12.2922L2.61755 13.2056C2.55192 13.2712 2.47401 13.3233 2.38826 13.3588C2.30251 13.3943 2.2106 13.4126 2.11778 13.4126C2.02497 13.4126 1.93306 13.3943 1.84731 13.3588C1.76156 13.3233 1.68365 13.2712 1.61802 13.2056C1.55239 13.14 1.50033 13.0621 1.46481 12.9763C1.42929 12.8906 1.41101 12.7987 1.41101 12.7059C1.41101 12.613 1.42929 12.5211 1.46481 12.4354C1.50033 12.3496 1.55239 12.2717 1.61802 12.2061L11.002 2.8235Z" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.3532 23.2945C19.6636 23.2945 20.9205 22.7739 21.8471 21.8472C22.7738 20.9206 23.2943 19.6638 23.2943 18.3533C23.2943 17.0428 22.7738 15.786 21.8471 14.8593C20.9205 13.9327 19.6636 13.4121 18.3532 13.4121C17.0427 13.4121 15.7859 13.9327 14.8592 14.8593C13.9326 15.786 13.412 17.0428 13.412 18.3533C13.412 19.6638 13.9326 20.9206 14.8592 21.8472C15.7859 22.7739 17.0427 23.2945 18.3532 23.2945ZM20.7235 16.9514C20.7712 16.8719 20.8027 16.7837 20.8163 16.692C20.8298 16.6003 20.8252 16.5068 20.8027 16.4169C20.7801 16.3269 20.7401 16.2423 20.6848 16.1679C20.6296 16.0934 20.5602 16.0306 20.4807 15.9829C20.4012 15.9353 20.313 15.9038 20.2213 15.8902C20.1296 15.8766 20.0361 15.8812 19.9462 15.9038C19.8562 15.9263 19.7716 15.9664 19.6972 16.0216C19.6227 16.0769 19.5599 16.1462 19.5122 16.2258L17.8605 18.9787L17.0882 18.2079C16.9559 18.0753 16.7763 18.0008 16.589 18.0007C16.4016 18.0005 16.2219 18.0748 16.0894 18.2072C15.9569 18.3395 15.8823 18.5191 15.8822 18.7064C15.8821 18.8938 15.9563 19.0734 16.0887 19.206L17.1814 20.2973C17.2951 20.4112 17.4334 20.4978 17.5856 20.5503C17.7378 20.6028 17.8999 20.6199 18.0597 20.6003C18.2195 20.5807 18.3728 20.5249 18.5078 20.4371C18.6428 20.3494 18.756 20.2321 18.8388 20.094L20.7235 16.9514Z"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_87_598">
                          <rect
                            width="22.5882"
                            height="22.5882"
                            transform="translate(0.706055 0.705872)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <p className={style.S1352HEADING}>Solar Systems</p>
                  <p className={`${style.S834369} text-cut-3`}>
                    As registered consultants with the Pakistan Engineering
                    Council specializing in solar systems, F.K.S. Building
                    Services is dedicated to developing high-quality solar
                    projects that adhere to industry standards. Our team of
                    engineers are experts in the field and possess the knowledge
                    and skills necessary to design profitable solar projects.
                  </p>

                  <p
                    className={style.S8234234LINK}
                    onClick={() => router.push("/valSolar")}
                  >
                    See More
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="partnerSection" className="mt-5">
          <p className={`text-center ${style.S345698SECOND}`}>
            Our Affiliations
          </p>
          <p className={style.S3456873SECOND}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non atque,
            exercitationem corporis quas, enim alias ut delectus numquam
            debitis, quis ad quo ullam laudantium dolores veniam optio saepe
            aliquam esse ipsa repudiandae eligendi? Dolores cupiditate nam amet,
            delectus consectetur, maxime eaque ullam commodi facilis, veritatis
            quasi officia? Aliquam, dolor eligendi.
          </p>
          <div className={style.P3454ROW}>
            <div className={style.P3454COLUMN}>
              <img src="/pec.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/pba.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/state.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/mcb.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/hblb.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/bop.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/askari.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/alfa.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/ztbl.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/faysal.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/fesco.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/fesco2.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/gepco.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/iesco.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/islami.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/lesco.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/mobilnk.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/nbp.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/pesco.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/railway.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/sme.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/soneri.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/ubl.png" className={style.logoImg} alt="" />
            </div>
            <div className={style.P3454COLUMN}>
              <img src="/bajk.png" className={style.logoImg} alt="" />
            </div>
          </div>
        </section>
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

export default Home;
