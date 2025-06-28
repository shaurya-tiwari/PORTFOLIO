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

    const form = e.currentTarget // ✅ store reference here
    const formData = new FormData(form)

    try {
      const res = await fetch("https://formsubmit.co/ajax/shauryatiwari120@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })

      if (res.ok) {
        setSuccessMsg("✅ Message sent successfully!")
        form.reset() // ✅ use stored reference
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
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-gray-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-gray-900/10 to-gray-600/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

        <div className="relative">
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                name="name"
                placeholder="Your Name"
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-gray-500 focus:ring-gray-500/20"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-gray-500 focus:ring-gray-500/20"
              />
            </div>
            <div className="space-y-2">
              <Input
                name="subject"
                placeholder="Subject"
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-gray-500 focus:ring-gray-500/20"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="bg-zinc-900/50 border-zinc-700 focus:border-gray-500 focus:ring-gray-500/20"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-900 to-gray-600 hover:from-gray-600 hover:to-gray-900 border-0"
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

          {/* ✅ Success or error message */}
          {successMsg && (
            <p className="mt-4 text-center text-green-400">{successMsg}</p>
          )}
        </div>
      </div>
    </motion.div>
  )
}
