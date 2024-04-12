// import mongoose from "mongoose";

// export const connectDB=async()=>{
//     const {connection}=await mongoose.connect("mongodb://0.0.0.0:27017/nessco")
//     console.log(`MongoDB connected with ${connection.host}`)
// } 
import { MongoClient } from "mongodb";
const connectionString = process.env.ATLAS_URI || "mongodb://0.0.0.0:27017/nessco";
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}
let db = conn.db("nessco");
export default db;