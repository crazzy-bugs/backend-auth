import mongoose from 'mongoose';

const testConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/SIH_test");
    console.log('Connection successful');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Connection failed:', error);
  }
};

testConnection();
