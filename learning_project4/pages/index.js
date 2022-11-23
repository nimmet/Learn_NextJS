import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const emailInput = useRef()
  const feedbackInput = useRef()

  function submitFormHandler(e){
    e.preventDefault()
    const enteredEmail = emailInput.current.value
    const enteredFeedback = feedbackInput.current.value

    fetch()
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id='email' ref= {emailInput}/>
        </div>

        <div>
          <label htmlFor="feedback">Your Feedback </label>
          <textarea type="text" id='feedback' rows='5' ref={feedbackInput}></textarea>
        </div>
      <button>Send Feedback</button>
      </form>
    </div>
  )
}
