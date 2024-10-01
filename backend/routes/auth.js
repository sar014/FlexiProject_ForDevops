const express = require('express'); 

const router = express.Router(); 

const bcrypt = require('bcryptjs'); 

const jwt = require('jsonwebtoken'); 

const User = require('../models/user'); 

// User Registration
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user in the database
        const newUser = new User({
            username,
            password: hashedPassword, // Store hashed password
        });

        await newUser.save(); // Save the user to the database

        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to register user' });
    }
});


router.post('/login', async (req, res) => { 

    const { username, password } = req.body; 

    try { 

        const user = await User.findOne({ username }); 

        if (!user) { 

            return res.status(400).json({ message: 'Invalid username or password' }); 

        } 

    const isMatch = await bcrypt.compare(password, user.password); 

    if (!isMatch) { 

        return res.status(400).json({ message: 'Invalid username or password' }); 

    } 

    const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' }); 

    res.json({ token }); 

    } catch (error) { 

    console.error(error); 

    res.status(500).send('Server Error'); 

    } 

}); 

module.exports = router;