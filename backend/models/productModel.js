import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name : {type:String , required:true },
    image : {type:Array , required:true  },
    brand : {type:String , required:true },
    category : {type:String , required:true  },
    description : {type:String , required:true },
    countInStock : {type:String , required : true},
    price : {type:Number ,required: true},
    numReviews : {type: Number , required: true }
},
{
    timestamps:true
}
);

const Product = mongoose.model('Product' , productSchema);
export default Product;