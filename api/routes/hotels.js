import express from "express";
import Hotel from "../models/Hotel.js";
import {
  // countByCity,
  // countByType,
  createHotel,
  deleteHotel,
  getHotel,
  // getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);
//UPDATE
router.put("/:id", updateHotel);

//DELETE
router.delete("/:id", deleteHotel);
//GET ALL
router.get("/find/:id", getHotel);
//GET
router.get("/", getHotels);

export default router;
