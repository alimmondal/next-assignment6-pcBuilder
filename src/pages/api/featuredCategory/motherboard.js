import client from "@/utils/db";

async function run(req, res) {
  try {
    await client.connect();

    const motherboard = await client
      .db("pc_category")
      .collection("motherboard");

    console.log("Database connected!");

    if (req.method === "GET") {
      const pc = await motherboard.find({}).toArray();
      res.send({ message: "Success", status: 200, data: pc });
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
// run().catch(console.dir);
export default run;
