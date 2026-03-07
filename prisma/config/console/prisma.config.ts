import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "../../../prisma/schema/console/schema.prisma",
  migrations: {
    path: "prisma/migration/console",
  },
  datasource: {
    url: process.env["DB_PRISMA_CONSOLE"],
  },
});
