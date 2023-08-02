const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://nextPcBuilder:nextPcBuilder@cluster0.es092.mongodb.net/next-news?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();

    const pcCollection = await client.db("pc_builder").collection("pc");
    console.log("Database connected!");
    if (req.method === "GET") {
      const products = await pcCollection.find({}).toArray();
      res.send({ message: "Success", status: 200, data: products });
    }

    if (req.method === "POST") {
      const products = req.body;
      const result = await pcCollection.insertOne(products);
      res.json(result);
    }
    if (req.method === " GET") {
      const result = await pcCollection.findOne(req.query.id);
      res.send(result);
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
// run().catch(console.dir);
export default run;
