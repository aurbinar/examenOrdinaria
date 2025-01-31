import { MongoClient, ObjectId } from "mongodb";


const MONGO_URL = Deno.env.get("MONGO_URL");
if (!MONGO_URL) {
  console.error("MONGO_URL is not set");
  Deno.exit(1);
}

const client = new MongoClient(MONGO_URL);
await client.connect();
console.info("Connected to MongoDB"); 

// const db = client.db("");


// const Collection = db.collection<>("");

const handler = async (req: Request): Promise<Response> => {ç
  const method = req.method;
  const url = new URL(req.url);
  const path = url.pathname;

  if (method === "GET") {      
    
  } else if (method === "POST") {
    
  } else if (method === "PUT") {
    
  } else if (method === "DELETE") {
    
  }

  return new Response("endpoint not found", { status: 404 });
};

Deno.serve({ port: 5000 }, handler);
