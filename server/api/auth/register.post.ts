//server/api/auth/register.post.ts

import { PrismaClient } from '@prisma/client';
import { useRouter } from 'vue-router';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { email, phoneNumber, fullname } = await readBody(event);
  const router = useRouter()
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw createError({
      statusCode: 400,
      message: 'User already exists.',
    });
  }
  const newUser = await prisma.user.create({
    data: {
      email,
      phoneNumber,
      fullname
    },
  });

  return {
    message: 'User registered successfully',
    user: newUser,
  };
});