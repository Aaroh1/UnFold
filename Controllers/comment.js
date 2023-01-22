const db = require('../Config/dbconfig')

exports.addcomment=async (req,res,next)=>{
    try{
        const {uid,bid,com}=req.body;
        const user=await db.user.findOne({where:{id:uid}});
        const blog=await db.blog.findByPk(bid);
        const comment= await db.comment.create({content:com});
        await blog.addComment(comment);
        await comment.setCommenter(user);
        res.status(200).json({comment:comment});
    }
    catch(e)
    {next(e);}
} 
exports.getcomments=async (req,res,next)=>{
    try{
        const {bid}=req.query;
        const blog=await db.blog.findByPk(bid);
        const comment= await blog.getComment();
        res.status(200).json({comment:comment.sort((a, b) => a.updatedAt - b.updatedAt)});
    }
    catch(e)
    {next(e);}
} 
exports.deletecomment=async (req,res,next)=>{
    try{
        const{id}=req.query;
        await db.comment.destroy({where:{id:id}})
        res.status(200).json({ message: 'comment deleted successfully' });
    }
    catch(e)
    {
        next(e);
    }
}