import Earphones1Desktop from "../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
import Earphones1Tablet from "../../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg"
import Earphones1Mobile from "../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"

export default function Products() {
    return (
      <div>
        <div className=" max-w-[1110px] w-[90%] lg:w-[80%] mx-auto my-16 hero rounded-none  flex gap-16 flex-col lg:flex-row ">
          <figure className="lg:w-[50%]">
            <img
              className="desktop"
              src={Earphones1Desktop}
              alt="Placeholder"
            />
            <img className="tablet" src={Earphones1Tablet} alt="Placeholder" />
            <img className="mobile" src={Earphones1Mobile} alt="Placeholder" />
          </figure>
          <div className=" lg:w-[45%]   mx-auto  flex flex-col gap-4 items-center justify-center text-center lg:text-start ">
            <p className="overlined text-light-orange lg:self-start">
              New Product
            </p>
            <h2 className=" h2 hero-title lg:self-start">YX1 Wireless Earphones</h2>
            <p className="body">
            Tailor your listening experience with bespoke dynamic drivers 
            from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
             sound even in noisy environments with its active noise cancellation feature.
            </p>
            <div className="hero-actions lg:self-start ">
              <button className="btn rounded-none border-none text-white bg-main-orange hover:bg-light-orange">
                See Product
              </button>
            </div>
          </div>
        </div>
    </div>
    )
}