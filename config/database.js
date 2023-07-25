const mongoose = require("mongoose");
if (process.env.NODE_ENV != "production"){
   require("dotenv").config(); 
}


const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
async function database(){
    try{
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_USE}:${process.env.MONGO_PASSWORD}@cluster0.dsl9bpe.mongodb.net/YelpCamps?retryWrites=true&w=majority`, connectionParams).then(()=>console.log("DB Connected")).catch((error)=>console.log(error))
        console.log("Database Connected!")
    }
    catch(e){
        console.log(`${e} Error in Database Connectivity!`)
    }
    
}   

//const database = mongoose.connect("mongodb://127.0.0.1:27017/NewYelpCamps", connectionParams).then(()=>console.log("Database Connected Successfully")).catch(e =>console.log(`${e} Error in Database Connectivity`));



module.exports= database;