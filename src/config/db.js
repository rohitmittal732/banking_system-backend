const dns=require('dns')
const mongoose =require('mongoose');

dns.setServers(['8.8.8.8','0.0.0.0']);
function connectDb(){
    mongoose.connect(process.env.MONGO_URL).
    then(()=>{
        console.log("Server is connected to db")
})
    .catch(err=>{
      console.log("Error occur in connecting database",err)
      process.exit(1)
    })
}

module.exports=connectDb;