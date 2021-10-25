import comments from "../../../data/comments";

export default function handler(req,res) {
    if (req.method === "GET") {
        
        res.status(200).json(comments)
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