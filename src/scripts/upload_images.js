const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");
const mime = require("mime");

const data = require("../data/data.json");
const serviceAccount = require("../lib/aquot_service_account.json");

// gs://fir-auth-6de3c.appspot.com
// gs://fir-auth-6de3c.firebasestorage.app

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://fir-auth-6de3c.firebasestorage.app",
});

const bucket = admin.storage().bucket();
const IMAGE_FOLDER = path.join(__dirname, "../../public/product_images");
const STORAGE_FOLDER = "product_images";

async function uploadImage(localPath, imageName) {
  const storagePath = `${STORAGE_FOLDER}/${imageName}`;
  const contentType = mime.getType(localPath);

  await bucket.upload(localPath, {
    destination: storagePath,
    metadata: {
      contentType,
      metadata: {
        firebaseStorageDownloadTokens: Date.now().toString(),
      },
    },
  });

  return `https://firebasestorage.googleapis.com/v0/b/${
    bucket.name
  }/o/${encodeURIComponent(storagePath)}?alt=media`;
}

async function processData() {
  for (const product of data) {
    const newImages = [];

    for (const imagePath of product.images) {
      const imageName = path.basename(imagePath);
      const localImagePath = path.join(IMAGE_FOLDER, imageName);

      if (fs.existsSync(localImagePath)) {
        const url = await uploadImage(localImagePath, imageName);
        newImages.push(url);
      } else {
        console.warn(`Image not found: ${localImagePath}`);
        newImages.push(imagePath); // Fallback to original path
      }
    }

    product.images = newImages;
  }

  fs.writeFileSync(
    path.join(__dirname, "../data/data-with-urls.json"),
    JSON.stringify(data, null, 2)
  );
  console.log("✅ Updated data saved to data-with-urls.json");
}

processData().catch(console.error);
