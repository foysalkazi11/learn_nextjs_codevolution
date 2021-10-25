import comments from "../../../data/comments";
export default function handlar(req,res) {

    const {commentId} = req.query
    if (req.method === "GET") {
        
    try {
        const comment = comments.find(item => item?.id === parseInt(commentId))
        if (!comment) {
            throw {
                name:"NotFound",
                message:"comment not found",
                success:false
            }
        }

        res.status(200).json(comment)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    if (req.method === "DELETE") {
        
        try {
            const index = comments.findIndex(item => item?.id === parseInt(commentId))
            
            if (index === -1) {
                throw {
                    name:"NotFound",
                    message:"comment not found",
                    success:false
                }
            }
            comments.splice(index,1)
            res.status(200).json(comments)
        } catch (error) {
            res.status(400).json(error)
        }
    }

}