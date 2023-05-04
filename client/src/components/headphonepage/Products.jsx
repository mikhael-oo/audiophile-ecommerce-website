import HeadPhone1Desktop from "../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg"
import HeadPhone1Mobile from "../../assets/shared/tablet/image-xx99-mark-two-headphones.jpg"
import HeadPhone1Tablet from "../../assets/shared/mobile/image-xx99-mark-two-headphones.jpg"
import HeadPhone2Desktop from "../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
import HeadPhone2Mobile from "../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg"
import HeadPhone2Tablet from "../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg"
import HeadPhone3Desktop from "../../assets/shared/desktop/image-xx59-headphones.jpg"
import HeadPhone3Mobile from "../../assets/shared/tablet/image-xx59-headphones.jpg"
import HeadPhone3Tablet from "../../assets/shared/mobile/image-xx59-headphones.jpg"

export default function Products() {
    return (
      <div>
        <div className=" max-w-[1110px] w-[90%] lg:w-[80%] mx-auto my-16 hero rounded-none  flex gap-16 flex-col lg:flex-row ">
          <figure className="lg:w-[50%]">
            <img
              className="desktop"
              src={HeadPhone1Desktop}
              alt="Placeholder"
            />
            <img className="tablet" src={HeadPhone1Tablet} alt="Placeholder" />
            <img className="mobile" src={HeadPhone1Mobile} alt="Placeholder" />
          </figure>
          <div className=" lg:w-[45%]   mx-auto  flex flex-col gap-4 items-center justify-center text-center lg:text-start ">
            <p className="overlined text-light-orange lg:self-start">New Product</p>
            <h2 className=" h2 hero-title">XX99 MARK II Headphones</h2>
            <p className="body">
                The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
            </p>
            <div className="hero-actions lg:self-start ">
              <button className="btn rounded-none border-none text-white bg-main-orange hover:bg-light-orange">
                See Product
              </button>
            </div>
          </div>
        </div>

        <div className=" max-w-[1110px] w-[90%] lg:w-[80%] mx-auto my-16 hero rounded-none  flex gap-16 flex-col lg:flex-row-reverse ">
          <figure className="lg:w-[50%]">
            <img
              className="desktop"
              src={HeadPhone2Desktop}
              alt="Placeholder"
            />
            <img className="tablet" src={HeadPhone2Tablet} alt="Placeholder" />
            <img className="mobile" src={HeadPhone2Mobile} alt="Placeholder" />
          </figure>
          <div className=" lg:w-[45%]   mx-auto  flex flex-col gap-4 items-center justify-center text-center lg:text-start ">
            <p className="overlined text-light-orange lg:self-start">New Product</p>
            <h2 className=" h2 hero-title lg:self-start">XX99 MARK II Headphones</h2>
            <p className="body">
                The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
            </p>
            <div className="hero-actions lg:self-start ">
              <button className="btn rounded-none border-none text-white bg-main-orange hover:bg-light-orange">
                See Product
              </button>
            </div>
          </div>
        </div>

        <div className=" max-w-[1110px] w-[90%] lg:w-[80%] mx-auto my-16 hero rounded-none  flex gap-16 flex-col lg:flex-row ">
          <figure className="lg:w-[50%]">
            <img
              className="desktop"
              src={HeadPhone3Desktop}
              alt="Placeholder"
            />
            <img className="tablet" src={HeadPhone3Tablet} alt="Placeholder" />
            <img className="mobile" src={HeadPhone3Mobile} alt="Placeholder" />
          </figure>
          <div className=" lg:w-[45%]   mx-auto  flex flex-col gap-4 items-center justify-center text-center lg:text-start ">
            
            <h2 className=" h2 hero-title lg:self-start">XX59 Headphones</h2>
            <p className="body">
            Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
            </p>
            <div className="hero-actions lg:self-start ">
              <button className="btn rounded-none border-none text-white bg-main-orange hover:bg-light-orange">
                See Product
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}