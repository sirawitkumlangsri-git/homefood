import { d as defineEventHandler, g as getQuery, r as readBody } from '../../nitro/nitro.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const prisma = new PrismaClient();
const user = defineEventHandler(async (event) => {
  const { email } = getQuery(event);
  if (event.req.method === "DELETE") {
    try {
      await prisma.user.delete({
        where: { email }
      });
      return { message: "User deleted successfully" };
    } catch (error) {
      console.error(error);
      return { error: "Failed to delete user" };
    }
  }
  if (event.req.method === "PUT") {
    try {
      const userData = await readBody(event);
      const updatedUser = await prisma.user.update({
        where: { email },
        data: userData
      });
      return { message: "User updated successfully", user: updatedUser };
    } catch (error) {
      console.error(error);
      return { error: "Failed to update user" };
    }
  }
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch users" };
  }
});

export { user as default };
//# sourceMappingURL=user.mjs.map
