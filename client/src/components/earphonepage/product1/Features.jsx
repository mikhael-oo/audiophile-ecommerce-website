

export default function Features() {
    return (
        <div className="max-w-[1110px] w-[90%] lg:w-[80%] mx-auto my-16 flex flex-col gap-12 lg:flex-row lg:justify-between">
            <div className="lg:w-[65%]">
                <h5 className="h5 mb-6">Features</h5>
                <p className="body mb-4">
                Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.
                </p>
                <p className="body ">
                The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.
                </p>
            </div>
            <div className=" flex flex-col gap-6 md:flex-row md:gap-64 lg:flex-col lg:gap-6">
                <h5 className="h5">In the box</h5>
                <ul className="list-none list-inside">
                    <li className="body mb-2"><span className="body text-main-orange mr-4">2x</span> Earphone Unit</li>
                    <li className="body mb-2"><span className="body text-main-orange mr-4">6x</span> Multi-size Earplugs</li>
                    <li className="body mb-2"><span className="body text-main-orange mr-4">1x</span> User Manual</li>
                    <li className="body mb-2"><span className="body text-main-orange mr-4">1x</span> USB-C Charging Cable</li>
                    <li className="body mb-2"><span className="body text-main-orange mr-4">1x</span> Travel Pouch</li>
                   
                </ul>
            </div>
        </div>
    )
}