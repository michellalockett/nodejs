const path = require('path');
const fs = require('fs');// import fs from 'fs';

let chirpPath = path.join(__dirname, "../chirps/chirps.json");

let chirpArray = [
    {
        author: "Michella",
        chirp: "January is the first month",
    },
    {
        author: "Red",
        chirp: "Febuary is the second month",
    },
    {
        author: "Green",
        chirp: "March is the third month",
    },
    {
        author: "Blue",
        chirp: "April is the fourth month",
    },
    {
        author: "Chella",
        chirp: "May is the fifth month",
    },
    {
        author: "Yellow",
        chirp: "June is the sixth month",
    },
];

fs.writeFile(chirpPath, JSON.stringify(chirpArray, null, 2), (err) => {
    if (err) console.log(`Something happened writing file: ${err}`);

    console.log('Great Job!');
});

//fs.readFile(chirpPath, (err, data) => {
 //   if (err) console.log(`Error occurred: ${err}`);

 //   console.log(JSON.parse(data));
//});