import fs from "fs";
import path from "path";

export async function fetchData() {
  const filePath = path.resolve("./src/data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
}
