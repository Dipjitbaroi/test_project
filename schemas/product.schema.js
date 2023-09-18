import mongoose from "mongoose";
// const { schema } = mongoose;

const DeliveryEnum = [
  "REGULAR DELIVERY",
  "STANDARD DELIVERY",
  "EXPRESS DELIVERY",
  "SUPER EXPRESS DELIVERY",
];
const TypeEnum = ["Tablet", "Syrup", "Capsule", "Suppository"];

const ProductSchema = new mongoose.Schema({
  img: {
    type: String,
    // required: false,
  },
  name: {
    type: String,
    required: true,
  },
  dose: {
    type: String,
    required: true,
  },
  generic_name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    // required: false,
  },
  delivery_standerd: {
    type: String,
    // required: true,
    enum: DeliveryEnum,
  },
  type: {
    type: String,
    enum: TypeEnum,
    required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  discount: {
    type: String,
    // required: false,
  },
  ratings: {
    type: Number,
    // required: false,
    min: 1,
    max: 5,
  },
  medical_overview: {
    type: String,
    // required: true,
  },
  quick_tips: {
    type: String,
    // required: true,
  },
  brief_description: {
    type: String,
    // required: true,
  },
});
const Product = mongoose.model("products", ProductSchema);
export default Product;
