import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
    accountId: string;
    username: string;
    age: number;
    avatar: string;
    password: string;
    email: string;
    country: string;
    created_at: string;
    mfa_enabled: boolean;
}

const user = new Schema<IUser>({
    accountId: { type: String, required: true },
    username:  { type: String, required: true },
    age: { type: Number, required: true },
    avatar: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    country: { type: String, required: true },
    created_at:    { type: String, required: true },
    mfa_enabled: { type: Boolean, required: true }
})

export default model<IUser>("users", user); 