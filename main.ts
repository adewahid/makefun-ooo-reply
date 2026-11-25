// make.fun entry: Funniest One-Line Out-of-Office Reply
// Writes a single one-line out-of-office auto-reply to /output/entry.txt.
// The joke: the email is "forwarded" to the one person best placed to help —
// the sender's own future self, next week. It reads exactly like a real
// away message, lands on the first read, and turns the usual "contact
// someone else while I'm away" line on its head — the only person who can
// help is the one who isn't here yet.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I'm away until Monday. Your email has been forwarded to the person best placed to help you: me, next week.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
