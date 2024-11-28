import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;


// const mongoose = require('mongoose');

// mongoose.connect('<your_connection_string>', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB Atlas!'))
//   .catch((err) => console.error('Error connecting to MongoDB:', err));
