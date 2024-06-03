const User = require('../Model/users.js');

// GetUser

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error getting users', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// AddUser

const postUser = async (req, res) => {
    const { name, lastname, email, password } = req.body;
    try {
        const newUser = new User({
            name,
            lastname,
            email,
            password
        });
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        console.error('Error adding user', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// UpdateUser
const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { name, lastname, email, password } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, { name, lastname, email, password }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// DeleteUser

const deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { getUsers, postUser, updateUser, deleteUser };
