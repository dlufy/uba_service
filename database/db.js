const mongoose = require("mongoose")
const config = require("../config/config.json")

const connectDb = ()=> {
    return mongoose.connect(`mongodb+srv://gatekeeper:${process.env.MongoPassword|config.Database.Password}@cluster0.yjxfz.mongodb.net/felinos?retryWrites=true&w=majority`);
}
 
module.exports = connectDb;
