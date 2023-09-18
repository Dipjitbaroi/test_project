import { Router } from "express";
const router = Router();
import {
  addProduct,
  getProducts,
  getProductById,
  getProductByType,
  getProductByGenericName,
  searchProduct,
} from "../controllers/product.controller.js";

// Define routes for each function

// Create a new product
router.post("/add", addProduct);
// Search products by query
router.get("/search", searchProduct);

// Get all products
router.get("/all", getProducts);

// Get a product by ID
router.get("/:id", getProductById);

// Get products by type (e.g., Tablet, Syrup)
router.get("/type/:type", getProductByType);

// Get products by generic name
router.get("/generic-name/:genericName", getProductByGenericName);

export default router;
