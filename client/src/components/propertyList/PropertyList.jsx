import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://live.staticflickr.com/65535/52033332526_41ecf5400d_k.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>40000 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://live.staticflickr.com/65535/52033332296_a41854a9d6_k.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>13900 apartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://live.staticflickr.com/65535/52032287302_6429af739f_k.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>17200 resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://live.staticflickr.com/65535/52033332566_5aac6adc11_k.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>4635 villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://live.staticflickr.com/65535/52032287812_a47f64726b_k.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>3320 cabins</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://live.staticflickr.com/65535/52032287902_c315b17279_k.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cottages</h1>
          <h2>14080 cottages</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
