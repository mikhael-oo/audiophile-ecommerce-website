import Banner from "../banner/Banner"
import Products from "./Products"
import ProductLinks from "../homepage/ProductLinks"
import Audio from "../homepage/Audio"
import Footer from "../footer/Footer"

export default function Speaker() {
    return (
        <main>
            <Banner title="Speakers" />
            <Products />
            <ProductLinks />
            <Audio />
            <Footer />
        </main>
    )
}