import Hero from "./Hero"
import ProductLinks from "./ProductLinks"
import HighLightedProducts from "./HighLightedProducts"
import Footer from "../footer/Footer"
export default function Home() {
    return (
        <div>
            <Hero />
            <ProductLinks />
            <HighLightedProducts />
            <Footer />
        </div>
    )
}