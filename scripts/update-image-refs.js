const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '../app');

function findTsxFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const filePath = path.join(dir, item);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findTsxFiles(filePath, files);
    } else if (item.endsWith('.tsx')) {
      files.push(filePath);
    }
  }
  return files;
}

function updateImageRefs(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Replace .jpg, .jpeg, .png with .webp in src attributes
  // But only for local images (starting with /)
  content = content.replace(/src="(\/[^"]+)\.(jpg|jpeg|png)"/g, 'src="$1.webp"');

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    const matches = original.match(/src="\/[^"]+\.(jpg|jpeg|png)"/g) || [];
    console.log(`✓ ${path.relative(appDir, filePath)} - ${matches.length} refs updated`);
    return matches.length;
  }
  return 0;
}

const files = findTsxFiles(appDir);
let totalUpdated = 0;

for (const file of files) {
  totalUpdated += updateImageRefs(file);
}

console.log(`\n✓ Done! Updated ${totalUpdated} image references`);
