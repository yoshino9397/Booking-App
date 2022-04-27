import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://live.staticflickr.com/65535/52033290883_7dc01f2b85_k.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kanazawa</h1>
          <h2>100 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://live.staticflickr.com/65535/52033773305_107661a79f_k.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hanoi</h1>
          <h2>150 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://live.staticflickr.com/65535/52033773370_1029bfe6c4_k.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hallstatt</h1>
          <h2>80 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
