import mongoose from 'mongoose'


export const Connection= async()=>
{
    const URL= "mongodb://localhost:27017/users"
        try{
       await  mongoose.connect(URL,{useNewUrlParser:true})
       console.log("Database connected Successfully")
    }
    catch(error)
    {
        console.log("error connecting to the database",error)

    }
}
export default Connection