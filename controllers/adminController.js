import User from "../models/User.js"
import Product from "../models/Products.js"

// Obtener todos los usuarios
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Crear un usuario
export const createUser = async (req, res) => {
    const newUser = new User(req.body);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: "Error creating user" });
    }
};

// Actualizar un usuario
export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: "Error updating user" });
    }
};

// Eliminar un usuario
export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: "Error deleting user" });
    }
};

// Obtener todos los productos
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Crear un producto
export const createProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: "Error creating product" });
    }
};

// Actualizar un producto
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: "Error updating product" });
    }
};

// Eliminar un producto
export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: "Error deleting product" });
    }
};