import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User';
import mongoose from 'mongoose';

interface Collection {
  name: string;
}

export const login = async (req: Request, res: Response) => {
  console.log('Login route hit');
  const { username, password } = req.body;

  if (typeof username !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ message: 'Username and password must be strings' });
  }

  try {
    console.log("Username: ", username);
    const db = req.app.locals.db as mongoose.Connection;
    console.log("db: ", db)
    if (!db || !db.db) {
      throw new Error('Database connection is not available.');
    }

    const collections = await db.db.listCollections().toArray();
    console.log('Collections in the database:', collections);
    
    // const users = await User.find();
    // console.log('Users Collection:', users);

    const userCollection = db.db.collection('users'); 
    console.log('Users Collection:', await userCollection.find().toArray()); 


    const user = await User.findOne({ username }).exec();
    console.log('User found:', user); 

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password match:', isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role }, 
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' }
    );

    return res.json({ token });

  } catch (error) {
    console.error('Server error:', error); 
    return res.status(500).json({ message: 'Server error' });
  }
};
