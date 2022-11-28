/** @type {import('next').NextConfig} */
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')
const nextConfig = (phase)=> {
  if(phase === PHASE_DEVELOPMENT_SERVER){
    return {
      reactStrictMode: true,
      env:{
        mongodb_username:'uyghur',
        mongodb_password: 'CCzvE5jnKhTOsT4o',
        mongodb_clustername: 'cluster0',
        mongodb_dbname:'dev'
      }
    }
  }

  return {
  reactStrictMode: true,
  env:{
    mongodb_username:'uyghur',
    mongodb_password: 'CCzvE5jnKhTOsT4o',
    mongodb_clustername: 'cluster0',
    mongodb_dbname:''
  }
}
}

module.exports = nextConfig

