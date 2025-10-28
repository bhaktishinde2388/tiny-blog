import {model , Schema} from "mongoose";

const commentSchem = new Schema(
    {
      content : {type:String,required:true},
      //refrencing
      user : {type:Schema.Types.ObjectId,ref:"User",required:true},
      blog: {type:Schema.Types.ObjectId,ref:"Blog",required:true},
    },
    {
        tmpestamps:true,
    }
);

const Comments = model ("Comments",commentSchem);

export default Comments;