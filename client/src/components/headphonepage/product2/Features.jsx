

export default function Features() {
    return (
        <div className="max-w-[1110px] w-[90%] lg:w-[80%] mx-auto my-16 flex flex-col gap-12 lg:flex-row lg:justify-between">
            <div className="lg:w-[65%]">
                <h5 className="h5 mb-6">Features</h5>
                <p className="body mb-4">
                As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.
                </p>
                <p className="body ">
                From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.
                </p>
            </div>
            <div className=" flex flex-col gap-6 md:flex-row md:gap-64 lg:flex-col lg:gap-6">
                <h5 className="h5">In the box</h5>
                <ul className="list-none list-inside">
                    <li className="body mb-2"><span className="body text-main-orange mr-4">1x</span> Headphone Unit</li>
                    <li className="body mb-2"><span className="body text-main-orange mr-4">2x</span> Replacement Earcups</li>
                    <li className="body mb-2"><span className="body text-main-orange mr-4">1x</span> User Manual</li>
                    <li className="body mb-2"><span className="body text-main-orange mr-4">1x</span> 3.5mm 5m Audio Cable</li>
                    <li className="body mb-2"><span className="body text-main-orange mr-4">1x</span> Travel Bag</li>
                </ul>
            </div>
        </div>
    )
}