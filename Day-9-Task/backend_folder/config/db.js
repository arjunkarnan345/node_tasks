import mongoose from "mongoose";//step - 38

//step-39 / fuction create and async function
 const connectDb = async()=>{

    try {
        //step-42 / variable create
        const conn = await mongoose.connect(process.env.MONGO) //./.env "MONGO" create
        console.log(`Database Connected ${conn.connection.host}`);
        
    } catch (error) {
        console.log('Database Not Connected');
        
        
    }

 }




 export default connectDb;//step-40