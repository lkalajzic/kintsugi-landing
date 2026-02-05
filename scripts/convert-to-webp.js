const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

function findImages(dir, images = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findImages(filePath, images);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      images.push(filePath);
    }
  }
  return images;
}

async function convertToWebP(imagePath) {
  const ext = path.extname(imagePath);
  const webpPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  try {
    await sharp(imagePath)
      .webp({ quality: 85 })
      .toFile(webpPath);

    const originalSize = fs.statSync(imagePath).size;
    const webpSize = fs.statSync(webpPath).size;
    const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);

    console.log(`✓ ${path.basename(imagePath)} → ${path.basename(webpPath)} (${savings}% smaller)`);
    return { original: imagePath, webp: webpPath, savings };
  } catch (err) {
    console.error(`✗ Failed: ${imagePath} - ${err.message}`);
    return null;
  }
}

async function main() {
  const images = findImages(publicDir);
  console.log(`Found ${images.length} images to convert\n`);

  let totalOriginal = 0;
  let totalWebP = 0;

  for (const img of images) {
    const result = await convertToWebP(img);
    if (result) {
      totalOriginal += fs.statSync(result.original).size;
      totalWebP += fs.statSync(result.webp).size;
    }
  }

  const totalSavings = ((1 - totalWebP / totalOriginal) * 100).toFixed(1);
  console.log(`\n✓ Done! Total savings: ${totalSavings}%`);
  console.log(`  Original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  WebP: ${(totalWebP / 1024 / 1024).toFixed(2)} MB`);
}

main();
