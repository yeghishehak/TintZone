import Header from "../../components/header"
import Section1 from "../../components/AboutUsComponents/section1"
import Section2 from "../../components/AboutUsComponents/section2"
import Tips from "../../components/AboutUsComponents/tips"
import Footer from "../../components/Footer/footer";

export default function About() {
    return (
        <div>
            <Header />
            <Section1 />
            <Section2 />
            <Tips />
            <Footer />
        </div>
    )
}