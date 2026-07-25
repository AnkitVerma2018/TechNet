import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  ArrowRight,
  CheckCircle2,
  Code2,
  HeartHandshake,
  Lightbulb,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    title: 'Requirement Discussion',
    description:
      'We understand your business, existing workflow, challenges and exact software requirements in detail.',
    highlight: 'Understand',
  },
  {
    icon: Lightbulb,
    title: 'Planning & Design',
    description:
      'We prepare the project structure, user interface, modules and workflow according to your requirements.',
    highlight: 'Plan',
  },
  {
    icon: Code2,
    title: 'Development',
    description:
      'Our team develops your solution using secure, scalable and maintainable coding practices.',
    highlight: 'Build',
  },
  {
    icon: CheckCircle2,
    title: 'Testing & Review',
    description:
      'Every module is carefully tested for functionality, performance, usability and data accuracy.',
    highlight: 'Validate',
  },
  {
    icon: Rocket,
    title: 'Deployment',
    description:
      'The completed solution is installed and configured with proper assistance and minimal disruption.',
    highlight: 'Launch',
  },
  {
    icon: HeartHandshake,
    title: 'Support & Maintenance',
    description:
      'We provide reliable support, staff guidance, issue resolution and future feature enhancements.',
    highlight: 'Support',
  },
]

const collaborationPoints = [
  'Regular project updates',
  'Client feedback at every stage',
  'Requirement-based modifications',
  'Post-deployment support',
]

export function ProcessSection() {
  return (
    <section
      id="process"
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

        <div className="absolute left-[7%] top-36 h-3 w-3 rounded-full bg-[#2c83b7]/25" />
        <div className="absolute right-[9%] top-52 h-2.5 w-2.5 rounded-full bg-[#0b568c]/25" />
        <div className="absolute bottom-40 left-[14%] h-2 w-2 rounded-full bg-[#49a5d6]/30" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2c83b7]/25 bg-[#f3f9fd] px-4 py-2 shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0b568c]">
              <Sparkles className="h-3.5 w-3.5 text-white" />
            </span>

            <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#0b568c]">
              Our Development Process
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#062f54] sm:text-4xl lg:text-5xl">
            From Your Requirement to
            <span className="block bg-linear-to-r from-[#0a4c82] via-[#176ca3] to-[#2c83b7] bg-clip-text text-transparent">
              A Complete Digital Solution
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#58758c] sm:text-lg">
            We follow a clear and collaborative development process to ensure
            your software matches your vision, workflow and business goals.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-linear-to-r from-[#06345d] to-[#49a5d6]" />
        </div>

        {/* Process Cards */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-19.5 hidden h-0.5 bg-linear-to-r from-[#d8eaf5] via-[#2c83b7]/50 to-[#d8eaf5] lg:block" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <div key={step.title} className="group relative">
                  <Card className="relative h-full overflow-hidden rounded-3xl border border-[#d5e7f2] bg-white py-0 shadow-[0_10px_35px_rgba(6,47,84,0.07)] transition-all duration-300 hover:-translate-y-2 hover:border-[#2c83b7]/50 hover:shadow-[0_24px_55px_rgba(6,47,84,0.15)]">
                    {/* Top Gradient */}
                    <div className="h-1.5 w-full bg-linear-to-r from-[#06345d] via-[#0b568c] to-[#49a5d6] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Background Step Number */}
                    <span className="pointer-events-none absolute right-5 top-6 text-7xl font-extrabold text-[#06345d]/4 transition-colors duration-300 group-hover:text-[#2c83b7]/10">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Decorative Glow */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#2c83b7]/5 blur-2xl transition-all duration-500 group-hover:bg-[#2c83b7]/15" />

                    <CardHeader className="relative px-6 pb-3 pt-7">
                      <div className="mb-6 flex items-center justify-between gap-4">
                        {/* Icon */}
                        <div className="relative">
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#06345d] to-[#2c83b7] shadow-lg shadow-[#06345d]/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                            <Icon className="h-8 w-8 text-white" />
                          </div>

                          {/* Step Number Badge */}
                          <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-[#49a5d6] text-xs font-extrabold text-white shadow-md">
                            {index + 1}
                          </div>
                        </div>

                        <span className="inline-flex rounded-full border border-[#cfe4f2] bg-[#eef8fd] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0b568c]">
                          {step.highlight}
                        </span>
                      </div>

                      <CardTitle className="text-xl font-extrabold leading-snug text-[#062f54] transition-colors duration-300 group-hover:text-[#0b568c]">
                        {step.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="relative px-6 pb-7">
                      <p className="text-sm leading-6 text-[#647f93]">
                        {step.description}
                      </p>

                      <div className="mt-5 flex items-center gap-2 border-t border-[#e0edf5] pt-4 text-xs font-bold uppercase tracking-widest text-[#2c83b7]">
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                        Process Step {index + 1}
                      </div>
                    </CardContent>

                    {/* Bottom Hover Line */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-[#06345d] to-[#49a5d6] transition-all duration-500 group-hover:w-full" />
                  </Card>

                  {/* Connector Arrow */}
                  {index < steps.length - 1 && index !== 2 && (
                    <div className="pointer-events-none absolute -right-4.75 top-16.5 z-20 hidden h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-[#0b568c] text-white shadow-md lg:flex">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Collaborative Approach */}
        <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-3xl border border-[#d5e7f2] bg-[#f7fbfe] shadow-[0_18px_55px_rgba(6,47,84,0.10)] lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Side */}
          <div className="relative overflow-hidden bg-linear-to-br from-[#062f54] via-[#0b568c] to-[#176ca3] px-6 py-9 sm:px-9 lg:py-10">
            <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border-32 border-white/5" />

            <div className="pointer-events-none absolute -bottom-24 left-20 h-48 w-48 rounded-full bg-[#49a5d6]/20 blur-3xl" />

            <div className="relative">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm">
                <HeartHandshake className="h-7 w-7 text-[#91dcff]" />
              </div>

              <p className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Collaborative
                <span className="block text-[#91dcff]">
                  Development Approach
                </span>
              </p>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/75 sm:text-base">
                Your feedback remains an important part of development from the
                first discussion to final deployment.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="px-6 py-9 sm:px-9 lg:py-10">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0b568c]">
              Clear Communication
            </p>

            <h3 className="mt-3 text-2xl font-extrabold text-[#062f54] sm:text-3xl">
              You remain involved throughout the project
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#647f93] sm:text-base">
              We provide regular updates, review completed modules and include
              practical feedback so the final solution works exactly according
              to your business requirements.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {collaborationPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-xl border border-[#dbeaf3] bg-white px-4 py-3 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e1f2fb]">
                    <CheckCircle2 className="h-4 w-4 text-[#0b568c]" />
                  </span>

                  <span className="text-sm font-semibold text-[#365d79]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-7 inline-flex h-12 items-center justify-center rounded-xl bg-linear-to-r from-[#06345d] to-[#0b568c] px-6 text-sm font-bold text-white shadow-lg shadow-[#06345d]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#06345d]/25"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Trust Message */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <ShieldCheck className="h-5 w-5 text-[#0b568c]" />

          <p className="text-sm font-semibold text-[#58758c]">
            Transparent process, practical development and dependable support
            from start to finish.
          </p>
        </div>
      </div>
    </section>
  )
}