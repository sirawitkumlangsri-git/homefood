import { d as defineEventHandler, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const prisma = new PrismaClient();
const login_post = defineEventHandler(async (event) => {
  const { phoneNumber } = await readBody(event);
  const user = await prisma.user.findUnique({
    where: { phoneNumber }
  });
  if (!user) {
    throw createError({
      statusCode: 400,
      message: "User not found."
    });
  }
  const token = jwt.sign({ userId: user.id }, "your_secret_key", { expiresIn: "1h" });
  return {
    message: "Login successful",
    token,
    user: {
      id: user.id,
      email: user.email,
      fullanme: user.fullname,
      phoneNumber: user.phoneNumber,
      role: user.role
    }
  };
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
