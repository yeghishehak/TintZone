import Header from "../components/header"
import Herosection from "../components/herosection"
import Section1 from "../components/AboutUsComponents/section1"
import Section2 from "../components/AboutUsComponents/section2"
import Tips from "../components/AboutUsComponents/tips"
import Services from "../components/ServicesComponents/prices"
import Faq from "../components/ServicesComponents/faq"
import Gallery from "../components/GalleryComponents/section"
import Footer from "../components/Footer/footer"
import Contact from "../components/ContactComponents/contactus"

export default function Home() {
  return (
    <div>
      <Header />
      <Herosection />
      <Section1 />
      <Section2 />
      <Tips />
      <Services />
      <Faq />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
