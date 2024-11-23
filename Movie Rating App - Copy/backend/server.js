const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const MovieReviews=require("./models/movieModel")
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://localhost/MovieDB",
    {
        useNewUrlParser:true,
        //useUnifiedTopology:true,
    }
)
.then(()=>{console.log("Mongo DB Connection Successfull..")})
.catch((err)=>{console.log("Mongo DB Connection Unsuccessfull")})

app.route("/movies")
.get((req,res)=>
{
    MovieReviews.find().then((reviews)=>
    {
            res.status(200).json(reviews)
        }).catch((err)=>
        {
            res.status(404).send("An error occured")
        })
    
    })
    //res.send("Following are the Movies Details..")

.post((req,res)=>
{
    if(req.body)
    {
        const newReview=new MovieReviews(req.body)
        newReview.save()
        .then(()=>
            res.send("Saved Details Successfully..")
        )
        .catch((err)=>
        {
            res.status(404).send("An error Occured")
        })
        
    }
    else
    {
        res.send("please provide Reviews")
    }
    
})

app.route('/movies/:id')
.put((req,res)=>
{
    const reviewid=req.params.id
    const updatedReview=req.body
    MovieReviews.findOne({id:{$eq:reviewid}}).then((review)=>
    {

        MovieReviews.findByIdAndUpdate(review._id,updatedReview,{new:true}).then(()=>
            {
                    res.status(200).send("Successfully Updated")
                }).catch((err)=>
                {
                    res.status(404).send("An error occured")
                })

    })
    
    
    })

    

.delete((req,res)=>
{
    const reviewid=req.params.id
     MovieReviews.findOneAndDelete({id:{$eq:reviewid}}).then(()=>
    {
        
        res.status(200).send("Successfully Deleted")
        }).catch((err)=>
        {
            res.status(404).send("An error occured")
            console.log(err)
        })
    
    })
    


app.listen(4000,()=>
{
    console.log("Server Running Successfully..")
})