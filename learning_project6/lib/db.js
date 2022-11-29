import { MongoClient } from "mongodb";

export async function connectToDatabase(){
    const client = await MongoClient.connect('mongodb+srv://uyghur:IuQ8fe3QJbahv5bM@cluster0.zcltlgb.mongodb.net/?retryWrites=true&w=majority')

    return client

}