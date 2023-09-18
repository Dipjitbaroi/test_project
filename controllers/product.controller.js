import Product from "../schemas/product.schema.js";

export const addProduct = async (req, res) => {
  try {
    const {
      img,
      name,
      dose,
      generic_name,
      brand,
      description,
      delivery_standerd,
      type,
      price,
      discount,
      ratings,
      medical_overview,
      quick_tips,
      brief_description,
    } = req.body;
    const product = new Product({
      img,
      name,
      dose,
      generic_name,
      brand,
      description,
      delivery_standerd,
      type,
      price,
      discount,
      ratings,
      medical_overview,
      quick_tips,
      brief_description,
    });
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getProductById = async (req, res) => {
  try {
    const productId = req.params.id; // Get the product ID from the request parameters
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      product: product,
      alternative: await Product.find({
        generic_name: product.generic_name,
        type: product.type,
        dose: product.dose,
        brand: { $ne: product.brand },
      }),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getProductByType = async (req, res) => {
  try {
    const productType = req.params.type; // Get the product type from the request parameters
    const products = await Product.find({ type: productType });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const searchProduct = async (req, res) => {
  try {
    const query = req.query.q; // Get the search query from the request
    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } }, // Case-insensitive search on product_name
        { generic_name: { $regex: query, $options: "i" } }, // Case-insensitive search on generic_name
      ],
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getProductByGenericName = async (req, res) => {
  try {
    const genericName = req.params.genericName; // Get the generic name from the request parameters
    const products = await Product.find({ generic_name: genericName });

    if (products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found with the specified generic name" });
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
