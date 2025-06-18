const User = require('../models/User');

const seedAdmin = async () => {
  try {
    const adminExists = await User.findOne({ role: 'admin' });
    if (!adminExists) {
      const adminUser = new User({
        username: 'admin',
        email: 'admin@example.com',
        password: 'adminpassword', // Make sure to hash in real app
        role: 'admin',
      });
      await adminUser.save();
      console.log('Admin user seeded');
    }
  } catch (error) {
    console.error('Error seeding admin user:', error.message);
  }
};

module.exports = seedAdmin;
