import { ObjectId } from "mongodb"

export interface IDataType {
    title : string,
    price : string
}

export interface IUserType {
    name : string,
    email : string,
    genres : "male" | "female",
    image : string,
    _id? : ObjectId,
    password : number | string
}