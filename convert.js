const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/assets');

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  } 

  files.forEach((file) => {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const inputPath = path.join(directoryPath, file);
      const outputPath = path.join(directoryPath, path.basename(file, ext) + '.webp');
      
      sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => {
          console.log(`Converted ${file} to WebP`);
          fs.unlinkSync(inputPath); // Delete the original file
        })
        .catch(err => console.error(`Error converting ${file}:`, err));
    }
  });
});
