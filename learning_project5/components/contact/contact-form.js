
function ContactForm() {
    return (
        <section>
    <h1>How can i help you?</h1>
    <form>
        <div>
            <div>
                <label htmlFor="email">Your Email</label>
                <input type="email" name="email" id="email" required />
            </div>

            <div>
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" required />
            </div>
        </div>

        <div>
            <label htmlFor="message">Your Message</label>
            <textarea rows="5"></textarea>
        </div>

        <div>
            <button>Send Message</button>
        </div>
    </form>
        </section>
    )
}

export default ContactForm