import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import sanitizeHtml from 'sanitize-html'

let transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY,
  },
})

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, message } = req.body

  const sanitizedName = sanitizeHtml(name)
  const sanitizedEmail = sanitizeHtml(email)
  const sanitizedMessage = sanitizeHtml(message)

  console.log(req.body)
  console.log('name', name)

  transporter.sendMail(
    {
      from: 'caleb@calebhorton.dev', // verified sender email
      to: 'caleb@calebhorton.dev', // recipient email
      subject: `New Contact message from ${name}`, // Subject line
      text: message, // plain text body
      html: `<div>
        <p>From: ${sanitizedName}</p>
        <p>Email: ${sanitizedEmail}</p>
        <p>${sanitizedMessage}</p>
        </div>`, // html body
    },
    function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    }
  )

  transporter.sendMail(
    {
      from: 'caleb@calebhorton.dev', // verified sender email
      to: email, // recipient email
      subject: 'Thank you for contacting me!', // Subject line
      text: 'Thank you for contacting me! I will get back to you as soon as I can. --Caleb Horton', // plain text body
      html: '<p>Thank you for contacting me!</p> <p>I will get back to you as soon as I can.</p> <p>--Caleb Horton</p>', // html body
    },
    function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    }
  )

  res.status(200).json({ message: 'Contact form successfully sent!' })
}
