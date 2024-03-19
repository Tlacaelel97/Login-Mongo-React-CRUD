import mongoose from "mongoose";

export const connectDB = async ()  => {
    try{
        await mongoose.connect("mongodb+srv://user_for_youtube:Rbmu32aEmFs7HcAO@cluster0.cipuqrm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('*** Database is connected')
    } catch(error){
        console.log(error)
    }
    
};