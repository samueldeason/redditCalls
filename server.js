const fs = require("fs");


const chirps = [{chirp: "chirp1"}, {chirp: "chirp2"}, {chirp: "chirp3"}, {chirp: "chirp4"}, {chirp: "chirp5"}];

fs.writeFile("chirps.json", JSON.stringify(chirps), () => {
    console.log("chirps appended")
});

