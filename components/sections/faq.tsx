import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import {
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Headphones,
  MessageCircleQuestion,
  ShieldCheck,
} from 'lucide-react'

const faqs = [
  {
    question: 'Can the software be customized according to our needs?',
    answer:
      'Yes. Customization is one of our main strengths. We develop the software according to your business processes, daily workflow, reporting requirements and user roles. Existing modules can also be modified based on your specific requirements.',
  },
  {
    question: 'Will the software work on mobile devices?',
    answer:
      'Yes. Our web applications are designed to work smoothly on desktops, laptops, tablets and smartphones. When required, we can also develop dedicated mobile applications for Android and other platforms.',
  },
  {
    question: 'Do you support cloud and local server deployment?',
    answer:
      'Yes. The software can be deployed on cloud infrastructure for remote accessibility or installed on a local server within your organization. We help you choose the suitable option based on accessibility, security and operational requirements.',
  },
  {
    question: 'Do you provide support after deployment?',
    answer:
      'Yes. We provide post-deployment assistance, issue resolution, staff guidance, performance improvements, bug fixes and maintenance support. Support arrangements can be planned according to your project and business requirements.',
  },
  {
    question: 'Can additional modules be added in the future?',
    answer:
      'Yes. Our solutions are developed with a modular and scalable structure. New users, branches, reports, integrations, features and complete modules can be added as your business requirements grow.',
  },
  {
    question: 'How long does software development take?',
    answer:
      'The timeline depends on the number of modules, workflow complexity, customization level and required integrations. After understanding your complete requirements, we provide a clear development plan with estimated milestones and delivery stages.',
  },
]

const supportPoints = [
  'Requirement-based customization',
  'Cloud and local deployment',
  'Post-deployment assistance',
]

export function FAQSection() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-16 h-100 w-100 rounded-full bg-[#2c83b7]/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-110 w-110 rounded-full bg-[#06345d]/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#06345d 1px, transparent 1px), linear-gradient(90deg, #06345d 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="absolute left-[8%] top-40 h-3 w-3 rounded-full bg-[#2c83b7]/25" />

        <div className="absolute right-[10%] top-52 h-2.5 w-2.5 rounded-full bg-[#0b568c]/25" />

        <div className="absolute bottom-36 left-[16%] h-2 w-2 rounded-full bg-[#49a5d6]/30" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2c83b7]/25 bg-[#f3f9fd] px-4 py-2 shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0b568c]">
              <HelpCircle className="h-3.5 w-3.5 text-white" />
            </span>

            <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#0b568c]">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#062f54] sm:text-4xl lg:text-5xl">
            Questions About Our
            <span className="block bg-linear-to-r from-[#0a4c82] via-[#176ca3] to-[#2c83b7] bg-clip-text text-transparent">
              Software Solutions
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#58758c] sm:text-lg">
            Find answers to common questions about customization, deployment,
            support and our software development process.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-linear-to-r from-[#06345d] to-[#49a5d6]" />
        </div>

        {/* Main FAQ Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.75fr_1.65fr]">
          {/* Left Information Card */}
          <div className="h-fit">
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#062f54] via-[#0b568c] to-[#176ca3] px-6 py-8 shadow-xl shadow-[#06345d]/20 sm:px-7">
              <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full border-30 border-white/5" />

              <div className="pointer-events-none absolute -bottom-24 left-10 h-44 w-44 rounded-full bg-[#49a5d6]/25 blur-3xl" />

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm">
                  <MessageCircleQuestion className="h-7 w-7 text-[#91dcff]" />
                </div>

                <h3 className="text-2xl font-extrabold leading-tight text-white">
                  Need More
                  <span className="block text-[#91dcff]">Information?</span>
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/75">
                  We discuss your workflow, challenges and requirements before
                  suggesting the most suitable software solution.
                </p>

                <div className="mt-7 space-y-3">
                  {supportPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-3.5 py-3 backdrop-blur-sm"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10">
                        <CheckCircle2 className="h-4 w-4 text-[#91dcff]" />
                      </span>

                      <span className="text-sm font-semibold text-white/90">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-xl bg-white px-5 text-sm font-bold text-[#06345d] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#eaf5fc] hover:shadow-xl"
                >
                  Ask Your Question
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Support Card */}
            <div className="mt-5 flex items-center gap-4 rounded-2xl border border-[#d5e7f2] bg-[#f5fafe] p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e1f2fb]">
                <Headphones className="h-6 w-6 text-[#0b568c]" />
              </div>

              <div>
                <p className="text-sm font-extrabold text-[#062f54]">
                  Reliable Local Support
                </p>

                <p className="mt-1 text-xs leading-5 text-[#6b8598]">
                  Quick assistance and practical guidance whenever required.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="group overflow-hidden rounded-2xl border border-[#d5e7f2] bg-white px-0 shadow-[0_8px_30px_rgba(6,47,84,0.06)] transition-all duration-300 data-[state=open]:border-[#2c83b7]/60 data-[state=open]:shadow-[0_16px_40px_rgba(6,47,84,0.12)]"
              >
                <AccordionTrigger className="gap-4 px-5 py-5 text-left hover:no-underline sm:px-6 [&[data-state=open]>div_.faq-number]:bg-[#0b568c] [&[data-state=open]>div_.faq-number]:text-white">
                  <div className="flex flex-1 items-center gap-4">
                    {/* FAQ Number */}
                    <span className="faq-number flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#d3e7f3] bg-[#eef8fd] text-xs font-extrabold text-[#0b568c] transition-all duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="pr-2 text-sm font-extrabold leading-6 text-[#062f54] transition-colors duration-300 group-hover:text-[#0b568c] sm:text-base">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <div className="ml-0 border-t border-[#e1edf5] pt-4 sm:ml-14">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#e5f4fc]">
                        <CheckCircle2 className="h-4 w-4 text-[#0b568c]" />
                      </span>

                      <p className="text-sm leading-7 text-[#647f93]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </AccordionContent>

                {/* Bottom Active Line */}
                <div className="h-1 w-0 bg-linear-to-r from-[#06345d] to-[#49a5d6] transition-all duration-500 group-data-[state=open]:w-full" />
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom Contact Banner */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-[#cfe3f0] bg-[#f3f9fd] px-6 py-8 shadow-[0_16px_45px_rgba(6,47,84,0.09)] sm:px-9">
          <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#2c83b7]/10 blur-2xl" />

          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#06345d] to-[#2c83b7] shadow-lg shadow-[#06345d]/20">
                <ShieldCheck className="h-7 w-7 text-white" />
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-[#062f54] sm:text-2xl">
                  Still have questions?
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-[#647f93]">
                  Share your requirements with our team and receive clear
                  guidance about development, customization and deployment.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-r from-[#06345d] to-[#0b568c] px-6 text-sm font-bold text-white shadow-lg shadow-[#06345d]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#06345d]/25"
            >
              Contact Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}