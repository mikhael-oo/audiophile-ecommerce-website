import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { RxAvatar } from "react-icons/rx";
import { useCart, useCartDispatcher } from "../../contexts/CartContext";

import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/audiophile.svg";
import Hamburger from "../../assets/shared/tablet/icon-hamburger.svg";
import Cart from "../../assets/shared/desktop/icon-cart.svg";


export default function NavBar({ cartCount, setCartCount }) {
  
  const [userContext, setUserContext] = useContext(UserContext);

  const cart = useCart();
  const cartDispatch = useCartDispatcher();

  const handleDeleteProduct = (id, quantity) => {
    cartDispatch({ type: "removed", id: id });
    setCartCount(cartCount - quantity);
  };

  const handleCountIncrement = (id) => {
    cartDispatch({ type: "increaseProductCount", id: id });
    setCartCount(cartCount + 1);
  };

  const handleCountDecrement = (id) => {
    cartDispatch({ type: "reduceProductCount", id: id });
    setCartCount(cartCount - 1);
  };

  const handleDeleteAllProducts = () => {
    cartDispatch({ type: "removedAll" });
    setCartCount(0);
  };


  const navigate = useNavigate();

  const handleCheckout = () => {
    console.log(cart)
    console.log(cartDispatch)
    navigate("/checkout");
  };

  return (
    <header className="flex justify-center bg-main-black h-[10vh]">
      <div className="navbar px-0  text-white w-5/6 border-b border-white border-opacity-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <img src={Hamburger} alt="hamburger image" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
            >
              <li className="subtitle">
                <NavLink to="/" >Home</NavLink>
              </li>

              <li className="subtitle">
                <NavLink to="/headphones">Headphones</NavLink>
              </li>

              <li className="subtitle">
                <NavLink to="/speakers">Speakers</NavLink>
              </li>

              <li>
                <NavLink to="/earphones">Earphones</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img src={Logo} alt="Audiophile Logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="subtitle">
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="subtitle">
              <NavLink to="/headphones">Headphones</NavLink>
            </li>

            <li className="subtitle">
              <NavLink to="/speakers">Speakers</NavLink>
            </li>

            <li className="subtitle">
              <NavLink to="/earphones">Earphones</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <img src={Cart} />
                  <span className="badge badge-sm indicator-item">
                    {cartCount}
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 card card-compact dropdown-content w-96 bg-black shadow"
              >
                <div className="card-body">
                  <div className="flex justify-between items-center">
                    <h6 className="h6">Cart ({cartCount})</h6>
                    <button
                      className="btn btn-ghost subtitle"
                      onClick={handleDeleteAllProducts}
                    >
                      Remove All
                    </button>
                  </div>
                  {
                    cart.length === 0  ?
                    <p className="text-center">No items in cart</p> :
                    cart.map((item) => {
                      return (
                        <div className="flex justify-between gap-4 items-center">
                          <div className="flex flex-row items-center w-[65%]">
                            <img className="w-16 mr-2" src={item.image} alt="product image" />
                            <div className="mr-16">
                              <p className="text-sm subtitle">{item.product}</p>
                              <p className="text-sm">${item.price}</p>
                            </div>
                          </div>
                          <div className="bg-light-grey w-20 flex justify-center items-center">
                            <button
                              className="btn hover:bg-inherit rounded-none border-none text-dark-grey bg-light-grey"
                              onClick={() => handleCountDecrement(item.id)}
                            >
                              -
                            </button>
                            <span className="mx-2 text-dark-grey">{item.quantity}</span>
                            <button
                              className="btn hover:bg-inherit rounded-none border-none text-dark-grey bg-light-grey"
                              onClick={() => handleCountIncrement(item.id)}
                            >
                              +
                            </button>
                          </div>
                          <div>
                            <button
                              className="btn btn-ghost btn-circle"
                              onClick={() => handleDeleteProduct(item.id, item.quantity)}
                            >
                              X
                            </button>
                          </div>
                        </div>
                      )
                    })
                  }
                  {
                    cart.length === 0 ? null :
                    <div className="flex justify-between items-center my-8">
                      <h6 className="h6">Total</h6>
                      <h6 className="h6">${cart.reduce((acc, item) => acc + item.price, 0)}</h6>
                    </div>

                  }
                  <div className="card-actions">
                    <button 
                      className="btn btn-primary btn-block rounded-none border-none text-white bg-main-orange hover:bg-light-orange"
                      onClick={handleCheckout}
                      disabled={cart.length === 0}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className=" rounded-full">
                  <RxAvatar size={28} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    {
                      !userContext.token ?
                      <button
                      onClick={() => navigate("/login")} 
                    >
                      Login
                    </button> :
                    <button
                      onClick={() => navigate("/profile")}
                    >
                      Profile
                    </button>
                    }
                    
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
