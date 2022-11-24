import path from 'path'
import { useState } from 'react'

function CommentsPage (props) {

   const [commentData, setCommentData] = useState()

     function buildFeedbackPath(){
        return path.join(process.cwd(),'Data','comments.json')
    }
    
    function extractFeedback(filePath){
        const fileData = fs.readFileSync(filePath)
            const data = JSON.parse(fileData)
            setCommentData(data)
            return data
    }

    function fetchData(){
        fetch('/Data/comments.json').
        then((res)=> res.json()).
        then((data)=> {
            setCommentData(data)
        })
    }

    return(
        <div>
            {
               
            commentData ? "data" : "empty"
            }
        </div>
    )
}

export async function getStaticProps(props) {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
  
    return {
      props: {
        comments: data,
      },
    };
  }

export default CommentsPage


