import Header from "../../components/header"
import Prices from "../../components/ServicesComponents/prices";
import Footer from "../../components/Footer/footer";
import Faq from "../../components/ServicesComponents/faq";

export default function Services() {
    return (
        <div>
            <Header />
            <Prices />
            <Faq />
            <Footer />
        </div>
    );
}