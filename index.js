const fs = require('fs');

const PORT = process.env.PORT || 3001;
// utility to generate the HTML page
const buildHtml = require('./src/htmlUtility');
const collectData = require('./src/collectData');

// function to write HTML page to the disk
const writeToDisk = data => {
    fs.writeFile('./dist/output.html', data, err => {
        console.log(err ? err : 'Successfully generated HTML file!');
    })
};

// Collect the data and generate the page
const main = (async () => buildHtml(await collectData()))

// write the page HTML to disk
main().then(writeToDisk)