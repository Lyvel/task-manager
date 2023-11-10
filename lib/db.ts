const { PrismaClient } = require("@prisma/client");

function prismaClientSingleton() {
  return new PrismaClient();
}

const globalForPrisma = globalThis;
globalForPrisma.prisma = globalForPrisma.prisma || prismaClientSingleton();

const prisma = globalForPrisma.prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const db = prisma;
