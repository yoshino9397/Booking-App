import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://live.staticflickr.com/65535/52033970825_c97aa92317_k.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Cottage of summer</span>
        <span className="fpCity">Salzburg</span>
        <span className="fpPrice">Starting from $102</span>
        <div className="fpRating">
          <button>9.4</button>
          <span>Superb</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://live.staticflickr.com/65535/52033971465_b35296d161_k.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Cottage of flower</span>
        <span className="fpCity">Tallinn</span>
        <span className="fpPrice">Starting from $130</span>
        <div className="fpRating">
          <button>9.6</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://live.staticflickr.com/65535/52033491573_f540636b10_k.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Sunrise Hütte</span>
        <span className="fpCity">Zermatt</span>
        <span className="fpPrice">Starting from $260</span>
        <div className="fpRating">
          <button>9.7</button>
          <span>Dreamy</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://live.staticflickr.com/65535/52033451221_d64ee51341_k.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Cottage of orange</span>
        <span className="fpCity">Tromsø</span>
        <span className="fpPrice">Starting from $320</span>
        <div className="fpRating">
          <button>9.2</button>
          <span>Magnificent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
