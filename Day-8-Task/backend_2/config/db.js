import mongoose from 'mongoose'


const connectDb = async ()=>{

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
     console.log(`Connected Sucessfully ${ conn.Connection.host}`);
      }
     catch (error) {
        console.log('Not connected',error);
        
        
    }
}


export default connectDb