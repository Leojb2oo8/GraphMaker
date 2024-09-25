import fs from "fs";

let logName = "Log.txt";

export function openLogFile(name = logName) {
  logName = name;
  fs.writeFile(`./Logs/${logName}`, "", (err) => {
    if (err) throw err;
  });
}

export function writeInFile(data) {
  let txt = "";
  switch (typeof data) {
    case "string":
    case "number":
      txt = `${data}\n`;
      break;
    case "object":
      txt = Array.isArray(data)
        ? data.map((item) => `${JSON.stringify(item)}\n`).join("")
        : `${JSON.stringify(item)}\n`;
      break;
  }

  fs.appendFileSync(`./Logs/${logName}`, txt);
}
