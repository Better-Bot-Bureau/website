import { Schema, model, ObjectId, Types } from "mongoose";

interface IUser {
    id: String, 
    username: String,
    avatar: String,
    token: String,
    bots: [any]
}

const userSchema = new Schema<IUser>({
    id: {type: String, required: true, unique: true},
    username: {type: String, required: true},
    avatar: {type: String, required: true},
    token: {type: String, required: true},
    bots: []
})

export default model<IUser>("user", userSchema);