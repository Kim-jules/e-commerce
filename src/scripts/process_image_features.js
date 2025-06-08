const axios = require("axios");
const fs = require("fs");
const path = require("path");
const FormData = require("form-data");

require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const BASE_URL = process.env.BASE_URL;

const API_URL = `${BASE_URL}/seed/process-seed/`; // Replace with your FastAPI URL
const outputDir = path.join(__dirname, "..", "data");

async function processProductFeatures() {
  try {
    // Load the data from the JSON file (assuming image URLs are in this file)
    const data = require("../data/data-with-urls.json");

    // Save the data to a temporary JSON file
    const tempFilePath = path.join(__dirname, "temp_data.json");
    fs.writeFileSync(tempFilePath, JSON.stringify(data, null, 2));

    // Prepare the FormData to send the file
    const form = new FormData();
    form.append("file", fs.createReadStream(tempFilePath));

    // Send the JSON file to the FastAPI endpoint
    const response = await axios.post(API_URL, form, {
      headers: {
        ...form.getHeaders(),
      },
    });

    // Assuming the response contains the updated product data
    const updatedData = response.data;

    // Save the updated data with features to a new file
    fs.writeFileSync(
      path.join(outputDir, "data-with-features.json"),
      JSON.stringify(updatedData, null, 2)
    );
    console.log("✅ Data with features saved to data-with-features.json");

    // Clean up the temporary file
    fs.unlinkSync(tempFilePath);
  } catch (error) {
    console.error("❌ Error processing data:", error);
  }
}

processProductFeatures();
