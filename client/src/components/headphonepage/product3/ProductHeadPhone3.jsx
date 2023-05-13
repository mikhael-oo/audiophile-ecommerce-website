import {useState} from "react";
import { useNavigate } from "react-router-dom";

import Features from "./Features";
import Suggestions from "./Suggestions";
import ProductLinks from "../../homepage/ProductLinks";
import Audio from "../../homepage/Audio";
import Footer from "../../footer/Footer";

import HeadPhone2Desktop from "../../../assets/product-xx59-headphones/desktop/image-product.jpg";
import HeadPhone2Tablet from "../../../assets/product-xx59-headphones/tablet/image-product.jpg";
import HeadPhone2Mobile from "../../../assets/product-xx59-headphones/mobile/image-product.jpg";
import Gallery1Desktop from "../../../assets/product-xx59-headphones/desktop/image-gallery-1.jpg";
import Gallery1Tablet from "../../../assets/product-xx59-headphones/tablet/image-gallery-1.jpg";
import Gallery1Mobile from "../../../assets/product-xx59-headphones/mobile/image-gallery-1.jpg";
import Gallery2Desktop from "../../../assets/product-xx59-headphones/desktop/image-gallery-2.jpg";
import Gallery2Tablet from "../../../assets/product-xx59-headphones/tablet/image-gallery-2.jpg";
import Gallery2Mobile from "../../../assets/product-xx59-headphones/mobile/image-gallery-2.jpg";
import Gallery3Desktop from "../../../assets/product-xx59-headphones/desktop/image-gallery-3.jpg";
import Gallery3Tablet from "../../../assets/product-xx59-headphones/tablet/image-gallery-3.jpg";
import Gallery3Mobile from "../../../assets/product-xx59-headphones/mobile/image-gallery-3.jpg";

export default function ProductHeadPhone3() {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const handleCountIncrement = () => {
        setCount(count + 1);
    }

    const handleCountDecrement = () => {
       if (count > 0) 
          setCount(count - 1);
    }

    const navigateBack = () => {
        navigate(-1);
    }
    
    return (
      <div>
        <div className=" max-w-[1110px] w-[90%] lg:w-[80%] mx-auto mt-4">
          <button onClick={navigateBack}>Go back</button>
        </div>
        <div className=" max-w-[1110px] w-[90%] lg:w-[80%] mx-auto my-16 hero rounded-none  flex gap-16 flex-col md:flex-row lg:flex-row ">
          <figure className="lg:w-[50%]">
            <img
              className="desktop"
              src={HeadPhone2Desktop}
              alt="Placeholder"
            />
            <img className="tablet" src={HeadPhone2Tablet} alt="Placeholder" />
            <img className="mobile" src={HeadPhone2Mobile} alt="Placeholder" />
          </figure>
          <div className=" lg:w-[45%]   mx-auto  flex flex-col gap-4   lg:text-start ">
            <p className="overlined text-light-orange lg:self-start">
              New Product
            </p>
            <h2 className=" h2 hero-title">XX99 MARK I Headphones</h2>
            <p className="body">
            As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
            </p>
            <h6 className="h6">$899</h6>
            <div className="hero-actions flex gap-2 ">
              <div className="bg-light-grey w-[30%] lg:w-[42%] flex justify-center items-center">
                <button
                  className="btn hover:bg-inherit rounded-none border-none text-dark-grey bg-light-grey"
                  onClick={handleCountDecrement}
                >
                  -
                </button>
                <span className="mx-4">{count}</span>
                <button
                  className="btn hover:bg-inherit rounded-none border-none text-dark-grey bg-light-grey"
                  onClick={handleCountIncrement}
                >
                  +
                </button>
              </div>
              <div className="w-[30%] lg:w-[42%] flex justify-center items-center">
                <button className=" w-full btn rounded-none border-none text-white bg-main-orange hover:bg-light-orange">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <Features />

        <div className=" max-w-[1110px] w-[90%] lg:w-[80%] mx-auto flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col gap-4">
            <figure>
              <img
                className="desktop"
                src={Gallery1Desktop}
                alt="Placeholder"
              />
              <img className="tablet" src={Gallery1Tablet} alt="Placeholder" />
              <img className="mobile" src={Gallery1Mobile} alt="Placeholder" />
            </figure>
            <figure>
              <img
                className="desktop"
                src={Gallery2Desktop}
                alt="Placeholder"
              />
              <img className="tablet" src={Gallery2Tablet} alt="Placeholder" />
              <img className="mobile" src={Gallery2Mobile} alt="Placeholder" />
            </figure>
          </div>

          <figure>
            <img className="desktop" src={Gallery3Desktop} alt="Placeholder" />
            <img className="tablet" src={Gallery3Tablet} alt="Placeholder" />
            <img className="mobile" src={Gallery3Mobile} alt="Placeholder" />
          </figure>
        </div>

        <Suggestions />
        <ProductLinks />
        <Audio />
        <Footer />

      </div>
    );
}