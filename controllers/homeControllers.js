const User = require("../models/userSchema");
const Post = require('../models/postsSchema');

const getHome = async(req,res)=>{

    try {
        // {user : req.user._id}
        const post = await Post.find().populate('user').populate({
            path : 'comments',
            populate:{
                path : 'user'
            }
        }).exec();
        // console.log(post);
        res.render("home" , {title : "Social App" , posts :post});

        
    } catch (error) {
        console.log(error);
    }
}

const getmain = async(req , res)=>{
    res.render('main' , {title : "Social App"})
}

module.exports = {
    getHome , getmain
}