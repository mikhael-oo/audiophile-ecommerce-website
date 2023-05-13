

export default function Features() {
    return (
        <div className="max-w-[1110px] w-[90%] lg:w-[80%] mx-auto my-16 flex flex-col gap-12 lg:flex-row lg:justify-between">
            <div className="lg:w-[65%]">
                <h5 className="h5 mb-6">Features</h5>
                <p className="body mb-4">
                These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.
                </p>
                <p className="body ">
                More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.
                </p>
            </div>
            <div className=" flex flex-col gap-6 md:flex-row md:gap-64 lg:flex-col lg:gap-6">
                <h5 className="h5">In the box</h5>
                <ul className="list-none list-inside">
                    <li className="body mb-2"><span className="body text-main-orange mr-4">1x</span> Headphone Unit</li>
                    <li className="body mb-2"><span className="body text-main-orange mr-4">2x</span> Replacement Earcups</li>
                    <li className="body mb-2"><span className="body text-main-orange mr-4">1x</span> User Manual</li>
                    <li className="body mb-2"><span className="body text-main-orange mr-4">1x</span> 3.5mm 5m Audio Cable</li>
                   
                </ul>
            </div>
        </div>
    )
}