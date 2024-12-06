const Post = require('../models/postsSchema');
const Comment = require('../models/commentsSchema');

const createPosts = async(req,res)=>{
    try {
        const posts = new Post({
            content : req.body.content,
            user : req.user._id
        });

        const result = await posts.save();
        // console.log(result);
        res.redirect('back');

    } catch (error) {
        console.log(error.message);
    }
}

const destroy = async(req,res)=>{
    const post =await Post.findById(req.params.id) ;
    if(post.user == req.user.id){
         post.deleteOne();

       const comment =await Comment.deleteMany({post : req.params.id});
       return res.redirect('back');
    }else{
        res.redirect('back');
    }
}



const getPosts = async(req,res)=>{
    
}

module.exports = {
    createPosts , getPosts , destroy
}