import { v2 as cloudinary } from "cloudinary";

// configuration
cloudinary.config({
  cloud_name: "djaak8ytn",
  api_key: "269936314269289",
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadFileToCloudinary = async (filePath) => {
  try {
    if (!filePath) return null;
    const response = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });
    console.log("File upload complete.", response.url);
  } catch (error) {
    console.log(error);
    return null;
  }
};
