import mongoose, { Schema }  from "mongoose";
const ObjectId = Schema.Types;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    }, 
    slug: {
        type: String,
        lowercase: true,
        unique: true,
        index: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "Category"
    },
    image:{
       type: String, 
       required: true,  
    }
}, { timestamps: true} );

export default mongoose.model('Products', productSchema);


