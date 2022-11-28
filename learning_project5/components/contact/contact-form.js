import { useEffect, useState } from "react"
import Notification from "../ui/notification"

async function sendContactData(contactDetails) {
    
    const response = await fetch('/api/contact',{
        method: 'POST',
        body: JSON.stringify(contactDetails),

        headers: {
            'Content-Type': 'application/json',
        }

    })

    const data = await response.json()

    if(!response.ok){
        throw new Error(data.message || 'Something went wrong!')
    } 

}

function ContactForm() {

    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredName, setEnteredName] = useState('')
    const [enteredMessage, setEnteredMessage] = useState('')
    const [requestStatus, setRequestStatus] = useState()
    const [requestError, setRequestError] = useState()

    useEffect(()=> {
        if(requestStatus === 'success' || requestStatus ==='error'){
            const timer = setTimeout(()=> {
                setRequestStatus(null)
                setRequestError(null)
            },3000)

            return ()=> clearTimeout(timer)
        }
    }, [requestStatus])

    async function sendMessageHandler(e){
        e.preventDefault()

        setRequestStatus('pending')

        try {

            await sendContactData(
                {
                    email: enteredEmail,
                    name: enteredName,
                    message: enteredMessage,
                }
            )

            setRequestStatus('success')
            setEnteredEmail('')
            setEnteredMessage('')
            setEnteredName('')
            
        } catch(error){
            setRequestError(error.message)
            setRequestStatus('error')
        }

    }

    let notification;

    if(requestStatus === 'pending'){
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on its way!'
        }
    }

    if(requestStatus === 'success') {
        notification= {
            status: 'success',
            title: 'Success!',
            message: 'Message sent successfully!'
        }
    }

    if(requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error!',
            message: requestError
        }
    }

    return (
        <section className=" bg-zinc-300 md:w-[600px] w-[500px] flex flex-col justify-center items-center gap-5 my-8 mx-auto rounded-md xss:w-[350px] ">
    <h1 className=" md:text-5xl text-4xl xss:text-3xl font-bold my-5 ">How can i help you?</h1>
    <form onSubmit={sendMessageHandler}>
        <div className=" flex justify-center items-center px-3 gap-2 py-2">
            <div>
                <label htmlFor="email" className=" text-xl font-[500] ">Your Email</label>
                <input type="email" name="email" id="email" required className=" w-full rounded-sm hover:outline-none focus:outline-none"
                    value={enteredEmail} 
                    onChange={(e)=> setEnteredEmail(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="name" className=" text-xl font-[500] ">Your Name</label>
                <input type="text" name="name" id="name" required className=" w-full rounded-sm hover:outline-none focus:outline-none" 
                    value={enteredName}
                    onChange={(e)=> setEnteredName(e.target.value)}
                />
            </div>
        </div>

        <div className=" flex flex-col my-5 px-3 gap-2">
            <label htmlFor="message" className=" text-xl font-[500] ">Your Message</label>
            <textarea rows="5" className="rounded-sm hover:outline-none focus:outline-none" 
            value={enteredMessage} onChange={(e)=> setEnteredMessage(e.target.value)}></textarea>
        </div>

        <div className=" flex justify-end items-center">
            <button className=" bg-blue-900 text-white px-3 py-1 my-3 mr-3 rounded-sm">Send Message</button>
        </div>
    </form>

    {
        notification && <Notification status={notification.status} title = {notification.title} message={notification.message} />
    }
        </section>
    )
}

export default ContactForm