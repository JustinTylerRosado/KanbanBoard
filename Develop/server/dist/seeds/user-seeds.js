import bcrypt from 'bcrypt';
import { User, sequelize } from '../models/index.js';
export const seedUsers = async () => {
    try {
        // Sync the models (optional if you've already synced)
        await sequelize.sync();
        const saltRounds = 10;
        await User.bulkCreate([
            { username: 'JollyGuru', password: bcrypt.hashSync('password', saltRounds) },
            { username: 'SunnyScribe', password: bcrypt.hashSync('password', saltRounds) },
            { username: 'RadiantComet', password: bcrypt.hashSync('password', saltRounds) },
        ], { individualHooks: false } // Set to false since we are already hashing here
        );
        console.log('Users seeded successfully.');
    }
    catch (error) {
        console.error('Error seeding users:', error);
    }
};
seedUsers().then(() => process.exit()).catch((err) => {
    console.error(err);
    process.exit(1);
});
