import mongoose from 'mongoose';

const carSchema = new mongoose.Schema(
    {
        veiculo: {
            type: String,
            required: true,
        },
        marca: {
            type: String,
            required: true,
        },
        ano: {
            type: Number,
            required: true,
        },
        descricao: {
            type: String,
            required: true
        },
        vendido: {
            type: Boolean
        }
    },
    {
        timestamps: true
    }
);

const Car = mongoose.model('Car', carSchema)

export default Car