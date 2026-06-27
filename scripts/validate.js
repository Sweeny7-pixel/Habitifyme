// Validates all exercise.json files against schema.json
// Run: node scripts/validate.js

const fs = require('fs');
const path = require('path');

const schema = JSON.parse(fs.readFileSync('schema.json', 'utf8'));
const exerciseDir = 'exercises';
let errors = 0;
let checked = 0;

const dirs = fs.readdirSync(exerciseDir);
for (const dir of dirs) {
  const jsonPath = path.join(exerciseDir, dir, 'exercise.json');
  if (!fs.existsSync(jsonPath)) {
    console.warn(`⚠  Missing exercise.json in ${dir}`);
    errors++;
    continue;
  }
  try {
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    // Basic required field check
    const required = schema.required || [];
    for (const field of required) {
      if (data[field] === undefined) {
        console.error(`✗  ${dir}: missing required field "${field}"`);
        errors++;
      }
    }
    checked++;
  } catch (e) {
    console.error(`✗  ${dir}: invalid JSON — ${e.message}`);
    errors++;
  }
}

console.log(`\n${checked} exercises checked, ${errors} error(s).`);
process.exit(errors > 0 ? 1 : 0);
