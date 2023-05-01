import "./hero.css";

export default function Home() {
    return (
      <div
        className="hero bk-image-small "
      >
        
        <div className="hero-content w-5/6 flex lg:justify-start text-start text-white">
          <div className="max-w-sm">
            <p className="mb-5 overlined opacity-50">New product</p>
            <h1 className="mb-5 h1">XX99 Mark II Headphones</h1>
            <p className="mb-5 body max-w-[345px] opacity-75">
              Experience natural, lifelike audio and exceptional build quality for the passionate
                music enthusiast.
            </p>
            <button className="btn rounded-none text-white bg-main-orange">See Product</button>
          </div>
        </div>
      </div>
    );
}