import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },

    productDescription: {
      type: String,
      required: true,
      trim: true,
    },

    productPrice: {
      type: Number,
      required: true,
    },

    productImage: {
      type: String,
      required: true,
    },

    productImageId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Product = mongoose.model("Product", productSchema);
