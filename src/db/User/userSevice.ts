import { ObjectId } from "mongodb"
import mongoClient from "../mongBase"
import type {IUserType} from "../Types/type"

export const getAllUsers = async () => {
    const myDb = await mongoClient

    const users = myDb
    .db("next-js-practice")
    .collection<IUserType[]>("users")
    .find()
    .toArray()

    return users
}

export const getOneUser = async (id : string) => {
    const myDb = await mongoClient

    const user = myDb
    .db("next-js-practice")
    .collection<IUserType>("users")
    .findOne({_id : new ObjectId(id)})

    return user
}

export const createUser = async (name : string , age : number , genres : "male" | "female" , image : File) => {
    const myDb = await mongoClient

    const newUser = myDb
    .db("next-js-practice")
    .collection<IUserType>("users")
    .insertOne({
        name,
        age,
        genres,
        image : image || null
    })

    return newUser
}

export const updateUser = async (name : string , age : number , genres : "male" | "female" , image : File, id : string) => {
    const myDb = await mongoClient

    const userToUpdate = myDb
    .db("next-js-practice")
    .collection<IUserType>("users")
    .updateOne(
        {_id : new ObjectId(id)},
        {
            name, age, genres, image : image || null
        }
    )

    return userToUpdate
}

export const deleteUser = async (id : string) => {
    const myDb = await mongoClient

    const deletedUser = myDb
    .db("next-js-practice")
    .collection("users")
    .deleteOne({_id : new ObjectId(id)})

    return deletedUser
}
