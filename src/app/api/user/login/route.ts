import { IUserType } from "@/db/Types/type"
import { getOneUserByEmail } from "@/db/User/userSevice"
import { NextResponse } from "next/server"

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

        const {email , password} = await req.json()

        const data = await getOneUserByEmail(email) as IUserType

        if(!data) {
            return NextResponse.json(
                {
                    ok : false,
                    message : "this eamil doesn't exist yet\nplease sing up or try onother eamil"
                }
            )
        }

        if(data.password !== password) {
            return NextResponse.json(
                {
                    ok : false,
                    message : "wrong password"
                }
            ) 
        }


        return NextResponse.json(
            {
                ok : true , 
                message : "you are successfully connected",
                data : data
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