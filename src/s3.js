require('dotenv').config();
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

function uploadFile(file, delimiter = '') {
  //temp
  let fileStream;
  let key;
  if (typeof file === 'string') {
    fileStream = fs.createReadStream(file);
    key = `${delimiter}${file.split('/').reverse()[0]}`;
  } else {
    fileStream = fs.createReadStream(file.path);
    key = `${delimiter}${file.filename}`;
  }

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: key,
  };

  return s3.upload(uploadParams).promise();
}

function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName,
  };

  return s3.getObject(downloadParams).createReadStream();
}

function getFilesFromList() {
  const downloadParams = {
    Bucket: bucketName,
    Prefix: 'photosessions/lits/',
    // Delimiter: '/',
  };

  return s3.listObjects(downloadParams, (err, data) => {
    console.log(data, 's3 callback');
  });
}

module.exports.uploadFile = uploadFile;
module.exports.getFileStream = getFileStream;
module.exports.getFilesFromList = getFilesFromList;

// uploads a file to s3
