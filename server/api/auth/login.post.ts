//server/api/auth/login.post.ts

import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken'
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { phoneNumber } = await readBody(event);

  const user = await prisma.user.findUnique({
    where: { phoneNumber },
  });

  if (!user) {
    throw createError({
      statusCode: 400,
      message: 'User not found.',
    });
  }

  const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });


  return {
    message: 'Login successful',
    token,
    user: {
      id: user.id,
      email: user.email,
      fullanme: user.fullname,
      phoneNumber: user.phoneNumber,
      role: user.role,
    },
  };
});