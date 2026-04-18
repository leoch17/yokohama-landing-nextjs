import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Explore from "./_components/Explore";
import TireShop from "./_components/TireShop";
import Slogan from "./_components/Slogan";
import Sponsors from "./_components/Sponsors";
import Experience from "./_components/Experience";
import Footer from "./_components/Footer";
import BackToTop from "./_components/BackToTop";

export default function Home() {
  return (
    <>
      <BackToTop />
      <Header />
      <Banner />
      <Explore />
      <TireShop />
      <Slogan />
      <Sponsors />
      <Experience />
      <Footer />
    </>
  );
}
