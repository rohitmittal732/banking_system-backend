const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email is required"],
        lowercase:true,
        unique:[true,"email is already exist"],
        trim:true,
        match:[/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,"Please enter a valid email"]
    },
    name:{
        type:String,
        required:[true,"name is required for creating account"],

    },
    password:{
        type:String,
        required:[true,"password is required for creating account"],
        minlength:[6,"Atleast 6 characters in password"],
        select:false
    }
},{
    timestamps:true
})