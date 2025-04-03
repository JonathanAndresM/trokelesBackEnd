import { Router } from 'express';
import { verifyToken, checkRole } from '../middleware/authMiddleware.js';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/adminController.js';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controllers/adminController.js';

const router = Router();

// Gestion de usuarios por parte del administrador
router.get("/users", /*verifyToken, checkRole(["admin"]),*/ getUsers);
router.post("/users", verifyToken, checkRole(["admin"]), createUser);
router.put("/users/:id", verifyToken, checkRole(["admin"]), updateUser);
router.delete("/users/:id", verifyToken, checkRole(["admin"]), deleteUser);

// Gestion de productos por parte del administrador y editor
router.get("/products", /*verifyToken, checkRole(["admin", "editor"]),*/ getProducts);
router.post("/products", verifyToken, checkRole(["admin", "editor"]), createProduct);
router.put("/products/:id", verifyToken, checkRole(["admin", "editor"]), updateProduct);
router.delete("/products/:id", verifyToken, checkRole(["admin", "editor"]), deleteProduct);

export default router;