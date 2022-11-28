
function ContactForm() {
    return (
        <section className=" bg-zinc-300 md:w-[600px] w-[500px] flex flex-col justify-center items-center gap-5 my-8 mx-auto rounded-md xss:w-[350px] ">
    <h1 className=" md:text-5xl text-4xl xss:text-3xl font-bold my-5 ">How can i help you?</h1>
    <form>
        <div className=" flex justify-center items-center px-3 gap-2 py-2">
            <div>
                <label htmlFor="email" className=" text-xl font-[500] ">Your Email</label>
                <input type="email" name="email" id="email" required className=" w-full rounded-sm hover:outline-none focus:outline-none"/>
            </div>

            <div>
                <label htmlFor="name" className=" text-xl font-[500] ">Your Name</label>
                <input type="text" name="name" id="name" required className=" w-full rounded-sm hover:outline-none focus:outline-none" />
            </div>
        </div>

        <div className=" flex flex-col my-5 px-3 gap-2">
            <label htmlFor="message" className=" text-xl font-[500] ">Your Message</label>
            <textarea rows="5" className="rounded-sm hover:outline-none focus:outline-none"></textarea>
        </div>

        <div className=" flex justify-end items-center">
            <button className=" bg-blue-900 text-white px-3 py-1 my-3 mr-3 rounded-sm">Send Message</button>
        </div>
    </form>
        </section>
    )
}

export default ContactForm