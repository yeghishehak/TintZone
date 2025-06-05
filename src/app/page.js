import Header from "../components/header"
import Herosection from "../components/herosection"
import Section1 from "../components/AboutUsComponents/section1"
import Section2 from "../components/AboutUsComponents/section2"
import Services from "../components/ServicesComponents/prices"
import Gallery from "../components/GalleryComponents/section"
import Footer from "../components/Footer/footer"

export default function Home() {
  return (
    <div>
      <Header />
      <Herosection />
      <Section1 />
      <Section2 />
      <Services />
      <Gallery />
      <Footer />
    </div>
  );
}
