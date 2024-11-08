import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("La chaîne de connexion MongoDB n'est pas définie.");
    }
    await mongoose.connect(uri, {});
    console.log("MongoDB connecté");
  } catch (error) {
    console.error("Erreur de connexion à MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
