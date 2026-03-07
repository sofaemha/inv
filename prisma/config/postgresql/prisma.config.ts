import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "../../../prisma/schema/postgresql/",
  migrations: {
    path: "../../../prisma/migration/postgresql",
  },
  datasource: {
    url: process.env["DB_COCKROACH"],
  },
});
