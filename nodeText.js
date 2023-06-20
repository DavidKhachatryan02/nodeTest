const os = require("os");
const fs = require("fs");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const today = new Date();

const yyyy = today.getFullYear();
let mm = today.getMonth() + 1;
let dd = today.getDate();
let min = today.getMinutes();
let hour = today.getHours();
let sec = today.getSeconds();

if (dd < 10) dd = "0" + dd;
if (mm < 10) mm = "0" + mm;

let formattedDay = dd + "/" + mm + "/" + yyyy;
let formattedHour = hour + ":" + min + ":" + sec;

let opSistem = os.type() + " " + os.release();
let netInfo = os.networkInterfaces();
let ip = Object.values(netInfo)[0][0].address;

let content = `File created : ${formattedDay} , ${formattedHour}
  
OS: ${opSistem}
CPU: ${os.cpus()[0].model}
IP: ${ip}
  `;

readline.question("FileName: ", (fileName) => {
  fs.appendFile(fileName, content, function (err) {
    if (err) throw err;
    console.log("Done!");
  });
  readline.close();
});

//axpers shat hajelier anuns gagoya
