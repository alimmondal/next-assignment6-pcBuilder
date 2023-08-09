import client from "@/utils/db";
// const handler = nc();

async function run(req, res) {
  await client.connect();

  const pcDetail = await client.db("pc_builder").collection("pc");
  console.log("Database connected!");

  const id = req.query.id;
  const result = await pcDetail.findOne(req.query.id);
  res.send(result);
}
export default run;

// export default async function handler(req, res) {
//   const { params, method, body } = req;

//   try {
//     const apiBaseUrl =
//       process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
//     const client = new MongoClient(apiBaseUrl, {
//       serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//       },
//     });

//     switch (method) {
//       case "GET":
//         const id = req.query.id;
//         try {
//           await client.connect();

//           const newsCollection = await client
//             .db("news_portal")
//             .collection("news");

//           console.log("Database connected!");

//           const result = await newsCollection.findById({_id:new ObjectId(id});

//           if (result) {
//             res.status(200).send({ status: true, data: result });
//           } else {
//             res.status(404).send({ status: false, message: "News not found" });
//           }
//         } catch (error) {
//           console.error("Error fetching news by ID:", error);
//           res.status(500).json({ status: false, message: "Server Error" });
//         } finally {
//           await client.close();
//         }
//         break;

//       case "POST":
//         try {
//         } catch (error) {
//           console.error("Error handling POST request:", error);
//           res.status(500).json({ status: false, message: "Server Error" });
//         }
//         break;

//       default:
//         res.setHeader("Allow", ["GET", "POST"]);
//         res
//           .status(405)
//           .json({ status: false, message: `Method ${method} Not Allowed` });
//     }
//   } catch (error) {
//     console.log("Error processing request:", error);
//     res.status(500).json({ status: false, message: "Server Error" });
//   }
// }
