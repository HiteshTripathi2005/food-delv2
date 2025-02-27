import { Router } from "express";
import { validateRestaurantData } from "../middlewares/restaurantValidator.js";
import {
  createRestaurant,
  getAllRestaurants,
  getRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from "../controllers/restaurant.controller.js";
import auth from "../middlewares/auth.js";
import { upload } from "../middlewares/multer.js";

const router = Router();

router.post(
  "/restaurants",
  auth,
  upload.single("image"),

  createRestaurant
);
router.get("/restaurants", getAllRestaurants);
router.get("/restaurants/:id", getRestaurant);
router.patch("/restaurants/:id", updateRestaurant);
router.delete("/restaurants/:id", auth, deleteRestaurant);

export default router;
