import fs from 'fs/promises'
import path from 'path'
import React from 'react'

const ProductDetailPage = (props) => {

    const {loadedProduct} = props

    if(!loadedProduct){
        return <p>Loading...</p>
    }

  return (
    <div>
        <h1>{loadedProduct.title}</h1>
        <p>{loadedProduct.description}</p>
    </div>
  )
}

async function getData(){
    const filePath = path.join(process.cwd(),'data','dummy-backend.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  return data
}

export async function getStaticProps(context) {
const {params} = context

const productId = params.pid 

const data = await getData()

  const product = data.products.find(product=>product.id === productId)

  if(!product){
    return { notFound: true }
  }
  return {
    props: {
        loadedProduct: product
    }
  }

}

export async function getStaticPaths(){
    const data = await getData()
    const ids = data.products.map(product=> product.id)
    const pathWithParams = ids.map(id=> ({params:{pid:id}}))
    return {
        // paths:[
        //     { params: {pid:'p1'}},
        //     // { params: {pid:'p2'}},
        //     // { params: {pid:'p3'}},
        //     // { params: {pid:'p4'}},
        // ],
        paths:pathWithParams,
        fallback:true
    }
}
export default ProductDetailPage

