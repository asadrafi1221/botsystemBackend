import mongoose from "mongoose";

function connectDb() {
    const url = process.env.MONGOURL;
    console.log(url);  // This will print the URL for verification

    mongoose.connect(url)
        .then(async () => {
            console.log('Database is connected');
        
        })
        .catch(err => console.error('Failed to connect to the database:', err));
}

export default connectDb;
