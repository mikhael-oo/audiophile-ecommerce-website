import { useNavigate } from "react-router-dom"

import Image1Desktop from "../../../assets/shared/desktop/image-zx9-speaker.jpg"
import Image1Tablet from "../../../assets/shared/tablet/image-zx9-speaker.jpg"
import Image1Mobile from "../../../assets/shared/mobile/image-zx9-speaker.jpg"
import Image2Desktop from "../../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
import Image2Tablet from "../../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg"
import Image2Mobile from "../../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg"
import Image3Desktop from "../../../assets/shared/desktop/image-xx59-headphones.jpg"
import Image3Tablet from "../../../assets/shared/tablet/image-xx59-headphones.jpg"
import Image3Mobile from "../../../assets/shared/mobile/image-xx59-headphones.jpg"

export default function Suggestion() {
    const navigate = useNavigate()

    return (
        <div className="max-w-[1110px] w-[90%] lg:w-[80%] mx-auto my-16">
            <h5 className="h5 mb-6 text-center">You may also like</h5>
            <div className="flex flex-col md:flex-row gap-16 md:gap-8">
                <div className="flex flex-col  items-center gap-4">
                    <figure className=" ">
                        <img
                            className="desktop"
                            src={Image1Desktop}
                            alt="Placeholder"
                        />
                        <img className="tablet" src={Image1Tablet} alt="Placeholder" />
                        <img className="mobile" src={Image1Mobile} alt="Placeholder" />
                    </figure>
                    <h5 className="h5">ZX9 Speaker</h5>
                    <button
                        className="btn w-[160px] rounded-none border-none text-white bg-main-orange hover:bg-light-orange"
                        onClick={() => navigate("/speakers/two")}
                    >
                        See Product
                    </button>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <figure className="">
                        <img
                            className="desktop"
                            src={Image2Desktop}
                            alt="Placeholder"
                        />
                        <img className="tablet" src={Image2Tablet} alt="Placeholder" />
                        <img className="mobile" src={Image2Mobile} alt="Placeholder" />
                    </figure>
                    <h5 className="h5">XX99 MARK I</h5>
                    <button
                        className="btn w-[160px] rounded-none border-none text-white bg-main-orange hover:bg-light-orange"
                        onClick={() => navigate("/headphones/two")}
                    >
                        See Product
                    </button>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <figure className="">
                        <img
                            className="desktop"
                            src={Image3Desktop}
                            alt="Placeholder"
                        />
                        <img className="tablet" src={Image3Tablet} alt="Placeholder" />
                        <img className="mobile" src={Image3Mobile} alt="Placeholder" />
                    </figure>
                    <h5 className="h5">XX59</h5>
                    <button
                        className="btn w-[160px] rounded-none border-none text-white bg-main-orange hover:bg-light-orange"
                        onClick={() => navigate("/headphones/three")}
                    >
                        See Product
                    </button>
                </div>
            </div>

            
        </div>
    )
}