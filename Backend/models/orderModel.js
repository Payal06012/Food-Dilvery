import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  items: [
    {
      foodId: String,
      name: String,
      quantity: Number,
      price: Number
    }
  ],

  address: {
    firstName: String,
    lastName: String,
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    phone: String
  },

  amount: { type: Number, required: true },
  paymentMethod: { type: String, default: "COD" },
  paymentStatus: { type: String, default: "pending" },

  orderStatus: {
    type: String,
    default: "Order Placed"
  },

  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);
