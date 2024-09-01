import mongoose from 'mongoose';
import * as dotenv from 'dotenv'; 
import * as bcrypt from 'bcrypt'; 
import { UserSchema, IUser, UserRole } from '../src/models/User'; // Ensure UserRole is imported

dotenv.config(); // Load environment variables

// console.log("MONGO:", process.env.MONGO_URI);
// console.log("ENVI:", process.env)

// if (!process.env.MONGO_URI) {
//   throw new Error('MONGO_URI is not defined in the environment variables');
// }

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/db")
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Create the User model
const User = mongoose.model<IUser>('User', UserSchema);

// Retrieve command-line arguments for username, password, and role
const [, , username, plainPassword, role] = process.argv;

if (!username || !plainPassword || !role) {
  console.error('Please provide all three arguments: username, password, and role');
  process.exit(1);
}

const validRoles = Object.values(UserRole);
if (!validRoles.includes(role as UserRole)) {
  console.error('Invalid role provided. Valid roles are:', validRoles.join(', '));
  process.exit(1);
}

async function createUser(username: string, password: string, role: UserRole) {
  const user = new User({ username, password, role });

  try {
    await user.save(); // This will trigger the pre-save middleware and hash the password
    console.log('User created with hashed password:', user.password);
  } catch (error) {
    console.error('Error saving user:', error);
  } finally {
    mongoose.connection.close(); // Close the connection after the operation
  }
}

// Run the function with provided inputs
createUser(username, plainPassword, role as UserRole);
