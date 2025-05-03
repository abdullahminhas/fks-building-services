import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { useEffect } from "react";
import Navbar from "./components/navbar/navbar";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  return (
    <>
      <Navbar /> <Component {...pageProps} />
    </>
  );
}

export default MyApp;
