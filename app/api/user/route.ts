import { PrismaClient } from "@prisma/client";    // *** remove /extension *****
import { NextRequest, NextResponse } from "next/server";
import { use } from "react";

const client = new PrismaClient();

export async function GET() {
    const user = await client.user.findFirst();
    return NextResponse.json({
        email: user?.email,
        name: "ravikiran"
    })
}

// postgresql://neondb_owner:xZaPlry9W5Yf@ep-lively-poetry-a5ym8y7a.us-east-2.aws.neon.tech/neondb?sslmode=require
// step 1npm i prisma
// step 2 npx prisma init
// step 3 npx prisma migrate --name init   -- to migrate 
// step 4 npx prisma generate  -- for to generate prisma client to connect to db

// export async function POST(req: NextRequest) {
//     const body = await req.json();
//     try {
//         await client.user.create({
//             data: {
//                 email: body.email,
//                 password: body.pass
//             }
//         });
//         return NextResponse.json({
//             body
//         })
//     } catch (error) {
//         return NextResponse.json({
//             message: "Error while sign up"
//         }, {
//             status: 411
//         })
//     }
//     // hit the db with email and pass
// }