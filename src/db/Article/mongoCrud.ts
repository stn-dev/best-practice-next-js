import { ObjectId } from "mongodb"
import mongoClient from "../mongBase"

interface IDataType {
    title : string,
    price : string
}

export const getAllArticles = async () => {
    const client = await mongoClient
    const db = client.db("next-js-practice")
    const articles = await db
    .collection("article")
    .find()
    .toArray()

    return articles
}

export const getOneArticle = async (id : string) => {
    const client = await mongoClient
    const db = client.db("next-js-practice")
    const article = await db
    .collection("article")
    .findOne({
        _id : new ObjectId(id)
    })

    return article
}

export const postArticle = async (title : string , price : string) => {
    const client = await mongoClient
    const db = client.db("next-js-practice")

    const result = await db
    .collection("article")
    .insertOne({
        title,
        price
    })

    return result
}

export const deleteArticle = async (id : string) => {
    const client = await mongoClient
    const db = client.db("next-js-practice")
    const result = await db
    .collection("article")
    .deleteOne({
        _id : new ObjectId(id)
    })

    return result
}

export const updateArticle = async (id : string , title : string , price : string) => {
    const client = await mongoClient
    const db = client.db("next-js-practice")
    const result = await db
    .collection("article")
    .updateOne(
        {_id : new ObjectId(id)},
        {
           $set : {
            title,
            price
           }
        }
    )

    return result
}