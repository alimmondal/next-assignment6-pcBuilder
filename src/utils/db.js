const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://nextPcBuilder:nextPcBuilder@cluster0.es092.mongodb.net/?retryWrites=true&w=majority";

const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
export default client;
