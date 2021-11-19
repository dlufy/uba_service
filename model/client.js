const mongoose =  require("mongoose")
 
const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId :{
      type:String,
    },
    email: {
        type: String,
        required: true,
      },
      contact: {
        type: String,
      },
      company: {
        type: String,
      },
      additionInfo: {
        type: String,
      },
  },
  { timestamps: true },
);
 
const Client = mongoose.model('Client', clientSchema);
 
module.exports = Client;