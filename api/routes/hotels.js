import express from "express";
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
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
router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET ALL
router.get("/find/:id", getHotel);
//GET
router.get("/", getHotels);

export default router;
