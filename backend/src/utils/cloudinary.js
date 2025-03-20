import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();  // ✅ Ensure environment variables are loaded

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // ✅ Fix: Use process.env
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  if (!localFilePath) return null;

  try {
    const result = await cloudinary.uploader.upload(localFilePath, {
      folder: "StudentDocs",
    });
    return result;
  } catch (error) {
    console.error("❌ Cloudinary Upload Error:", error);
    throw error;
  }
};

export { uploadOnCloudinary };
