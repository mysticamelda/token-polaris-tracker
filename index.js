const token_polaris_tracker = require('token-polaris-tracker');
const token_polaris_collector = require('token-polaris-collector');
const mocha = require('mocha');
const webpack_cli = require('webpack-cli');
const moment = require('moment');
const enzyme = require('enzyme');
const request = require('request');
const bluebird = require('bluebird');
const ethers = require('ethers');

// Calculate the factorial of a number recursively
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log('Factorial of 5:', factorial(5));

const fs = require('fs');
fs.readdir('.', { withFileTypes: true }, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    console.log(file.isDirectory() ? `${file.name} is a directory` : `${file.name} is a file`);
  });
});

// Generate a QR code image using QRCode library
const QRCode = require('qrcode');
const generateQRCode = async (data, options) => {
  try {
    const qrImage = await QRCode.toDataURL(data, options);
    return qrImage;
  } catch (error) {
    console.error('Error generating QR code:', error);
    return null;
  }
}
generateQRCode('https://example.com', { errorCorrectionLevel: 'H' })
  .then(qrImage => console.log('QR Code Image:', qrImage));

const array = [5, 12, 8, 130, 44];
const found = array.find(element => element > 10);
console.log(found);

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
const delay = async () => {
  console.log('Start delay');
  await setTimeoutPromise(1000);
  console.log('End delay');
};
delay();

const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
readFile('example.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));