import Banner from "../banner/Banner";
import Products from "./Products";
import ProductLinks from "../homepage/ProductLinks";
import Audio from "../homepage/Audio";
import Footer from "../footer/Footer";

export default function Earphones() {
    return (
        <main>
            <Banner title="Earphones" />
            <Products />
            <ProductLinks />
            <Audio />
            <Footer />
        </main>
    )
}