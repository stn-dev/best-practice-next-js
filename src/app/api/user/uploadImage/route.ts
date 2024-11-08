import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import fs from "node:fs/promises";
import {v4 as uuidv4} from 'uuid'

export const POST = async (req : Request) => {

    const url = new URL(req.url)
    const serachParams = new URLSearchParams(url.search)

    const fileName = serachParams.get("fileName")

    console.log(fileName)


    try {

        const formData = req.formData()
        const file = (await formData).get('file') as File
    
        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);
        await fs.writeFile(`./public/uploads/${fileName}`, buffer);
    
        revalidatePath("/");
    
        return NextResponse.json(
            {
                ok : true,
                message : "image posted"
            } ,
            {status : 200}
        );

    } catch (e) {
        console.error(e);

        return NextResponse.json(
            {
                ok : false,
                message : "image not posted"
            } ,
            {status : 500}
        );

    }

}