import fs from "fs";

export function openLogFile(name) {
  fs.writeFile(`./Logs/${name}`, "", (err) => {
    if (err) throw err;
  });
}

export function writeInFile(data, logLocation) {
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

  fs.appendFileSync(`./Logs/${logLocation}`, txt);
}
