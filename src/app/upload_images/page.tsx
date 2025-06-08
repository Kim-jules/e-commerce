"use client";

import { useState } from "react";

export default function UploadImage() {
  const [loading, setLoading] = useState(false);
  const [log, setLog] = useState("");

  const runScript = async (endpoint: string) => {
    setLoading(true);
    setLog("Running...");

    try {
      const res = await fetch(`/api/${endpoint}`, { method: "POST" });
      const data = await res.json();
      setLog(data.message + "\n\n" + (data.output || ""));
    } catch (error) {
      setLog(
        "Error: " + (error instanceof Error ? error.message : "Unknown error")
      );
    }

    setLoading(false);
  };

  return (
    <div className="p-4 space-y-4 mt-24">
      <button
        onClick={() => runScript("process_image")}
        disabled={loading}
        className="p-4 bg-black text-white"
      >
        Upload Product Images
      </button>

      <button
        onClick={() => runScript("extract_features")}
        disabled={loading}
        className="p-4 bg-green-600 text-white  "
      >
        Extract Features with FastAPI
      </button>

      <pre className="mt-4 bg-gray-100 p-3 rounded">{log}</pre>
    </div>
  );
}
