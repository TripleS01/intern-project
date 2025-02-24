import mongoose from "mongoose";

const MONGO_URL = 'mongodb://localhost:27017/intern-project'

const connectToMongoDB = async () => {
    try {

        console.log('Attempting to connect to database...');
        await mongoose.connect(MONGO_URL, {});
        console.log('Connected to database...');

    } catch (error) {
        console.log('Failed to connect to database...', error.message)
        process.exit(1);

    }
}

export default connectToMongoDB