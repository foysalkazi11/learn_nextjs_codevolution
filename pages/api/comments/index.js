import comments from "../../../data/comments";
import {getSession} from 'next-auth/client'

export default async function handler(req,res) {
    const session = await getSession({req})
    
    if (req.method === "GET") {
        try {
            if (!session) {
                throw {success:false,authentication:false,message:"Unauthenticated user"}
            }else{
                res.status(200).json({success:true,authentication:true,message:"Data fetch successfully",data:comments})
            }

        } catch (error) {
            console.log(error);
            res.status(401).json(error)
        }
    }
    if (req.method === "POST") {
        const body = JSON.parse(req.body)
        comments.push({
            ...body,
            id:Date.now()
        })
        res.status(200).json(comments)
    }
}