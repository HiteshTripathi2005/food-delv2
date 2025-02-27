import Item from "../models/item.model.js";
import uploadImage from "../utils/cloudinary.js";

export const addItem = async (req, res) => {
  try {
    const { name, description, price, category, restaurant } = req.body;

    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !restaurant ||
      !req.file
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const image = await uploadImage(req.file.path);

    // Create new item
    const newItem = new Item({
      name,
      description,
      price,
      category,
      image,
      restaurant: restaurant,
    });

    await newItem.save();

    res.status(201).json({
      success: true,
      message: "Item added successfully",
      item: newItem,
    });
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add item",
      error: error.message,
    });
  }
};

export const getAllItems = async (req, res) => {
  try {
    const items = await Item.find().populate("restaurant", "name");

    res.status(200).json({
      success: true,
      count: items.length,
      items,
    });
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch items",
      error: error.message,
    });
  }
};

// Get item by ID
export const getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const item = await Item.findById(id).populate("restaurant", "name");

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    res.status(200).json({
      success: true,
      item,
    });
  } catch (error) {
    console.error("Error fetching item:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch item",
      error: error.message,
    });
  }
};

// Get items by restaurant ID
export const getItemsByRestaurant = async (req, res) => {
  try {
    const { restaurantId } = req.params;

    const items = await Item.find({ restaurant: restaurantId });

    res.status(200).json({
      success: true,
      count: items.length,
      items,
    });
  } catch (error) {
    console.error("Error fetching restaurant items:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch restaurant items",
      error: error.message,
    });
  }
};

// Update an item
export const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category, imageUrl } = req.body;

    const item = await Item.findById(id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    // Update fields
    if (name) item.name = name;
    if (description) item.description = description;
    if (price) item.price = price;
    if (category) item.category = category;

    // Upload new image if provided
    if (imageUrl) {
      item.image = await uploadImage(imageUrl);
    }

    await item.save();

    res.status(200).json({
      success: true,
      message: "Item updated successfully",
      item,
    });
  } catch (error) {
    console.error("Error updating item:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update item",
      error: error.message,
    });
  }
};

// Delete an item
export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Item.findByIdAndDelete(id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Item deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete item",
      error: error.message,
    });
  }
};

// Toggle item availability
export const toggleItemAvailability = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Item.findById(id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    // Toggle availability
    item.isAvailable = !item.isAvailable;

    await item.save();

    res.status(200).json({
      success: true,
      message: `Item ${item.isAvailable ? "enabled" : "disabled"} successfully`,
      item,
    });
  } catch (error) {
    console.error("Error toggling item availability:", error);
    res.status(500).json({
      success: false,
      message: "Failed to toggle item availability",
      error: error.message,
    });
  }
};
