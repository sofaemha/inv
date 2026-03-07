// scripts/auth.mjs
import { execSync } from "child_process";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// --- Config ---
const CONFIG = resolve(__dirname, "../src/provider/auth/config.ts");
const OUTPUT = resolve(__dirname, "../prisma/schema/console/schema.prisma");

// --- Command map ---
const COMMANDS = {
  generate: "generate",
  migrate: "migrate",
  secret: "secret",
  info: "info",
};

// --- Parse args: node scripts/auth.mjs <command> ---
const [, , command] = process.argv;

if (!command || !COMMANDS[command]) {
  console.error(`❌ Unknown command: "${command}"`);
  console.error(`   Available: ${Object.keys(COMMANDS).join(", ")}`);
  process.exit(1);
}

const fullCmd = `pnpx @better-auth/cli@latest ${COMMANDS[command]} --config "${CONFIG}" --output "${OUTPUT}"`;

console.log(`▶ Running: ${fullCmd}\n`);
execSync(fullCmd, { stdio: "inherit" });
