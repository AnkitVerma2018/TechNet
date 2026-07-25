'use client'

import { type FormEvent, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'

import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
} from 'lucide-react'

const contactDetails = [
  {
    icon: Phone,
    title: 'Phone',
    description: 'Call us to discuss your requirements',
    value: '+91 90846 11723',
    href: 'tel:+919084611723',
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Send your project requirements',
    value: 'technetsolutiontke19@gmail.com',
    href: 'mailto:technetsolutiontke19@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Serving businesses locally and remotely',
    value: 'Roorkee, Uttarakhand, India',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'We are available during these hours',
    value: 'Monday - Saturday, 9:00 AM - 6:00 PM',
  },
]

const trustPoints = [
  'Requirement-based consultation',
  'Transparent project discussion',
  'Reliable local support',
]

type ContactFormData = {
  name: string
  email: string
  phone: string
  company: string
  projectType: string
  message: string

  // Hidden honeypot field for basic spam protection
  website: string
}

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  message: '',
  website: '',
}

export function ContactSection() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData)

  const [submitStatus, setSubmitStatus] =
    useState<SubmitStatus>('idle')

  const [responseMessage, setResponseMessage] = useState('')

  const updateField = (
    field: keyof ContactFormData,
    value: string,
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }))

    if (
      submitStatus === 'success' ||
      submitStatus === 'error'
    ) {
      setSubmitStatus('idle')
      setResponseMessage('')
    }
  }

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    if (submitStatus === 'sending') {
      return
    }

    setSubmitStatus('sending')
    setResponseMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = (await response.json().catch(() => ({
        success: false,
        message:
          'An unexpected response was received from the server.',
      }))) as {
        success?: boolean
        message?: string
      }

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            'Your enquiry could not be submitted.',
        )
      }

      setSubmitStatus('success')
      setResponseMessage(
        result.message ||
          'Your enquiry has been submitted successfully. A confirmation email has also been sent to you.',
      )

      setFormData(initialFormData)
    } catch (error) {
      console.error('Contact form submission error:', error)

      setSubmitStatus('error')
      setResponseMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again or contact us on WhatsApp.',
      )
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f3f9fd] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-100 w-100 rounded-full bg-[#2c83b7]/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-115 w-115 rounded-full bg-[#06345d]/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-2.5"
          style={{
            backgroundImage:
              'linear-gradient(#06345d 1px, transparent 1px), linear-gradient(90deg, #06345d 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="absolute left-[8%] top-36 h-3 w-3 rounded-full bg-[#2c83b7]/25" />

        <div className="absolute right-[10%] top-52 h-2.5 w-2.5 rounded-full bg-[#0b568c]/25" />

        <div className="absolute bottom-32 left-[15%] h-2 w-2 rounded-full bg-[#49a5d6]/30" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2c83b7]/25 bg-white px-4 py-2 shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0b568c]">
              <MessageCircle className="h-3.5 w-3.5 text-white" />
            </span>

            <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#0b568c]">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#062f54] sm:text-4xl lg:text-5xl">
            Let&apos;s Build the Right

            <span className="block bg-linear-to-r from-[#0a4c82] via-[#176ca3] to-[#2c83b7] bg-clip-text text-transparent">
              Solution for Your Business
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#58758c] sm:text-lg">
            Share your requirements with us. We will understand
            your workflow and help you choose the right software
            solution.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-linear-to-r from-[#06345d] to-[#49a5d6]" />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Main Contact Introduction */}
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#062f54] via-[#0b568c] to-[#176ca3] px-6 py-8 shadow-xl shadow-[#06345d]/20 sm:px-8">
              <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border-32 border-white/5" />

              <div className="pointer-events-none absolute -bottom-24 left-20 h-48 w-48 rounded-full bg-[#49a5d6]/25 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm">
                  <Headphones className="h-7 w-7 text-[#91dcff]" />
                </div>

                <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                  Contact Information
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-white/75 sm:text-base">
                  Connect with us for custom software, hospital
                  management systems, CRM solutions, websites and
                  business applications.
                </p>

                <div className="mt-7 space-y-3">
                  {trustPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 text-sm font-semibold text-white/90"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10">
                        <CheckCircle2 className="h-4 w-4 text-[#91dcff]" />
                      </span>

                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {contactDetails.map((detail) => {
                const Icon = detail.icon

                const content = (
                  <Card className="group h-full rounded-2xl border border-[#d5e7f2] bg-white py-0 shadow-[0_8px_28px_rgba(6,47,84,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2c83b7]/50 hover:shadow-[0_16px_38px_rgba(6,47,84,0.12)]">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#06345d] to-[#2c83b7] shadow-md shadow-[#06345d]/15 transition-transform duration-300 group-hover:scale-105">
                          <Icon className="h-6 w-6 text-white" />
                        </div>

                        <div className="min-w-0">
                          <h4 className="font-extrabold text-[#062f54] transition-colors duration-300 group-hover:text-[#0b568c]">
                            {detail.title}
                          </h4>

                          <p className="mt-1 text-xs leading-5 text-[#7890a3]">
                            {detail.description}
                          </p>

                          <p className="mt-2 wrap-break-word text-sm font-semibold leading-6 text-[#365d79]">
                            {detail.value}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )

                if (detail.href) {
                  return (
                    <a
                      key={detail.title}
                      href={detail.href}
                      className="block h-full"
                    >
                      {content}
                    </a>
                  )
                }

                return (
                  <div key={detail.title}>
                    {content}
                  </div>
                )
              })}
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919084611723?text=Hello%20TechNet%20Solution%2C%20I%20want%20to%20discuss%20a%20software%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-[#bfe0d0] bg-white p-5 shadow-[0_8px_28px_rgba(6,47,84,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/50 hover:shadow-[0_16px_38px_rgba(6,47,84,0.12)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366] shadow-md shadow-[#25D366]/20">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>

                <div>
                  <p className="font-extrabold text-[#062f54]">
                    Connect on WhatsApp
                  </p>

                  <p className="mt-1 text-sm text-[#6b8598]">
                    Get a quick response for your project enquiry
                  </p>
                </div>
              </div>

              <ArrowRight className="h-5 w-5 shrink-0 text-[#25D366] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Functional Contact Form */}
          <div className="relative overflow-hidden rounded-3xl border border-[#d5e7f2] bg-white shadow-[0_20px_60px_rgba(6,47,84,0.12)]">
            {/* Form Top Gradient */}
            <div className="h-1.5 w-full bg-linear-to-r from-[#06345d] via-[#0b568c] to-[#49a5d6]" />

            <div className="p-6 sm:p-8">
              {/* Form Heading */}
              <div className="mb-7 flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e5f4fc]">
                  <Send className="h-7 w-7 text-[#0b568c]" />
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-[#062f54]">
                    Send Us a Message
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#647f93]">
                    Tell us about your project and our team will
                    contact you.
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Hidden Spam Protection */}
                <div
                  aria-hidden="true"
                  className="absolute -left-2499.75 top-auto h-px w-px overflow-hidden"
                >
                  <label htmlFor="contact-website">
                    Website
                  </label>

                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(event) =>
                      updateField(
                        'website',
                        event.target.value,
                      )
                    }
                  />
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-bold text-[#284f6d]"
                    >
                      Your Name

                      <span className="ml-1 text-[#2c83b7]">
                        *
                      </span>
                    </label>

                    <Input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      autoComplete="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(event) =>
                        updateField(
                          'name',
                          event.target.value,
                        )
                      }
                      className="h-12 rounded-xl border-[#cfe0eb] bg-[#f9fcfe] px-4 text-[#163d5d] placeholder:text-[#8da2b2] focus-visible:border-[#2c83b7] focus-visible:ring-[#2c83b7]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-bold text-[#284f6d]"
                    >
                      Email Address

                      <span className="ml-1 text-[#2c83b7]">
                        *
                      </span>
                    </label>

                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      maxLength={150}
                      autoComplete="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(event) =>
                        updateField(
                          'email',
                          event.target.value,
                        )
                      }
                      className="h-12 rounded-xl border-[#cfe0eb] bg-[#f9fcfe] px-4 text-[#163d5d] placeholder:text-[#8da2b2] focus-visible:border-[#2c83b7] focus-visible:ring-[#2c83b7]/20"
                    />
                  </div>
                </div>

                {/* Phone and Company */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block text-sm font-bold text-[#284f6d]"
                    >
                      Phone Number
                    </label>

                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      maxLength={30}
                      autoComplete="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(event) =>
                        updateField(
                          'phone',
                          event.target.value,
                        )
                      }
                      className="h-12 rounded-xl border-[#cfe0eb] bg-[#f9fcfe] px-4 text-[#163d5d] placeholder:text-[#8da2b2] focus-visible:border-[#2c83b7] focus-visible:ring-[#2c83b7]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="mb-2 block text-sm font-bold text-[#284f6d]"
                    >
                      Company or Organization
                    </label>

                    <Input
                      id="contact-company"
                      name="company"
                      type="text"
                      maxLength={150}
                      autoComplete="organization"
                      placeholder="Enter company name"
                      value={formData.company}
                      onChange={(event) =>
                        updateField(
                          'company',
                          event.target.value,
                        )
                      }
                      className="h-12 rounded-xl border-[#cfe0eb] bg-[#f9fcfe] px-4 text-[#163d5d] placeholder:text-[#8da2b2] focus-visible:border-[#2c83b7] focus-visible:ring-[#2c83b7]/20"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="project-type"
                    className="mb-2 block text-sm font-bold text-[#284f6d]"
                  >
                    Project Type

                    <span className="ml-1 text-[#2c83b7]">
                      *
                    </span>
                  </label>

                  <select
                    id="project-type"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={(event) =>
                      updateField(
                        'projectType',
                        event.target.value,
                      )
                    }
                    className="h-12 w-full rounded-xl border border-[#cfe0eb] bg-[#f9fcfe] px-4 text-sm text-[#163d5d] outline-none transition-all duration-200 focus:border-[#2c83b7] focus:ring-3 focus:ring-[#2c83b7]/15"
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>

                    <option value="Custom Software Development">
                      Custom Software Development
                    </option>

                    <option value="HMS or Clinic Management Solution">
                      HMS or Clinic Management Solution
                    </option>

                    <option value="CRM Development">
                      CRM Development
                    </option>

                    <option value="Web Application">
                      Web Application
                    </option>

                    <option value="Website Development">
                      Website Development
                    </option>

                    <option value="Existing Software Customization">
                      Existing Software Customization
                    </option>

                    <option value="Other Requirement">
                      Other Requirement
                    </option>
                  </select>
                </div>

                {/* Project Requirements */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-bold text-[#284f6d]"
                  >
                    Project Requirements

                    <span className="ml-1 text-[#2c83b7]">
                      *
                    </span>
                  </label>

                  <Textarea
                    id="contact-message"
                    name="message"
                    required
                    maxLength={4000}
                    placeholder="Tell us about your business, current challenges and software requirements..."
                    rows={6}
                    value={formData.message}
                    onChange={(event) =>
                      updateField(
                        'message',
                        event.target.value,
                      )
                    }
                    className="resize-none rounded-xl border-[#cfe0eb] bg-[#f9fcfe] px-4 py-3 text-[#163d5d] placeholder:text-[#8da2b2] focus-visible:border-[#2c83b7] focus-visible:ring-[#2c83b7]/20"
                  />

                  <p className="mt-2 text-right text-xs text-[#7890a3]">
                    {formData.message.length}/4000
                  </p>
                </div>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div
                    role="status"
                    className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

                    <p className="text-sm font-semibold leading-6 text-emerald-800">
                      {responseMessage}
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4"
                  >
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />

                    <p className="text-sm font-semibold leading-6 text-red-800">
                      {responseMessage}
                    </p>
                  </div>
                )}

                {/* Privacy Information */}
                <div className="flex items-start gap-3 rounded-xl border border-[#d8e9f3] bg-[#f3f9fd] p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#0b568c]" />

                  <p className="text-xs leading-5 text-[#647f93]">
                    Your information will only be used to
                    understand and respond to your project enquiry.
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={submitStatus === 'sending'}
                  className="h-12 w-full rounded-xl border-0 bg-linear-to-r from-[#06345d] to-[#0b568c] text-sm font-bold text-white shadow-lg shadow-[#06345d]/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-[#052b4d] hover:to-[#084a79] hover:shadow-xl hover:shadow-[#06345d]/25 disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:translate-y-0"
                >
                  {submitStatus === 'sending' ? (
                    <>
                      <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Brand Message */}
        <div className="relative mt-12 overflow-hidden rounded-3xl bg-linear-to-r from-[#062f54] via-[#0b568c] to-[#176ca3] px-6 py-8 text-center shadow-xl shadow-[#06345d]/20 sm:px-9">
          <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full border-30 border-white/5" />

          <div className="pointer-events-none absolute -bottom-24 left-24 h-44 w-44 rounded-full bg-[#49a5d6]/25 blur-3xl" />

          <div className="relative">
            <p className="text-2xl font-extrabold text-white sm:text-3xl">
              Your Vision,{' '}

              <span className="text-[#91dcff]">
                Our Code
              </span>
            </p>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
              We build practical and customized digital solutions
              that work according to your business requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}