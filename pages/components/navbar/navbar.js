import React from "react";
import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <nav
        className="navbar sticky-top navbar-expand-lg navbar-light"
        style={{
          background: "#FFFFFF",
          boxShadow: "0px 6px 14px rgba(173, 173, 173, 0.25)",
        }}
      >
        <div className="container">
          <Link className="navbar-brand" href="/">
            <img src="/logo.svg" width={45} height={45} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={
                    router.pathname == "/"
                      ? `nav-link ${styles["navlink-custom"]} ${styles.activeRoute}`
                      : `nav-link ${styles["navlink-custom"]}`
                  }
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={
                    router.pathname.includes("val")
                      ? `nav-link dropdown-toggle ${styles["navlink-custom"]} ${styles.activeRoute}`
                      : `nav-link dropdown-toggle ${styles["navlink-custom"]}`
                  }
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  Services
                </a>
                <div
                  className={`dropdown-menu dropdown-menu-end p-4 mt-4 ${styles["navbar-dropdown"]}`}
                >
                  <p className="mb-2">
                    <Link
                      className={
                        router.pathname == "/valuations"
                          ? `${styles["dropdown-link-heading"]} ${styles.activeRoute}`
                          : `${styles["dropdown-link-heading"]}`
                      }
                      href="/valuations"
                    >
                      Valuations
                    </Link>
                  </p>
                  <ul>
                    <li className="text-muted">
                      <Link
                        className={
                          router.pathname == "/valPowerSector"
                            ? `${styles["dropdown-link-muted"]} ${styles.activeRoute}`
                            : `${styles["dropdown-link-muted"]}`
                        }
                        href="/valPowerSector"
                      >
                        Power Sector Valuation
                      </Link>
                    </li>
                    <li className="text-muted">
                      <Link
                        className={
                          router.pathname == "/valResidential"
                            ? `${styles["dropdown-link-muted"]} ${styles.activeRoute}`
                            : `${styles["dropdown-link-muted"]}`
                        }
                        href="/valResidential"
                      >
                        Residential Valuation
                      </Link>
                    </li>
                    <li className="text-muted">
                      <Link
                        className={
                          router.pathname == "/valCommercial"
                            ? `${styles["dropdown-link-muted"]} ${styles.activeRoute}`
                            : `${styles["dropdown-link-muted"]}`
                        }
                        href="/valCommercial"
                      >
                        Commercial Valuation
                      </Link>
                    </li>
                    <li className="text-muted">
                      <Link
                        className={
                          router.pathname == "/valEquipMachine"
                            ? `${styles["dropdown-link-muted"]} ${styles.activeRoute}`
                            : `${styles["dropdown-link-muted"]}`
                        }
                        href="/valEquipMachine"
                      >
                        Equipment Plant & Machinery Valuation
                      </Link>
                    </li>
                    <li className="text-muted">
                      <Link
                        className={
                          router.pathname == "/valBusinessAsset"
                            ? `${styles["dropdown-link-muted"]} ${styles.activeRoute}`
                            : `${styles["dropdown-link-muted"]}`
                        }
                        href="/valBusinessAsset"
                      >
                        Business & Assets Valuation
                      </Link>
                    </li>
                    <li className="text-muted">
                      <Link
                        className={
                          router.pathname == "/valRental"
                            ? `${styles["dropdown-link-muted"]} ${styles.activeRoute}`
                            : `${styles["dropdown-link-muted"]}`
                        }
                        href="/valRental"
                      >
                        Rental Valuation
                      </Link>
                    </li>
                    <li className="text-muted">
                      <Link
                        className={
                          router.pathname == "/valCommoditiesStock"
                            ? `${styles["dropdown-link-muted"]} ${styles.activeRoute}`
                            : `${styles["dropdown-link-muted"]}`
                        }
                        href="/valCommoditiesStock"
                      >
                        Commodity & Stock Valuation
                      </Link>
                    </li>
                    <li className="text-muted">
                      <Link
                        className={
                          router.pathname == "/valVechile"
                            ? `${styles["dropdown-link-muted"]} ${styles.activeRoute}`
                            : `${styles["dropdown-link-muted"]}`
                        }
                        href="/valVechile"
                      >
                        Vehicle Inspection
                      </Link>
                    </li>
                    <li className="text-muted">
                      <Link
                        className={
                          router.pathname == "/valBOQ"
                            ? `${styles["dropdown-link-muted"]} ${styles.activeRoute}`
                            : `${styles["dropdown-link-muted"]}`
                        }
                        href="/valBOQ"
                      >
                        Bill Of Quantity
                      </Link>
                    </li>
                    {/* <li className="text-muted">
                      <Link
                        className={
                          router.pathname == "/valSolar"
                            ? `${styles["dropdown-link-muted"]} ${styles.activeRoute}`
                            : `${styles["dropdown-link-muted"]}`
                        }
                        href="/valSolar"
                      >
                        Solar Systems
                      </Link>
                    </li> */}
                  </ul>
                  <p className="mt-2 mb-0">
                    <Link
                      className={
                        router.pathname == "/valSolar"
                          ? `${styles["dropdown-link-heading"]} ${styles.activeRoute}`
                          : `${styles["dropdown-link-heading"]}`
                      }
                      href="/valSolar"
                    >
                      Solar Systems
                    </Link>
                  </p>
                  <p className="mt-2 mb-0">
                    <Link
                      className={
                        router.pathname == "/valStabilityCertificates"
                          ? `${styles["dropdown-link-heading"]} ${styles.activeRoute}`
                          : `${styles["dropdown-link-heading"]}`
                      }
                      href="/valStabilityCertificates"
                    >
                      Stability Certificates
                    </Link>
                  </p>
                  {/* <p>
                    <Link className={styles["dropdown-link-heading"]} href="#">
                      International Business Reporting
                    </Link>
                  </p>
                  <p>
                    <Link
                      className={styles["dropdown-link-heading"]}
                      onClick={() => router.push("/credentials")}
                      href="#"
                    >
                      Credentials Checking
                    </Link>
                  </p> */}
                </div>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    router.pathname == "/about"
                      ? `nav-link ${styles["navlink-custom"]} ${styles.activeRoute}`
                      : `nav-link ${styles["navlink-custom"]}`
                  }
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    router.pathname == "/contact"
                      ? `nav-link ${styles["navlink-custom"]} ${styles.activeRoute}`
                      : `nav-link ${styles["navlink-custom"]}`
                  }
                  href="/contact"
                >
                  {/* onClick={() => router.push("/contact")} */}
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
