import mongoose from "mongoose";

function connectDb() {
    mongoose.connect('mongodb://localhost:27017/CleintWork')
        .then(async (res) => {
            console.log('Database is connected');
            
            // Test insertion to create the database and collection
            const testSchema = new mongoose.Schema({ name: String });
            const TestModel = mongoose.model('Test', testSchema);
            await TestModel.create({ name: 'Test Document' });
            console.log('Test document inserted.');
        })
        .catch(err => console.error('Failed to connect to the database:', err));
}

export default connectDb;
