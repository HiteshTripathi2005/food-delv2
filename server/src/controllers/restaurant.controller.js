import Restaurant from "../models/restaurant.model.js";
import mongoose from "mongoose";
import uploadImage from "../utils/cloudinary.js";

export const createRestaurant = async (req, res) => {
  try {
    let imageUrl = null;

    if (req.file) {
      imageUrl = await uploadImage(req.file.path);
    }

    let address = {};
    if (req.body.address) {
      try {
        address = JSON.parse(req.body.address);
      } catch (error) {
        return res.status(400).json({ error: "Invalid address format" });
      }
    }

    // Create restaurant with parsed data
    const restaurant = new Restaurant({
      name: req.body.name,
      phone: req.body.phone,
      cuisine: req.body.cuisine,
      image: imageUrl,
      address,
      user: req.user._id,
    });

    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().populate("user", "name email");
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRestaurant = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid restaurant ID" });
    }
    const restaurant = await Restaurant.findById(req.params.id).populate(
      "user",
      "name email"
    );
    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateRestaurant = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "address", "phone", "cuisine"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).json({ error: "Invalid updates" });
  }

  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "Invalid restaurant ID" });
    }
    const restaurant = await Restaurant.findOne({
      _id: req.params.id,
      user: req.user._id, // Ensure user owns this restaurant
    });

    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }

    updates.forEach((update) => (restaurant[update] = req.body[update]));
    await restaurant.save();
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.id;

    const restaurant = await Restaurant.findOneAndDelete({
      _id: restaurantId,
      user: req.user._id,
    });

    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }
    res.status(200).json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
