import {useNavigate} from "react-router-dom"
import { useState } from "react"
import "./checkout.css"

export default function Checkout() {
    const [selectedOption, setSelectedoption] = useState("money")
    const navigate = useNavigate()

    const navigateBack = () => {
        navigate(-1)
    }

    const handleOptionChange = (e) => {
        setSelectedoption(e.target.value)
    }

    return (
        <div className="bg-light-grey">
            
            <div className=" max-w-[1110px] w-[90%] lg:w-[80%] mx-auto pt-4">
                <button onClick={navigateBack}>Go back</button>
            </div>


            <div className="flex flex-col lg:flex-row gap-4 max-w-[1110px] w-[90%] lg:w-[80%] mx-auto">

                <div className=" lg:w-[70%]  mt-4 bg-white p-4">
                    <h3 className="h3 mb-6">Checkout</h3>
                    <div className="billing">
                        <p className="subtitle text-main-orange">Billing Details</p>
                        <div className=" flex flex-col md:flex-row gap-2 mb-2">
                            <div className="lg:w-[49%]">
                                <label className="block font-bold text-xs" htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Alexei Ward" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="lg:w-[49%]">
                                <label className="block font-bold text-xs" htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="alexei@mail.com" className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                        <div className=" lg:w-[49%]">
                            <label className="block font-bold text-xs" htmlFor="phonenumber">Phone Number</label>
                            <input type="text" id="phonenumber" placeholder="+1 202-555-0136" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>

                    <div className="shipping mt-6 ">
                        <p className="subtitle text-main-orange">Shipping Info</p>
                        <div className="lg:w-[49%] mb-2">
                            <label className="block font-bold text-xs" htmlFor="address">Address</label>
                            <input type="text" id="email" placeholder="1137 Williams Avenue" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className=" flex flex-col md:flex-row gap-2 mb-2">
                            <div className="lg:w-[49%]">
                                <label className="block font-bold text-xs" htmlFor="zip">Zip Code</label>
                                <input type="number" id="address" placeholder="10001" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="lg:w-[49%]">
                                <label className="block font-bold text-xs" htmlFor="city">City</label>
                                <input type="text" id="email" placeholder="New York" className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                        <div className=" lg:w-[49%]">
                            <label className="block font-bold text-xs" htmlFor="phonenumber">Phone Number</label>
                            <input type="text" id="phonenumber" placeholder="+1 202-555-0136" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>

                    <div className="payment mt-6 ">
                        <p className="subtitle text-main-orange">Payment Details</p>
                        <div className="flex flex-col md:flex-row md:justify-between">
                            <label className="block font-bold text-xs" htmlFor="payment">Payment Method</label>

                            <div className="md:w-[49%]">
                                <div className={`${selectedOption === "money" && "border-main-orange"} input input-bordered  flex items-center mb-2`}>
                                    <input type="radio" name="radio-10" value="money" className="radio checked:bg-main-orange mr-4" 
                                        checked={selectedOption === "money"} onChange={handleOptionChange} />
                                    <span className="font-bold text-xs">e-Money</span>
                                </div>
                                <div className={`${selectedOption === "other" && "border-main-orange"} input input-bordered mb-2 flex items-center`}>
                                    <input type="radio" name="radio-10" value="other" className="radio checked:bg-main-orange mr-4"
                                        checked={selectedOption === "other"} onChange={handleOptionChange} />
                                    <span className="font-bold text-xs">Cash on Delivery</span>
                                </div>
                            </div>

                        </div>
                        {selectedOption === "money" && 
                        <div className=" flex flex-col md:flex-row gap-2">
                            
                            <div className="lg:w-[49%]">
                                <label className="block font-bold text-xs" htmlFor="cardnumber">e-Money Number</label>
                                <input type="number" id="cardnumber" placeholder="238521993" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="lg:w-[49%]">
                                <label className="block font-bold text-xs" htmlFor="pin">e-Money Pin</label>
                                <input type="number" id="pin" placeholder="6891" className="input input-bordered w-full max-w-xs" />
                            </div>

                        </div>
                        }
                    </div>

                </div>

                <div className="lg:w-[25%] mt-4 bg-white p-4">
                    <h6 className="h6">Summary</h6>
                    <button
                        className="btn rounded-none border-none text-white bg-main-orange hover:bg-light-orange"
                    >
                        Continue and Pay
                    </button>

                </div>
            </div>
        </div>
    )
}