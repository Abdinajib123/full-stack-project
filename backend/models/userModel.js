import mongoose from "mongoose";




const userSchema = new mongoose.Schema(
    {
        userName :{
             type:String,
             unique:true,
             lowercase:true,
             required:true

        },
        email:{
            type:String,
            lowercase:true,
            unique:true,
            validate:[validator.isEmail,'please enter email']

        },
        password:{
            type:String,
            lowercase:true,
            validate:[
                {
                    validator:value =>validator.isStrongPassword(value),
                    message:"enter strong password"

                }
            ]
        }

    },
    {
        timestamps:true
    }
)