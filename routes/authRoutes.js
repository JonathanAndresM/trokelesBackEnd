import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import User from '../models/User.js';  // Importar el modelo real de MongoDB

const router = Router();

// Registrar usuario
router.post(
    "/register",
    [
        body("email").isEmail().withMessage("Please enter a valid email"),
        body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password, role } = req.body;

        try {
            // Verificar si el usuario ya existe en la base de datos
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: "User already exists" });
            }

            // Encriptar contraseña
            const hashedPassword = await bcrypt.hash(password, 10);

            // Crear nuevo usuario
            const newUser = new User({
                email,
                password: hashedPassword,
                role
            });

            await newUser.save();

            res.status(201).json({ message: "User created successfully" });
        } catch (error) {
            console.error("❌ Error en registro:", error);
            res.status(500).json({ message: "Server error" });
        }
    }
);

// Login de usuario
router.post(
    "/login",
    [
        body("email").isEmail(),
        body("password").notEmpty(),
    ],
    async (req, res) => {
        const { email, password } = req.body;

        try {
            console.log("📩 Email recibido:", email);

            // Buscar usuario en la base de datos
            const user = await User.findOne({ email });

            console.log("🔍 Usuario encontrado:", user);

            if (!user) {
                return res.status(401).json({ message: "User does not exist" });
            }

            // Verificar contraseña
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            // Crear token
            const token = jwt.sign(
                { id: user._id, email: user.email, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );

            res.status(200).json({ token, role: user.role });
        } catch (error) {
            console.error("❌ Error en login:", error);
            res.status(500).json({ message: "Server error" });
        }
    }
);

export default router;
