

export default function Features() {
    return (
        <div className="max-w-[1110px] w-[90%] lg:w-[80%] mx-auto my-16 flex flex-col gap-12 lg:flex-row lg:justify-between">
            <div className="lg:w-[65%]">
                <h5 className="h5 mb-6">Features</h5>
                <p className="body mb-4">
                    Featuring a genuine leather head strap and premium earcups, 
                    these headphones deliver superior comfort for those who like to 
                    enjoy endless listening. It includes intuitive controls designed 
                    for any situation. Whether you’re taking a business call or just in 
                    your own personal space, the auto on/off and pause features ensure 
                    that you’ll never miss a beat.
                </p>
                <p className="body ">
                    The advanced Active Noise Cancellation with built-in equalizer allow you 
                    to experience your audio world on your terms. It lets you enjoy your audio 
                    in peace, but quickly interact with your surroundings when you need to. 
                    Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, 
                    the XX99 Mark II headphones gives you superior sound, cutting-edge technology, 
                    and a modern design aesthetic.
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