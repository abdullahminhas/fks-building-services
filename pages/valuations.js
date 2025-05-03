import React from "react";
import Head from "next/head";
import Navbar from "./components/navbar/navbar";
import style from "../styles/Valuations.module.css";
import Footer from "./components/footer/footer";
import Link from "next/link";

const Valuations = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Valuation - FKS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Navbar /> */}
      <section>
        <div className={style.M5823WRAPPER}>
          <div className={style.W986545CIRCLE742WRAPPER}>
            <div className={style.W986545CIRCLE}>
              {/* <p className={style.T457875TEXT}>We Provide</p> */}
              <p className={style.T457875HEADING}>VALUATIONS</p>
              {/* <button className={`btn ${style.C276543BTN}`}>Contact Us</button> */}
            </div>
          </div>
        </div>
      </section>
      <div className="container" style={{ paddingTop: "5.75rem" }}>
        <section>
          <p className={style.V458765HEADINGDARK}>Valuations</p>
          <p className={style.S3456873SECOND}>
            FKS offers a wide range of valuation services and takes pride in our
            team of diverse talents, capable of providing expert guidance to
            both established business empires and new market entrants in
            identifying the optimal valuation for their enterprise. Our
            association with the esteemed Pakistan Banks Association (PBA)
            further underscores our credibility and expertise in this domain,
            and we remain committed to providing high-quality services to all
            our clients and partners.
          </p>
          <p className={style.S3456873SECOND}>
            Some of the services that we provide are as follows:
          </p>
          <div className={`pb-5 ${style.S7458ROW}`}>
            <div className={style.S76545COLUMN}>
              <div className={style.S7458CARD}>
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
                  <p className={style.S1352HEADING}>Residential Valuations</p>
                  <p className={`${style.S834369} text-cut-3`}>
                    At FKS Building Services, we specialize in providing expert
                    house evaluations that offer valuable insights to
                    homeowners, buyers, and sellers regarding the condition of
                    their properties. Our team of experienced engineers employs
                    a wide array of tools and techniques to assess properties
                    thoroughly, identifying any potential issues or areas that
                    may require improvement. By availing of our services, you
                    can make informed decisions about your home with confidence.
                  </p>

                  <Link className="text-decoration-none" href="/valResidential">
                    <p className={style.S8234234LINK}>See More</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className={style.S76545COLUMN}>
              <div className={style.S7458CARD}>
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
                  <p className={style.S1352HEADING}>Commercial Valuations</p>
                  <p className={`${style.S834369} text-cut-3`}>
                    Our team of experienced professionals is well-equipped to
                    provide accurate and comprehensive valuations for these
                    diverse commercial properties. We understand the unique
                    characteristics and dynamics of each property type, enabling
                    us to deliver valuable insights and reliable assessments to
                    our clients.
                  </p>

                  <Link className="text-decoration-none" href="/valCommercial">
                    <p className={style.S8234234LINK}>See More</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className={style.S76545COLUMN}>
              <div className={style.S7458CARD}>
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
                  <p className={style.S1352HEADING}>Equipment & Machinery</p>
                  <p className={`${style.S834369} text-cut-3`}>
                    With a keen focus on these specific industries, we possess
                    comprehensive insights into the equipment and machinery used
                    within them. Our team is well-versed in the intricacies of
                    valuing assets in these sectors, allowing us to provide
                    accurate and reliable assessments. Whether it's appraising
                    machinery in a rice mill or evaluating equipment in a
                    textile factory, we offer tailored solutions that meet the
                    unique needs of our clients in these industries.
                  </p>

                  <Link
                    className="text-decoration-none"
                    href="/valEquipMachine"
                  >
                    <p className={style.S8234234LINK}>See More</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className={style.S76545COLUMN}>
              <div className={style.S7458CARD}>
                <div className="card-body p-4">
                  <span
                    className={`${style.S2565WRAPP} ${style.BG35476WARNING}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={style.S87445SVG}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_87_618)">
                        <path d="M17.6471 9.17646V0.705872H6.35299V9.17646H0.705933V19.0588H23.2942V9.17646H17.6471ZM10.5883 17.647H2.1177V10.5882H4.94123V12H7.76476V10.5882H10.5883V17.647ZM7.76476 9.17646V2.11764H10.5883V3.5294H13.4118V2.11764H16.2353V9.17646H7.76476ZM21.8824 17.647H13.4118V10.5882H16.2353V12H19.0589V10.5882H21.8824V17.647ZM0.705933 23.2941H4.94123V21.8823H19.0589V23.2941H23.2942V20.4706H0.705933V23.2941Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_87_618">
                          <rect
                            width="22.5882"
                            height="22.5882"
                            transform="translate(0.705933 0.705872)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <p className={style.S1352HEADING}>Business & Asset</p>
                  <p className={`${style.S834369} text-cut-3`}>
                    At F.K.S. Building Services, we understand that a business
                    valuation is more than just a numerical exercise. Our team
                    of skilled valuation experts recognizes the intricacies
                    involved and takes the time to thoroughly comprehend the
                    professional dynamics and key value drivers of a business.
                    Our experienced business and asset valuers bring a wealth of
                    knowledge and draw upon their extensive experience in the
                    field. They employ a comprehensive approach, considering
                    various valuation approaches that are applicable to the
                    specific circumstances of each business. This includes a
                    thorough analysis of financial data, market trends, industry
                    benchmarks, and other relevant factors that impact the value
                    of the business. By delving into the unique aspects and
                    understanding the intricate dynamics of each business, we
                    provide insightful and accurate valuations. We recognize
                    that value is derived from a combination of tangible and
                    intangible factors, and our experts take all these elements
                    into consideration to deliver comprehensive and
                    well-informed valuations. With our specialized expertise and
                    meticulous approach, we ensure that our clients receive
                    reliable and tailored valuations that capture the true value
                    of their businesses and assets.
                  </p>

                  <Link
                    className="text-decoration-none"
                    href="/valBusinessAsset"
                  >
                    <p className={style.S8234234LINK}>See More</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className={style.S76545COLUMN}>
              <div className={style.S7458CARD}>
                <div className="card-body p-4">
                  <span
                    className={`${style.S2565WRAPP} ${style.BG35476PRIMARY1}`}
                  >
                    <svg
                      viewBox="0 0 34 34"
                      className={style.S87445SVG}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.3522 3.86328L19.1169 8.06575L16.7028 5.64952L15.1781 7.17422L15.9722 7.96834L10.5468 13.3938C9.93034 14.0136 9.5843 14.8522 9.5843 15.7263C9.5843 16.6005 9.93034 17.4391 10.5468 18.0589L12.4993 20.0114L4.58984 27.8859L6.11455 29.4106L13.988 21.5012L15.9404 23.4515C16.5602 24.068 17.3989 24.414 18.273 24.414C19.1472 24.414 19.9858 24.068 20.6056 23.4515L26.0321 18.025L26.8262 18.8192L28.3509 17.2945L25.9325 14.8814L30.134 10.6461L28.6463 9.1574L24.411 13.3609L20.6384 9.58728L24.842 5.35199L23.3522 3.86328ZM17.462 9.45387L24.5434 16.5353L19.1169 21.9639C18.7061 22.3736 17.84 22.3736 17.4291 21.9639L12.0365 16.5702C11.6257 16.1594 11.6257 15.2933 12.0365 14.8825L17.462 9.45599V9.45387Z" />
                    </svg>
                  </span>
                  <p className={style.S1352HEADING}>Rental Valuations</p>
                  <p className={`${style.S834369} text-cut-3`}>
                    As a property owner or investor, setting a realistic rental
                    price is crucial to attracting prospective tenants and
                    maximizing your rental income. At F.K.S. Building Services,
                    we offer rental valuation services specifically designed to
                    help you determine the potential rental income for your
                    property. Our experienced team specializes in assessing
                    market trends, property features, location, and other
                    relevant factors to provide you with an accurate estimation
                    of the rental value. By leveraging our expertise, you can
                    make informed decisions regarding pricing, repairs, and
                    improvements that can enhance the appeal and profitability
                    of your property. Whether you own residential, commercial,
                    or mixed-use properties, our rental valuation services
                    provide valuable insights to help you optimize your rental
                    income. By setting the right rental price, you can attract
                    quality tenants, minimize vacancies, and achieve a favorable
                    return on your investment. Partner with us to benefit from
                    our professional rental valuation services and ensure that
                    your property makes the most of its initial interest from
                    prospective tenants.
                  </p>

                  <Link className="text-decoration-none" href="/valRental">
                    <p className={style.S8234234LINK}>See More</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className={style.S76545COLUMN}>
              <div className={style.S7458CARD}>
                <div className="card-body p-4">
                  <span
                    className={`${style.S2565WRAPP} ${style.BG35476PRIMARY2}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={style.S87445SVG}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_87_627)">
                        <path d="M20.1319 3.41646V1.60941H3.86841V3.41646H0.706055V22.8423H2.51311V5.22352H3.86841V7.03058H20.1319V5.22352H21.4872V22.8423H23.2943V3.41646H20.1319ZM19.7037 13.8071L16.7559 8.78117C16.6389 8.56387 16.3448 8.38588 16.1026 8.38588H7.89725C7.6551 8.38588 7.361 8.56387 7.24444 8.78117L4.29713 13.8071C3.81284 13.8071 3.41664 14.2136 3.41664 14.7106V19.2282C3.41664 19.7252 3.81284 20.1318 4.29713 20.1318H5.2237V21.4871C5.2237 22.2325 5.77169 22.8423 6.49768 22.8423H6.93815C7.66413 22.8423 8.38605 22.2325 8.38605 21.4871V20.1318H15.6143V21.4871C15.6143 22.2325 16.3358 22.8423 17.0622 22.8423H17.5027C18.2287 22.8423 18.7766 22.2325 18.7766 21.4871V20.1318H19.7037C20.1875 20.1318 20.5837 19.7252 20.5837 19.2282V14.7106C20.5837 14.2136 20.1875 13.8071 19.7037 13.8071ZM5.83765 17.4212C5.23003 17.4212 4.73715 16.9156 4.73715 16.2918C4.73715 15.6679 5.23003 15.1623 5.83765 15.1623C6.44573 15.1623 6.93815 15.6679 6.93815 16.2918C6.93815 16.9156 6.44573 17.4212 5.83765 17.4212ZM6.49768 13.8071L8.50171 10.145C8.61013 9.92278 8.897 9.74117 9.13869 9.74117H14.8612C15.1033 9.74117 15.3902 9.92278 15.4982 10.145L17.5027 13.8071H6.49768ZM18.1627 17.4212C17.5551 17.4212 17.0622 16.9156 17.0622 16.2918C17.0622 15.6679 17.5551 15.1623 18.1627 15.1623C18.7708 15.1623 19.2636 15.6679 19.2636 16.2918C19.2636 16.9156 18.7703 17.4212 18.1627 17.4212Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_87_627">
                          <rect
                            width="22.5882"
                            height="22.5882"
                            transform="translate(0.706055 0.705872)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <p className={style.S1352HEADING}>Commodities & Stock</p>
                  <p className={`${style.S834369} text-cut-3`}>
                    The primary objective of stocks valuation is to safeguard
                    the financial risk and interests of Banks and Financial
                    Institutions. By conducting thorough stocks valuation, these
                    institutions aim to ensure the safety and security of their
                    investments in the subject stocks. Through the valuation
                    process, various factors related to the stocks are carefully
                    assessed to determine their value and potential risks. This
                    includes analyzing financial statements, market conditions,
                    industry trends, and other relevant factors. The goal is to
                    provide a comprehensive evaluation that helps Banks and
                    Financial Institutions make informed decisions regarding
                    their investments in stocks. By valuing stocks, these
                    institutions can mitigate financial risks, identify
                    potential areas of concern, and assess the overall stability
                    and profitability of their investments. It allows them to
                    make sound investment decisions, allocate resources
                    effectively, and protect their interests in the stock
                    market. Ultimately, stocks valuation plays a crucial role in
                    ensuring that Banks and Financial Institutions can make
                    informed and prudent choices regarding their financial risk
                    exposure and maintain the security of their investments in
                    stocks.
                  </p>

                  <Link
                    className="text-decoration-none"
                    href="/valCommoditiesStock"
                  >
                    <p className={style.S8234234LINK}>See More</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className={style.S76545COLUMN}>
              <div className={style.S7458CARD}>
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
                  <p className={style.S1352HEADING}>Vehicle Inspection</p>
                  <p className={`${style.S834369} text-cut-3`}>
                    F.K.S. Building Services proudly stands as the premier
                    provider of vehicle valuation solutions in Pakistan,
                    catering specifically to the banking and insurance industry.
                    Our comprehensive vehicle valuation services are designed to
                    accurately determine the current market value of vehicles,
                    ensuring they are insured or financed at their true worth.
                    Vehicle valuations play a critical role in enabling accurate
                    insurance coverage and financing decisions. By assessing the
                    market value of a vehicle, our services provide the
                    necessary information for insurance companies to determine
                    the appropriate coverage and premiums. Similarly, financial
                    institutions rely on our valuations to assess the value of a
                    vehicle when offering financing options. Our team of experts
                    utilizes industry-leading methodologies and market analysis
                    to provide reliable and precise vehicle valuations. By
                    considering various factors such as make, model, condition,
                    mileage, and market trends, we ensure that the valuation
                    reflects the true worth of the vehicle. With F.K.S. Building
                    Services as your trusted provider, you can have confidence
                    in the accuracy and integrity of our vehicle valuation
                    solutions. Our commitment to excellence and industry
                    expertise has made us the preferred choice for banks and
                    insurance companies in Pakistan. Ensure your vehicle is
                    insured or financed at its real value. Choose F.K.S.
                    Building Services for dependable and comprehensive vehicle
                    valuation solutions that meet the specific needs of the
                    banking and insurance industry.
                  </p>
                  <Link className="text-decoration-none" href="/valVechile">
                    <p className={style.S8234234LINK}>See More</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className={style.S76545COLUMN}>
              <div className={style.S7458CARD}>
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
                  <p className={style.S1352HEADING}>Solar systems</p>
                  <p className={`${style.S834369} text-cut-3`}>
                    As registered consultants with the renewable board
                    specializing in solar systems, F.K.S. Building Services is
                    dedicated to developing high-quality solar projects that
                    adhere to industry standards. Our team of engineers are
                    experts in the field and possess the knowledge and skills
                    necessary to design profitable solar projects. We follow a
                    comprehensive process to ensure the success and viability of
                    each solar project. It begins with a thorough site survey to
                    assess the suitability of the location and gather relevant
                    data. Yield analysis is then conducted to evaluate the solar
                    potential of the site, taking into account factors such as
                    solar irradiation, shading, and orientation. Careful
                    selection of products and vendors is a crucial aspect of our
                    approach. We collaborate with reputable suppliers to source
                    high-quality solar panels, inverters, mounting systems, and
                    other components necessary for the project. By choosing
                    reliable and efficient products, we ensure the long-term
                    performance and durability of the solar installation. The
                    preliminary design of the building is also taken into
                    consideration during the feasibility study. Our engineers
                    evaluate the structural aspects of the building to determine
                    the optimal placement and integration of the solar system.
                    This allows us to maximize energy generation while
                    maintaining the structural integrity of the building. Once
                    the site survey, yield analysis, product selection, and
                    preliminary design are completed, we prepare an initial
                    estimate that covers all aspects of the project. This
                    includes the costs of equipment, installation, permits,
                    maintenance, and any other relevant expenses. Our goal is to
                    provide you with a comprehensive understanding of the
                    investment required and the potential returns of the solar
                    project. By engaging F.K.S. Building Services for your solar
                    project, you can trust that our team will conduct a thorough
                    feasibility study and provide you with accurate and detailed
                    information. We strive to design solar projects that are not
                    only environmentally sustainable but also financially
                    viable, ensuring a profitable investment for our clients.
                    Count on us to deliver reliable, efficient, and profitable
                    solar projects that meet the highest industry standards.
                    Contact us today to discuss your solar project and begin the
                    journey toward clean and sustainable energy.
                  </p>
                  <Link className="text-decoration-none" href="/valSolar">
                    <p className={style.S8234234LINK}>See More</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Valuations;
