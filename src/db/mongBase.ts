import { MongoClient } from "mongodb";

let myDb : MongoClient
let mongoClient : Promise<MongoClient>;


    if(!process.env.MONGODB_URI) {
        throw new Error("database not found")
    }

    const uri = process.env.MONGODB_URI


    if(process.env.NODE_ENV === "development") {

        if(!(global as any)._mongoClientPromise) {
            myDb = new MongoClient(uri);
            (global as any)._mongoClientPromise = myDb.connect();
        }

        mongoClient = (global as any)._mongoClientPromise

    } else {
        myDb = new MongoClient(uri);
        mongoClient = myDb.connect()
    }
     

export default mongoClient 