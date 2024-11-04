import { ObjectId } from "mongodb"

export interface IDataType {
    title : string,
    price : string
}

export interface IUserType {
    name : string,
    email : string,
    genres : "male" | "female",
    image ? : File | null,
    _id? : ObjectId,
    password : number | string
}