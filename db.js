import mongoose from 'mongoose';

export async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URI).then( () => {
        console.log('Connected to DB')
    }).catch(err => {
        console.log(err.message)
    });
}