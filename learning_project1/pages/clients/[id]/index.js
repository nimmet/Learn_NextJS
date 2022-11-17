import { useRouter } from "next/router"

function ClientProjectsPage (){
    const router = useRouter()

    const handleClick= ()=>{
        router.push('/clients/uyghur/projecta')
    }
    return(
        <div>
            <h1>The Projects of a given Client</h1>
            <button onClick={handleClick}>Load Project A</button>
        </div>
    )
}

export default ClientProjectsPage