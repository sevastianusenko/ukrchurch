// Copies the PDF.js worker and its runtime data (CMaps, standard fonts,
// wasm decoders, ICC profiles) from node_modules into public/pdfjs, so the
// library reader loads them from our own origin at the exact installed
// version. Runs before `dev` and `build`; public/pdfjs is gitignored.
import { cpSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const root = dirname(require.resolve("pdfjs-dist/package.json"));
const out = join(process.cwd(), "public", "pdfjs");

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
cpSync(join(root, "legacy", "build", "pdf.worker.min.mjs"), join(out, "pdf.worker.min.mjs"));
for (const dir of ["cmaps", "standard_fonts", "wasm", "iccs"]) {
  cpSync(join(root, dir), join(out, dir), { recursive: true });
}
console.log("pdfjs assets copied to public/pdfjs");
