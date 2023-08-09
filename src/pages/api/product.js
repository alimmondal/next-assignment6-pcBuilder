import client from "@/utils/db";

// async function getNewsByCategory(id) {
//   try {
//     await client.connect();
//     const pcCollection = await client.db("pc-builder").collection("pc");
//     const result = await pcCollection.findOne({ id });
//     return result;
//   } catch (error) {
//     console.log("Error fetching news by category:", error);
//     throw error;
//   }
// }

async function run(req, res) {
  try {
    await client.connect();

    const pcCollection = await client.db("pc_builder").collection("pc");

    console.log("Database connected!");

    if (req.method === "GET") {
      const pc = await pcCollection.find({}).toArray();
      res.send({ message: "Success", status: 200, data: pc });
    }

    if (req.method === "POST") {
      const pc = req.body;
      const result = await pcCollection.insertOne(pc);
      res.json(result);
    }

    // if (req.method === "GET") {
    // const id = req.query.id;
    //   const result = await newsCollection.findOne(req.query.id);
    //   res.send(result);
    // }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
// run().catch(console.dir);
export default run;
