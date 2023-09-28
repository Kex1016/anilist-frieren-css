import { log } from "console";

log("Minifying...");

const bioHtml = Bun.file("./bio.html");

// Minify the content
const text = await bioHtml.text();
const minified = text
  .replace(/\n/g, "")
  .replace(/\s+/g, " ")
  .replace(/>\s+</g, "><")
  .trim();

// Output the minified content
await Bun.write("./bio.min.html", minified);
log("Done!");
