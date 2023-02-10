import Comment from "../models/commentModel.js"

export const addComment = async (req, res) => {
    const {comment} = req.body;
    try {
        await Comment.create({
            comment:comment
        })
        res.json("The comment has been created")
    } catch (error) {
        console.log(error)
        
    }
}

export const getComments = async(req, res) => {
    try {
        const comments = await Comment.findAll()
        res.json(comments)
    } catch (error) {
        console.log(error)
        
    }
}