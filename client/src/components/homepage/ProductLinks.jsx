import "./product-links.css";
import { NavLink } from "react-router-dom";
import Circles from "../../assets/home/desktop/direction.svg";
import Headphone from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import Earphone from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";

const ProductLinks = () => {
  return (
    <div className="flex justify-center">
      <div className=" product-links max-w-[1110px] my-48 gap-3 flex sm:flex-col md:flex-row">
        <div className="box sm:my-24 md:my-0 bg-light-grey relative">
          <img  className="imgg mx-auto" src={Headphone} alt="" />
          <h6 className="h6">Headphones</h6>
          <NavLink to="/headphones" className="flex">
            Shop
            <img src={Circles} alt="" />
          </NavLink>
        </div>
        <div className="box sm:my-24 md:my-0 relative bg-light-grey">
          <img className=" imgg mx-auto" src={Speaker} alt="" />
          <h6 className="h6">Speakers</h6>
          <NavLink to="/speakers" className="flex">
            Shop
            <img src={Circles} alt="" />
          </NavLink>
        </div>
        <div className="box sm:my-24 md:my-0 relative bg-light-grey">
          <img className=" imgg mx-auto" src={Earphone} alt="" />
          <h6 className="h6">Earphones</h6>
          <NavLink to="/earphones" className="flex">
            Shop
            <img src={Circles} alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductLinks;
