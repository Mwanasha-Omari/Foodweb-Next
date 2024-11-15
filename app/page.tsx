import Navbar from "./Navbar";
import Content from "./Content";
import OffersSection from "./Offers";
import ServiceSection from "./Services";
import Clientcontent from "./Clientscontent";
import DownloadSection from "./DownloadSection";
import Footer from "./Footer";

export default function Home() {
  return (
  <main>
    <Navbar/>
    <Content/>
    <OffersSection/>
    <ServiceSection/>
    <Clientcontent/>
    <DownloadSection/>
    <Footer/>
  </main>

  );
}

