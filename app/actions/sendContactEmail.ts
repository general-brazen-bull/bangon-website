"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: {
  name: string
  email: string
  message: string
}) {
  try {
    const { error } = await resend.emails.send({
      from: "Bang On Website <no-reply@deepbluedistilleries.ca>",
      to: ["orders@deepbluedistilleries.ca"],
      replyTo: formData.email,
      subject: "New Bang On Contact Form Submission",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return { success: false }
    }

    return { success: true }
  } catch (err) {
    console.error("Send failed:", err)
    return { success: false }
  }
}
