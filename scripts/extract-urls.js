const fs = require('fs');
const sql = fs.readFileSync('dbtzar7ap8dnym.sql', 'utf8');
const idx = sql.indexOf("(182, 11, '_elementor_data', '");
if (idx === -1) {
  console.log('not found');
  process.exit(1);
}
const start = idx + "(182, 11, '_elementor_data', '".length;
let depth = 0;
let i = start;
for (; i < sql.length; i++) {
  if (sql[i] === '[') depth++;
  if (sql[i] === ']') {
    depth--;
    if (depth === 0) break;
  }
}
let data = sql.slice(start, i + 1);
data = data.replace(/\\"/g, '"').replace(/\\\//g, '/');
const urls = [...new Set(data.match(/https?:\/\/[^"\\]+/g) || [])];
urls.forEach((u) => console.log(u));
