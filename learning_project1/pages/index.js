
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  const clients= [
    {id:"max",name:"jack"},
    {id:"uyghur",name:"korla"}
  ]
  return (
    <div className={styles.container}>
     <ul>
      <li><Link href="/portfolio">Portfolio</Link></li>
      <li><Link href="/about">about</Link></li>
      <li><Link href="/clients">clients</Link></li>
      {
        clients.map((client)=>(

          <li key={client.id}>
          <Link href={`/clients/${client.id}`}>{client.name}</Link>
          <Link href={{
            pathname:'/clients/[id]',
            query: {id:client.id}
          }}/>
          </li>
        ))
      }
     </ul>
    </div>
  )
}
