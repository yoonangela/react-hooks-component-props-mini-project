import React from "react";
import Article from "./Article.js"
import blogData from "../data/blog";


function ArticleList(){
    const articlelist= blogData.posts.map((post)=>{
       return  <Article key= {post.id} title={post.title} date={post.date} preview={post.preview}/>
    })
    return (
        <main>
            {articlelist}
        </main>
    )
}
export default ArticleList;
