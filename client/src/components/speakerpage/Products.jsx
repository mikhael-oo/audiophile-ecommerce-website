import Speaker1Desktop from "../../assets/shared/desktop/image-zx9-speaker.jpg";
import Speaker1Mobile from "../../assets/shared/tablet/image-zx9-speaker.jpg";
import Speaker1Tablet from "../../assets/shared/mobile/image-zx9-speaker.jpg";
import Speaker2Desktop from "../../assets/shared/desktop/image-zx7-speaker.jpg";
import Speaker2Mobile from "../../assets/shared/tablet/image-zx7-speaker.jpg";
import Speaker2Tablet from "../../assets/shared/mobile/image-zx7-speaker.jpg";

export default function Products() {
    return (
      <div>
        <div className=" max-w-[1110px] w-[90%] lg:w-[80%] mx-auto my-16 hero rounded-none  flex gap-16 flex-col lg:flex-row ">
          <figure className="lg:w-[50%]">
            <img
              className="desktop"
              src={Speaker1Desktop}
              alt="Placeholder"
            />
            <img className="tablet" src={Speaker1Tablet} alt="Placeholder" />
            <img className="mobile" src={Speaker1Mobile} alt="Placeholder" />
          </figure>
          <div className=" lg:w-[45%]   mx-auto  flex flex-col gap-4 items-center justify-center text-center lg:text-start ">
            <p className="overlined text-light-orange lg:self-start">
              New Product
            </p>
            <h2 className=" h2 hero-title lg:self-start">ZX9 Speaker</h2>
            <p className="body">
                Upgrade your sound system with the all new ZX9 active speaker. 
                It’s a bookshelf speaker system that offers truly wireless connectivity 
                -- creating new possibilities for more pleasing and practical audio setups.
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
              src={Speaker2Desktop}
              alt="Placeholder"
            />
            <img className="tablet" src={Speaker2Tablet} alt="Placeholder" />
            <img className="mobile" src={Speaker2Mobile} alt="Placeholder" />
          </figure>
          <div className=" lg:w-[45%]   mx-auto  flex flex-col gap-4 items-center justify-center text-center lg:text-start ">
            <p className="overlined text-light-orange lg:self-start">
              New Product
            </p>
            <h2 className=" h2 hero-title lg:self-start">
              ZX7 Speaker
            </h2>
            <p className="body">
                Stream high quality sound wirelessly with minimal loss.
                The ZX7 bookshelf speaker uses high-end audiophile components that 
                represents the top of the line powered speakers for home or studio use.
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