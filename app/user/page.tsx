import { PrismaClient } from "@prisma/client"

const client = new PrismaClient();

async function fetchData() {
    const user = await client.user.findFirst();
    
    return {
        email: user?.email,
        name: "ravikiran"
    }
    // const res = await axios.get("http://localhost:5000/getUsers")  
    // using next js server route
    // const res = await axios.get("http://localhost:3000/api/user")
    // await new Promise(r => setTimeout(r, 2000)); 
    // return res.data;
}

export default async function () {
    const data = await fetchData()
    return (
        <div>
            <p>{data.name}</p>
            <p>{data.email}</p>
        </div>
    )
}