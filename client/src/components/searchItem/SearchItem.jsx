import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://live.staticflickr.com/65535/52032287812_a47f64726b_k.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Lonely Forest Cabin</h1>
        <span className="siDistance">50km from center</span>
        <span className="siTaxiOp">Free breakfast</span>
        <span className="siSubtitle">
          Studio with balcony
        </span>
        <span className="siFeatures">
          Entire villa • 1 bedroom • 1 living room • 48m²
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
