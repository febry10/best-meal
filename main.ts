import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "The rendang my grandmother simmered since dawn in Padang — coconut milk, torch ginger, smoke in the walls — fell apart under my spoon and tasted like the last rainy afternoon before I left home.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, entry, "utf8");
console.log(entry);
process.exit(0);
