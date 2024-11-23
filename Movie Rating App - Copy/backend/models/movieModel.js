const mongoose=require("mongoose")
//Creating a schema for your collection
const moviesSchema=new mongoose.Schema(
    {
        'id':Number,
        'moviename':String,
        'genre':String,
        'rating':Number
    }
);
//Create a model using schema
const MovieReviews=mongoose.model('MovieReviews',moviesSchema)
console.log(MovieReviews)
module.exports=MovieReviews


