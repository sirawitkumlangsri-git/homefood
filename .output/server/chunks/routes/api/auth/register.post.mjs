import { d as defineEventHandler, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
import { PrismaClient } from '@prisma/client';
import { useRouter } from 'vue-router';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const prisma = new PrismaClient();
const register_post = defineEventHandler(async (event) => {
  const { email, phoneNumber, fullname } = await readBody(event);
  useRouter();
  const existingUser = await prisma.user.findUnique({
    where: { email }
  });
  if (existingUser) {
    throw createError({
      statusCode: 400,
      message: "User already exists."
    });
  }
  const newUser = await prisma.user.create({
    data: {
      email,
      phoneNumber,
      fullname
    }
  });
  return {
    message: "User registered successfully",
    user: newUser
  };
});

export { register_post as default };
//# sourceMappingURL=register.post.mjs.map
