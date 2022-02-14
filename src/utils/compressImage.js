const fs = require('fs');
const sharp = require('sharp');

function compressImage(f) {
  const readFilePromise = new Promise((resolve, reject) => {
    fs.readFile(f.path, (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });

  const compressImagePromise = new Promise((resolve, reject) => {
    readFilePromise.then((buffer) => {
      sharp(buffer)
        .webp({ quality: 20 })
        .toFile(`${f.path}`)
        .then(() => {
          resolve();
        })
        .catch((err) => reject(err));
    });
  });

  return compressImagePromise;
}

module.exports = compressImage;
