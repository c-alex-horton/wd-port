import React, { useState } from 'react'
import styles from './Contact.module.scss'
import Title, { titleType } from '../../Library/Title'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const sendMessage = async () => {
    try {
      const res = await fetch(`/api/contact`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()

    await sendMessage()

    setForm({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <section className={styles.contact} id={'contact'}>
      <Title type={titleType.section}>Contact</Title>
      <form>
        <label htmlFor='name'>Name</label>
        <input
          placeholder='John Doe'
          aria-label='Full Name'
          type='text'
          name='name'
          value={form.name}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor='email'>Email</label>
        <input
          placeholder='name@example.com'
          aria-label='Email'
          type='email'
          name='email'
          value={form.email}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor='message'>Message</label>
        <textarea
          placeholder='Type your message here'
          aria-label='Message'
          name='message'
          id='message'
          value={form.message}
          onChange={(e) => handleChange(e)}></textarea>
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </section>
  )
}

export default Contact
