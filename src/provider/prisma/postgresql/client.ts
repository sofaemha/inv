import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { PrismaClient } from "@/prisma/postgresql/client";

const Prisma = globalThis as unknown as { prisma?: PrismaClient };

const pool = new Pool({ connectionString: process.env.DB_COCKROACH || "" });
const adapter = new PrismaPg(pool);

const prisma = Prisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") Prisma.prisma = prisma;

export default prisma;
