import  validateComment  from '../validation/validateBlog';


let postComment= async (req, res) => {
    const blog = await Blog.findOne({ _id: req.params.id })
    const { error, value } = validateComment(req.body)

    if (error) {
        return res.send(error.details)
    } else {
        const comment = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        }
        blog.comments.push(comment)
        await blog.save();
        return res.send(blog)
    }
}

export default postComment