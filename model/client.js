import mongoose from 'mongoose';
 
const clientSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true },
);
 
const User = mongoose.model('Client', clientSchema);
 
export default Client;