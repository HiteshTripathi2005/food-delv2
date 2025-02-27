import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: "duv6tjf46",
  api_key: "144135873799317",
  api_secret: "Ij80eh2gfdKzFz0HZly2fYswtoI",
});

const uploadImage = async (path) => {
  try {
    if (!path) return null;

    const uploadResult = await cloudinary.uploader.upload(path);
    fs.unlinkSync(path);

    return uploadResult.secure_url;
  } catch (error) {
    fs.unlinkSync(path);
    console.error("Error uploading image: ", error);
    throw new Error("Failed to upload image");
  }
};

export default uploadImage;
