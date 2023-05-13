import AudioDesktop from "../../assets/shared/desktop/image-best-gear.jpg"
import AudioTablet from "../../assets/shared/tablet/image-best-gear.jpg"
import AudioMobile from "../../assets/shared/mobile/image-best-gear.jpg"

export default function Audio() {
    return (
        <div className=" max-w-[1110px] w-[90%]  lg:w-[80%] mx-auto my-16 hero rounded-none justify-stretch flex flex-col-reverse gap-4 text-center lg:text-start  lg:flex-row ">
            <div className="basis-1/2 mx-auto ">
                <h2 className=" h2 mb-4">
                    Bringing you the <span className="text-main-orange">best</span> audio gear
                </h2>
                <p className="body">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>

            <figure className="basis-1/2">
                <img className="desktop" src={AudioDesktop} alt="Placeholder" />
                <img className="tablet" src={AudioTablet} alt="Placeholder" />
                <img className="mobile" src={AudioMobile} alt="Placeholder" />
            </figure>
            
        </div>
    )
}