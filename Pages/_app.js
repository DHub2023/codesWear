import Footer from "@/components/Footer";
import "../app/globals.css";
import Navbar from "@/components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
