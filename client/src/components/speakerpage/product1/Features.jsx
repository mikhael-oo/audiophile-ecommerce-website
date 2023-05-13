

export default function Features() {
    return (
        <div className="max-w-[1110px] w-[90%] lg:w-[80%] mx-auto my-16 flex flex-col gap-12 lg:flex-row lg:justify-between">
            <div className="lg:w-[65%]">
                <h5 className="h5 mb-6">Features</h5>
                <p className="body mb-4">
                Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).
                </p>
                <p className="body ">
                Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.
                </p>
            </div>
            <div className=" flex flex-col gap-6 md:flex-row md:gap-64 lg:flex-col lg:gap-6">
                <h5 className="h5">In the box</h5>
                <ul className="list-none list-inside">
                    <li className="body mb-2"><span className="body text-main-orange mr-4">2x</span> Speaker Unit</li>
                    <li className="body mb-2"><span className="body text-main-orange mr-4">2x</span> Speakewr Cloth Panel</li>
                    <li className="body mb-2"><span className="body text-main-orange mr-4">1x</span> User Manual</li>
                    <li className="body mb-2"><span className="body text-main-orange mr-4">1x</span> 3.5mm 5m Audio Cable</li>
                    <li className="body mb-2"><span className="body text-main-orange mr-4">1x</span> 10m Optical Cable</li>
                   
                </ul>
            </div>
        </div>
    )
}