// pages/api/extract-features.js

import { exec } from "child_process";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST supported" });
  }

  const scriptPath = path.join(
    process.cwd(),
    "src/scripts/process_image_features.js"
  );

  exec(`node ${scriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error("Error running script:", stderr);
      return res.status(500).json({ message: "Script error", error: stderr });
    }

    return res
      .status(200)
      .json({ message: "Feature extraction complete", output: stdout });
  });
}
