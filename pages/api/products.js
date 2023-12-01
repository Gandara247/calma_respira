import mongoose from "mongoose";
import { Product } from "@/models/Product";

export default async function handler(req, res) {
  const { method } = req;
  if (method === "POST") {
    const { title, description, price } = req.body;
    const productDoc = await Product.create({ title, description, price });
    res.jsson(productDoc);

  }
}