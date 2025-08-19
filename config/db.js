import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('MySQL connected with Prisma');
  } catch (error) {
    console.error('Prisma connection failed:', error);
  }
};

export default connectDB;
