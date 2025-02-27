import { Router } from "express";
import {
  addItem,
  getAllItems,
  getItemById,
  getItemsByRestaurant,
  updateItem,
  deleteItem,
  toggleItemAvailability,
} from "../controllers/item.controller.js";
import { upload } from "../middlewares/multer.js";

const router = Router();

// Add new item
router.route("/add-item").post(upload.single("image"), addItem);

// Get all items
router.route("/").get(getAllItems);

// Get item by ID
router.route("/:id").get(getItemById);

// Get items by restaurant ID
router.route("/restaurant/:restaurantId").get(getItemsByRestaurant);

// Update item
router.route("/:id").put(updateItem);

// Delete item
router.route("/:id").delete(deleteItem);

// Toggle item availability
router.route("/toggle/:id").put(toggleItemAvailability);

export default router;
