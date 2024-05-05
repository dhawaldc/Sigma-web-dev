import { writeFile } from "fs";
import fs from "fs/promises";
let data = await fs.readFile("text.txt");
let b = await fs.writeFile("text.txt","or bhi kya haal chal");
console.log(data.toString());
console.log(b);
console.log(data.toString());
