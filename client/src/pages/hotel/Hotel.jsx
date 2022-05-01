import "./hotel.css";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://live.staticflickr.com/1811/43848004601_f52380ae20_k.jpg",
    },
    {
      src: "https://live.staticflickr.com/7397/27174980841_29a0c1bc7c_5k.jpg",
    },
    {
      src: "https://live.staticflickr.com/526/19055234986_b9a28d50b4_b.jpg",
    },
    {
      src: "https://live.staticflickr.com/4239/34995071582_3e7c55ca43_k.jpg",
    },
    {
      src: "https://live.staticflickr.com/65535/52032287812_a47f64726b_k.jpg",
    },
    {
      src: "https://live.staticflickr.com/4602/38778666090_ac590cdc6b_6k.jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Lonely Forest Cabin</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Stockholm 125 Sweden</span>
          </div>
          <span className="hotelDistance">50km from center</span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the quiet of forest</h1>
              <p className="hotelDesc">
                Situated in Vaxholm, 600 m from Bogesund Castle, Bogesund
                Slottsvandrarhem features accommodation with a shared lounge,
                free private parking, a garden and barbecue facilities. Boasting
                family rooms, this property also provides guests with a sun
                terrace. The accommodation offers a shared kitchen and free WiFi
                throughout the property. With a shared bathroom, some rooms at
                the hostel also boast a garden view. A buffet breakfast is
                available each morning at Bogesund Slottsvandrarhem. The area is
                popular for hiking and cycling, and bike hire is available at
                the accommodation. The nearest airport is Bromma Stockholm
                Airport, 29 km from Bogesund Slottsvandrarhem.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the quiet forest, this property has an excellent
                cabin score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <div style={{ marginTop: "50px" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Hotel;
