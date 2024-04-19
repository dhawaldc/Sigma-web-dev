import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basePath = "/Users/dhawalsahu/Documents/Sigma web dev/clear clutter";

async function organizeFiles() {
  try {
    const files = await fs.readdir(basePath);

    for (const item of files) {
      console.log("Processing file:", item);

      const ext = path.extname(item).slice(1); // Get file extension without the dot

      if (ext !== "js" && ext !== "json") {
        const extDirPath = path.join(basePath, ext);

        if (!fsn.existsSync(extDirPath)) {
          await fs.mkdir(extDirPath, { recursive: true });
        }

        await fs.rename(
          path.join(basePath, item),
          path.join(extDirPath, item)
        );

        console.log(`Moved ${item} to ${extDirPath}`);
      }
    }

    console.log("File organization completed.");
  } catch (error) {
    console.error("Error organizing files:", error);
  }
}

// Call the async function to organize files
organizeFiles();
