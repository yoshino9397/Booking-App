import "./singleroom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SingleRoom = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [info, setInfo] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("/rooms/" + id);
        setInfo(res.data);
        setRooms(res.data.roomNumbers.length);
      } catch {}
    };
    getProduct();
  }, [id]);

  return (
    <div className="singleRoom">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <div className="details">
                <h1 className="itemTitle">{info.title}</h1>
                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemValue">{info.price}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Capacity:</span>
                  <span className="itemValue">〜 {info.maxPeople}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Desc:</span>
                  <span className="itemValue">{info.desc}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Rooms:</span>
                  <span className="itemValue">{rooms}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default SingleRoom;
