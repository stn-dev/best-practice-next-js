import { createUser, getAllUsers,  getOneUserByEmail } from "@/db/User/userSevice"
import { NextResponse } from "next/server"


export const GET = async (req : Request)  => {


    if(!process.env.MONGODB_URI) {
        return NextResponse.json(
            { 
                message : "server not found",
                ok : false
            },
            {status : 500}
        )
    }

    try {

        const data = await getAllUsers()

        if(!data) {
            return NextResponse.json(
                {
                     message : "any user found!",
                     ok : false
                },
                {status : 404}
            )
        }

        return NextResponse.json(
            {
                ok : true,
                data
            },
            {status : 200}
        )
        
    } catch (error) {
        return NextResponse.json(
            { 
                message : "server error! " + error,
                ok : false
            },
            {status : 500}
        )
    }
}

export const POST = async (req : Request) => {

    if(!process.env.MONGODB_URI) {
        return NextResponse.json(
            { 
                message : "server not found",
                ok : false
            },
            {status : 500}
        )
    }

    try {

        const {name , email , genres , image , password}  = await  req.json();

        const aleadyExist = await getOneUserByEmail(email)

        if(aleadyExist) {

            return NextResponse.json(
                {
                    ok : false , 
                    message : "This email already exist, please use another one"
                } ,
                {status : 400}
            )
        }

        await createUser(name , email, genres , image , password)

        return NextResponse.json(
            {
                ok : true,
                data : {
                    name , email , genres, image , password
                }
            },
            {status : 200}
        )
        
    } catch (error) {
        return NextResponse.json(
            { 
                message : "server error! " + error,
                ok : false
            },
            {status : 500}
        )
    }
}