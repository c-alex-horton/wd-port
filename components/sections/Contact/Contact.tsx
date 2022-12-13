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

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setForm({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <div className={styles.contact}>
      <Title type={titleType.section}>Contact</Title>
      <form>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          value={form.name}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          value={form.email}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor='message'>Message</label>
        <textarea
          name='message'
          id='message'
          value={form.message}
          onChange={(e) => handleChange(e)}></textarea>
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}

export default Contact
