import "./HighLightedProducts.css"
import SpeakerDesktop1 from "../../assets/home/desktop/image-speaker-zx9.png"
import SpeakerDesktop2 from "../../assets/home/desktop/image-speaker-zx7.jpg"
import EarphonesDesktop1 from "../../assets/home/desktop/image-earphones-yx1.jpg"
import SpeakerTablet1 from "../../assets/home/tablet/image-speaker-zx9.png"
import SpeakerTablet2 from "../../assets/home/tablet/image-speaker-zx7.jpg"
import EarphonesTablet1 from "../../assets/home/tablet/image-earphones-yx1.jpg"
import SpeakerMobile1 from "../../assets/home/mobile/image-speaker-zx9.png"
import SpeakerMobile2 from "../../assets/home/mobile/image-speaker-zx7.jpg"
import EarphonesMobile1 from "../../assets/home/mobile/image-earphones-yx1.jpg"
import AudioDesktop from "../../assets/shared/desktop/image-best-gear.jpg"
import AudioTablet from "../../assets/shared/tablet/image-best-gear.jpg"
import AudioMobile from "../../assets/shared/mobile/image-best-gear.jpg"

export default function HighlightedProducts() {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="  card circles max-w-[1110px] bg-main-orange lg:card-side rounded-none shadow-xl">
          <figure className="mx-28 my-28 mb-0 max-w-[400px] lg:max-w-[410px]">
            <img className="desktop" src={SpeakerDesktop1} alt="Speaker" />
            <img className="tablet" src={SpeakerTablet1} alt="Speaker" />
            <img className="mobile" src={SpeakerMobile1} alt="Speaker" />
          </figure>
          <div className="flex flex-col items-start justify-start mt-32 w-[32%] gap-4 mx-auto">
            <h1 className=" h1 card-title text-white">ZX9 Speaker</h1>
            <p className="p text-white">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <div className="card-actions w-[100%]">
              <button className="btn rounded-none text-white bg-main-black hover:bg-dark-grey">
                See Product
              </button>
            </div>
          </div>
        </div>

        <div className=" max-w-[1110px] my-16 hero rounded-none ">
          <figure>
            <img
              className="desktop"
              src={SpeakerDesktop2}
              alt="Placeholder"
            />
            <img
              className="tablet"
              src={SpeakerTablet2}
              alt="Placeholder"
            />

            <img
              className="mobile"
              src={SpeakerMobile2}
              alt="Placeholder"
            />
          </figure>
          <div className="w-[80%] md:w-[60%] lg:w-[80%] flex flex-col gap-4 ">
            <h4 className=" h4 hero-title">ZX7 SPEAKER</h4>
            <div className="hero-actions justify-start">
              <button className="btn btn-outline rounded-none hover:bg-main-black hover:text-white">See Product</button>
            </div>
          </div>
        </div>

        <div className=" max-w-[1110px] md:w-[70%] lg:w-[100%] mb-16 hero rounded-none justify-stretch flex gap-4 flex-col md:flex-row lg:flex-row ">
            <figure className="basis-1/2">
                <img className="desktop" src={EarphonesDesktop1} alt="Placeholder" />
                <img className="tablet" src={EarphonesTablet1} alt="Placeholder" />
                <img className="mobile" src={EarphonesMobile1} alt="Placeholder" />
            </figure>
            <div className="bg-light-grey  basis-1/2 mx-auto self-stretch flex flex-col gap-4 items-center justify-center ">
                <h4 className=" h4 hero-title">YX1 EARPHONES</h4>
                <div className="hero-actions justify-start">
                    <button className="btn btn-outline rounded-none hover:bg-main-black hover:text-white">See Product</button>
                </div>
            </div>
        </div>

        <div className=" max-w-[1110px] md:w-[70%] lg:w-[100%] my-16 hero rounded-none justify-stretch flex gap-4 flex-col md:flex-row lg:flex-row ">
            <div className="basis-1/2 mx-auto ">
                <h2 className=" h2 hero-title mb-4">
                    Bringing you the <br /> <span className="text-main-orange">best</span> audio gear
                </h2>
                <p className="body">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>

            <figure className="basis-1/2">
                <img className="desktop" src={AudioDesktop} alt="Placeholder" />
                <img className="tablet" src={AudioTablet} alt="Placeholder" />
                <img className="mobile" src={AudioMobile} alt="Placeholder" />
            </figure>
            
        </div>


      </div>
    );
}