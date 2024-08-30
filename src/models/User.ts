import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  username: string
  password: string
  role: 'superadmin' | 'admin' | 'faculty' | 'student'
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['superadmin', 'admin', 'faculty', 'student'], required: true },
},
{
  timestamps: true
})

export default mongoose.model<IUser>('User', UserSchema)
