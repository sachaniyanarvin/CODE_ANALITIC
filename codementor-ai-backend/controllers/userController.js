// backend/controllers/userController.js

// @desc    Get current logged-in user
// @route   GET /api/user/me
// @access  Private
const getMe = async (req, res) => {
    // req.user is set by authMiddleware.protect
    if (!req.user) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    res.json({ user: req.user });
  };
  
  module.exports = { getMe };
  