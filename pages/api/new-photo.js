import { MongoClient } from "mongodb";

// /api/new-photo
// POST /api/new-photo

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://amal:030196@cluster0.mhuyb.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();

    const photosCollection = db.collection("photos");

    const result = await photosCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Photo inserted!" });
  }
}

export default handler;
