import {model , Schema} from "mongoose";

const blogSchema = new Schema(
    {
        title:{type:String,required:true},
        conetent: {type: String,required:true},
        status:{
            type:String,
            default:"draft",
            enum:["draft","published","archived"],
        },
        category:{type:String,required:true},
        publishedAt:{type:Date},
    },
    {
        timestamps:true
    }
);

const Blog = model("Blog",blogSchema);

export default Blog;