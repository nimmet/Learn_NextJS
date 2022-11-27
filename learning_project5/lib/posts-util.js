import fs, { fstatSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { get } from 'http'


const postsDirectory = path.join(process.cwd(), 'posts')

function getPostData(fileName){
    const filePath = path.join(postsDirectory,fileName)

    const fileContent = fs.readFileSync(filePath,'utf-8')

    const {data,content} = matter(fileContent)

    const postSlug = fileName.replace(/\.md$/, '') // remove the .md extension

    const postData = {
        slug: postSlug,
        ...data,
        content,
    }

    return postData
    
}
export function getAllPosts() {
const postFiles = fs.readdirSync(postsDirectory)

    const allPosts = postFiles.map(postFile=> {
        return getPostData(postFile)
    })

    const sortedPost = allPosts.sort((postA,postB)=> postA.date > postB.date ? -1 : 1)

    return sortedPost
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts()

    const featuredPosts = allPosts.filter(post => post.isFeatured)

    return featuredPosts
}