import { Router } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
// Login function: if the user exists and the password is correct, return a JWT token
export const login = async (req, res) => {
    console.log('Received login request with body:', req.body);
    const { username, password } = req.body;
    // Validate input
    if (!username || !password) {
        console.log('Validation failed: Missing username or password');
        return res.status(400).json({ error: 'Please provide both username and password.' });
    }
    try {
        // Retrieve the user from the database
        const user = await User.findOne({ where: { username } });
        if (!user) {
            console.log(`User not found for username: ${username}`);
            return res.status(401).json({ error: 'Invalid username or password.' });
        }
        // Compare passwords (assumes stored passwords are hashed)
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            console.log(`Password comparison failed for username: ${username}`);
            return res.status(401).json({ error: 'Invalid username or password.' });
        }
        // Create the payload using the defined interface
        const payload = { username: user.username };
        // Sign the token using the secret key from your .env file with a 1-hour expiration
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log(`Login successful for username: ${username}. Token generated: ${token}`);
        return res.json({ token });
    }
    catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
};
const router = Router();
// POST /login - Login a user
router.post('/login', login);
export default router;
