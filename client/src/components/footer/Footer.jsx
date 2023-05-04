import "./Footer.css"
import Logo from "../../assets/audiophile.svg"
import { NavLink } from "react-router-dom"
import Facebook from "../../assets/shared/desktop/icon-facebook.svg"
import Instagram from "../../assets/shared/desktop/icon-instagram.svg"
import Twitter from "../../assets/shared/desktop/icon-twitter.svg"

export default function Footer() {
    return (
      <footer className="w-full bg-main-black">
        <div className="w-full p-4  md:w-[90%] lg:w-[80%] mx-auto grid gap-x-4 gap-y-2 grid-cols-6 ">
          <div className="logo col-start-1 col-span-2 row-start-1 row-span-1">
            <img src={Logo} alt="audiophile logo" />
          </div>
          <ul className="flex gap-4  col-start-3 col-end-7 row-start-1 row-span-1 justify-self-end">
            <li className="subtitle text-white hover:text-main-orange">
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="subtitle text-white hover:text-main-orange">
              <NavLink to="/headphones">Headphones</NavLink>
            </li>

            <li className="subtitle text-white hover:text-main-orange">
              <NavLink to="/speakers">Speakers</NavLink>
            </li>

            <li className="subtitle text-white hover:text-main-orange">
              <NavLink to="/earphones">Earphones</NavLink>
            </li>
          </ul>
          <div className="text-body col-start-1 col-span-3 row-start-2 row-span-2">
            <p className="text-white text-opacity-50 text-sm mt-8 body">
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>

          <div className="copyright row-start-4 row-span-1 col-start-1 col-span-2">
            <p className="text-white text-opacity-50 text-sm mt-8 body">
                Copyright 2021. All Rights Reserved
            </p>
          </div>

          <ul className=" flex gap-3 row-start-4 row-span-1 col-start-6 col-span-1 justify-self-end">
            <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <img src={Facebook} alt="facebook" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <img src={Instagram} alt="instagram" />
                </a>
            </li>
            <li>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                    <img className="hover:fill-main-orange" src={Twitter} alt="twitter" />
                </a>
            </li>
          </ul>
        </div>
      </footer>
    );
}