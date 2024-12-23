const fs = require('fs');
const JSONStream = require('jsonstream')
const es = require('event-stream');

const filePath = './response.json'; // Replace with your JSON file path
let count = 0;
const maxProductsToDisplay = 2;

fs.createReadStream(filePath)
    .pipe(JSONStream.parse('*')) // Parse each product in the array
    .pipe(
        es.mapSync((product) => {
            if (count < maxProductsToDisplay) {
                console.log(product);
                count++;
            }
            if (count === maxProductsToDisplay) {
                console.log('Displayed top 5 products.');
                process.exit(0); // Exit the process after logging the top 5 products
            }
        })
    )
    .on('error', (err) => {
        console.error('Error reading file:', err);
    })
    .on('end', () => {
        console.log('Finished reading file.');
    });
