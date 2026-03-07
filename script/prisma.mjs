// scripts/prisma.mjs
import { execSync } from "child_process";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// --- Config map ---
const CONFIGS = {
  console: resolve(__dirname, "../prisma/config/console/prisma.config.ts"),
  postgresql: resolve(
    __dirname,
    "../prisma/config/postgresql/prisma.config.ts",
  ),
};

// --- Command map ---
const COMMANDS = {
  generate: "prisma generate",
  push: "prisma db push",
  pull: "prisma db pull",
  migrate: "prisma migrate dev",
  reset: "prisma migrate reset",
  studio: "prisma studio",
  format: "prisma format",
};

// --- Parse args: node scripts/prisma.mjs <command> <target> ---
const [, , command, target] = process.argv;

if (!command || !COMMANDS[command]) {
  console.error(`❌ Unknown command: "${command}"`);
  console.error(`   Available: ${Object.keys(COMMANDS).join(", ")}`);
  process.exit(1);
}

if (!target || !CONFIGS[target]) {
  console.error(`❌ Unknown target: "${target}"`);
  console.error(`   Available: ${Object.keys(CONFIGS).join(", ")}`);
  process.exit(1);
}

const configPath = CONFIGS[target];
const prismaCmd = COMMANDS[command];
const fullCmd = `pnpm exec ${prismaCmd} --config="${configPath}"`;

console.log(`▶ Running: ${fullCmd}\n`);
execSync(fullCmd, { stdio: "inherit" });
