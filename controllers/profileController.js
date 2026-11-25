const User = require('../models/User');
const STATUSES = ['pregnant', 'new mother', 'experienced mother', 'mother of older kids community', 'angel mother'];
exports.getMe = async (req, res) => {

    try{
        const user = await User.findById(req.user.id).select('name email motherhoodStatus');
        if (!user) return res.status(404).json({ message: 'User not found'});
        res.json({ name: user.name, email: user.email, motherhoodStatus: user.motherhoodStatus});
        } catch (err) {
    res.status(500).json({ message: 'Server error' });
 }
};
exports.updateMe = async (req, res) => {
  try {
    const { name, email, motherhoodStatus } = req.body;
    const updates = {};

    if (name !== undefined) {
      if (!name.trim()) return res.status(400).json({ message: 'Name cannot be empty' });
      updates.name = name.trim();
    }
    if (email !== undefined) {
      if (!/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ message: 'Invalid email' });
      const taken = await User.findOne({ email: email.toLowerCase(), _id: { $ne: req.user.id } });
      if (taken) return res.status(409).json({ message: 'Email already in use' });
      updates.email = email.toLowerCase();
    }
    if (motherhoodStatus !== undefined) {
      if (!STATUSES.includes(motherhoodStatus))
        return res.status(400).json({ message: 'Invalid motherhood status' });
      updates.motherhoodStatus = motherhoodStatus;
    }

    const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true, runValidators: true });
    res.json({ name: user.name, email: user.email, motherhoodStatus: user.motherhoodStatus });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};