import { deleteUser, updateUser } from '@/db/User/userSevice';
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

        const {name , age , genres , image} = await req.json()

        await updateUser(name , age , genres , image , params.id)

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