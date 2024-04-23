import { Schema, model } from "mongoose";

interface IBot {
    id: String, 
    username: String, 
    avatar: String,
    token: String,
}

const botSchema = new Schema<IBot>({
    id: {type: String, required: true}, 
    username: {type: String, required: true},  
    avatar: {type: String, required: true}, 
    token:{type: String, required: true}, 
})

export default model<IBot>("bot", botSchema)