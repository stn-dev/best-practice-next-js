import { deleteUser, getOneUser, getOneUserByEmail, updateUser } from '@/db/User/userSevice';
import { NextResponse } from 'next/server';

type IdType = {
    params : { id : string}
}

export const DELETE = async (req : Request , {params} : IdType ) => {

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

        await deleteUser(params.id)

        return NextResponse.json(
            {
                ok : true,
                message : "user deleted sucsessfully"
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

export const PUT = async (req : Request , {params} : IdType) => {

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

        const {name , email , genres , image , password} = await req.json()

        const aleadyExist = await getOneUserByEmail(email)

        if(aleadyExist) {

            alert("This eamil already exist\n please use another one or your last email")

            return NextResponse.json(
                {
                    ok : false , 
                    message : "This eamil aleady exist, please use another one"
                } ,
                {status : 400}
            )
        }

        await updateUser(name , email , genres , image , password , params.id )

        return NextResponse.json(
            {
                ok : true,
                message : "user updated sucsessfully"
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

export const GET = async (req : Request , {params} : IdType)  => {

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

        const data = await getOneUser(params.id)

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
                message : "user updated",
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