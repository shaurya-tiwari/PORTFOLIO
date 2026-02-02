"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMsg("")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch("https://formsubmit.co/ajax/shauryatiwari120@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })

      if (res.ok) {
        setSuccessMsg("✅ Message sent successfully!")
        form.reset()
      } else {
        setSuccessMsg("❌ Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error(error)
      setSuccessMsg("❌ Something went wrong. Please try again.")
    }

    setIsSubmitting(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div className="h-full min-h-[600px] rounded-2xl border border-white/10 bg-white/10 p-4 sm:p-6 text-white shadow-sm transition-all duration-300 flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send Me a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <Input
              name="name"
              placeholder="Your Name"
              required
              className="bg-white/10 border border-white/10 text-black placeholder-white/60"
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-white/10 border border-white/10 text-black placeholder-white/60"
            />
            <Input
              name="subject"
              placeholder="Subject"
              required
              className="bg-white/10 border border-white/10 text-black placeholder-white/60"
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              rows={3}
              required
              className="bg-white/10 border border-white/10 text-black placeholder-white/60"
            />
            <Button
              type="submit"
              className="w-full bg-slate-700 hover:bg-white/20 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>

        {successMsg && (
          <p className="mt-4 text-center text-green-400">{successMsg}</p>
        )}
      </div>
    </motion.div>
  )
}
