import User from "../models/User.js";
import bcrypt from "bcryptjs";
import "dotenv/config.js";
import "../config/db.js";


const createAdmin = async () => {
    try {
      const userExists = await User.findOne({ email: 'admin@trokeles.com' });
      if (userExists) {
        console.log('Admin already exists');
        return;
      }
  
      const hashedPassword = await bcrypt.hash('Muche1989', 10);
  
      const adminUser = new User({
        name: 'User',
        lastName: 'Admin',
        email: 'admin@trokeles.com',
        password: hashedPassword,
        role: 'admin',
      });
  
      await adminUser.save();
      console.log('Admin user created');
    } catch (error) {
      console.error(error);
    }
  };
  
  createAdmin();