import mongoose from "mongoose";

function connectDb() {
    const url = "mongodb+srv://asadrafi1221:n85WJENVGAQDK0QV@backendapisbotsystem.wbrck.mongodb.net/";

    mongoose.connect(url)
        .then(async () => {
            console.log('Database is connected');
        
        })
        .catch(err => console.error('Failed to connect to the database:', err));
}

export default connectDb;
