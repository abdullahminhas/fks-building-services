import React from "react";
import { useRouter } from "next/router";
import style from "./footer.module.css";

const Footer = () => {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <footer className={`py-3 ${style.F3463478FOOTERWRAPPER}`}>
        <div className="d-flex flex-row justify-content-center">
          <p className={style.H3483HEADINGLOGO}>FKS Building Services</p>
        </div>
        <div className={style.W34983WIDTHRESP}>
          <span>
            <a
              onClick={() => router.push("/valuations")}
              className={style.A49435LINK}
            >
              Our Services
            </a>
          </span>
          <span>
            <a
              onClick={() => router.push("/about")}
              className={style.A49435LINK}
            >
              About Us
            </a>
          </span>
          <span>
            <a
              onClick={() => router.push("/contact")}
              className={style.A49435LINK}
            >
              Contact Us
            </a>
          </span>
        </div>
        <div className={style.H34572HORIZONTALDIVIDER}></div>
        <p className={style.C876534RIGHTTEXT}>
          @ {currentYear} FKS Building Services. All Rights Reserved
        </p>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
