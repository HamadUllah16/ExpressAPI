const mongoose = require("mongoose");
require("dotenv").config();


const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
const database = mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.dsl9bpe.mongodb.net/YelpCamps?retryWrites=true&w=majority`, connectionParams).then(()=>console.log("DB Connected")).catch((error)=>console.log(error))
    
//mongoose.connect("mongodb://127.0.0.1:27017/NewYelpCamps").then(()=>console.log("Database Connected Successfully")).catch(e =>console.log(`${e} Error in Database Connectivity`));



module.exports= database;