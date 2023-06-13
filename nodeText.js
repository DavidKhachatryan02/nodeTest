const os = require("os");
const fs = require("fs");
const ip = require("ip");
const prompt = require("prompt-sync")();

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

let fileName = prompt("FileName: ");

fs.createWriteStream(fileName).write(
  `File created : ${formattedDay} , ${formattedHour}
  
OS: ${opSistem}
CPU: ${os.cpus()[0].model}
IP: ${ip.address()}
  `
);
