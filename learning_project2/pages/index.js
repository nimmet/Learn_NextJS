
import styles from '../styles/Home.module.css'
import AllEvents from './AllEvents'
import EventDetail from './EventDetail'
import Layout from './Layout'
import Navbar from './Navbar'
import { getFeaturedEvents } from '../helpers/api-utils'

export default function Home(props) {
  return (
   <div>
   <Navbar />
    <Layout />
    {/* <AllEvents /> */}
    {/* <EventDetail/> */}
   
   </div>
  )
}

export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents()

  return {
    props: {
      events: featuredEvents
    }
  }
}
