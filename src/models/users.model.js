import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true},
    name: { type: String, required: true},
    password: { type: String, required: true},
    admin: { type: Boolean, required: true}
},
{versionKey: false},
);

const User = model('users', UserSchema);

export default User;
