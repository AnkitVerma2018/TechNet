import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  Lightbulb,
  Palette,
  Rocket,
  ShieldCheck,
  Target,
  Workflow,
} from 'lucide-react'

const reasons = [
  {
    icon: Lightbulb,
    title: 'Customized Solutions',
    description:
      'Every business works differently. We develop solutions around your exact requirements, processes and goals.',
    highlight: 'Built for You',
  },
  {
    icon: Target,
    title: 'Business-Focused Development',
    description:
      'We understand your business objectives first and then use technology to solve real operational challenges.',
    highlight: 'Goal Oriented',
  },
  {
    icon: Palette,
    title: 'Modern UI/UX Design',
    description:
      'Clean, responsive and user-friendly interfaces that make everyday work easier for your entire team.',
    highlight: 'Easy to Use',
  },
  {
    icon: Workflow,
    title: 'Practical Workflow Design',
    description:
      'Simple and efficient workflows designed to improve productivity, reduce errors and save valuable time.',
    highlight: 'Better Workflow',
  },
  {
    icon: Headphones,
    title: 'Fast Local Support',
    description:
      'Quick assistance, staff guidance and reliable support whenever your business needs our help.',
    highlight: 'Reliable Support',
  },
  {
    icon: Rocket,
    title: 'Scalable Systems',
    description:
      'Our solutions can grow with your business by adding new users, branches, features and modules.',
    highlight: 'Future Ready',
  },
]

const trustPoints = [
  'Requirement-based development',
  'Transparent communication',
  'Reliable local assistance',
  'Long-term technical support',
]

export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#f3f9fd] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-24 h-95 w-95 rounded-full bg-[#2c83b7]/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-110 w-110 rounded-full bg-[#06345d]/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#06345d 1px, transparent 1px), linear-gradient(90deg, #06345d 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="absolute left-[8%] top-36 h-2.5 w-2.5 rounded-full bg-[#2c83b7]/30" />
        <div className="absolute right-[9%] top-56 h-3 w-3 rounded-full bg-[#0b568c]/25" />
        <div className="absolute bottom-36 left-[15%] h-2 w-2 rounded-full bg-[#49a5d6]/30" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2c83b7]/25 bg-white px-4 py-2 shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0b568c]">
              <ShieldCheck className="h-3.5 w-3.5 text-white" />
            </span>

            <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#0b568c]">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#062f54] sm:text-4xl lg:text-5xl">
            Technology Developed Around
            <span className="block bg-linear-to-r from-[#0a4c82] via-[#176ca3] to-[#2c83b7] bg-clip-text text-transparent">
              Your Vision and Workflow
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#58758c] sm:text-lg">
            We combine practical business understanding, modern technology and
            dependable support to deliver solutions that truly work for you.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-linear-to-r from-[#06345d] to-[#49a5d6]" />
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon

            return (
              <Card
                key={reason.title}
                className="group relative overflow-hidden rounded-3xl border border-[#d5e7f2] bg-white py-0 shadow-[0_10px_35px_rgba(6,47,84,0.07)] transition-all duration-300 hover:-translate-y-2 hover:border-[#2c83b7]/50 hover:shadow-[0_24px_55px_rgba(6,47,84,0.15)]"
              >
                {/* Top Gradient Border */}
                <div className="h-1.5 w-full bg-linear-to-r from-[#06345d] via-[#0b568c] to-[#49a5d6] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Background Number */}
                <span className="pointer-events-none absolute right-5 top-6 text-6xl font-extrabold text-[#06345d]/4 transition-colors duration-300 group-hover:text-[#2c83b7]/10">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Decorative Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#2c83b7]/5 blur-2xl transition-all duration-500 group-hover:bg-[#2c83b7]/15" />

                <CardHeader className="relative px-6 pb-3 pt-7">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    {/* Icon */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#06345d] to-[#2c83b7] shadow-lg shadow-[#06345d]/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <span className="mt-1 inline-flex rounded-full border border-[#cfe4f2] bg-[#eef8fd] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0b568c]">
                      {reason.highlight}
                    </span>
                  </div>

                  <CardTitle className="text-xl font-extrabold leading-snug text-[#062f54] transition-colors duration-300 group-hover:text-[#0b568c]">
                    {reason.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative px-6 pb-7">
                  <p className="text-sm leading-6 text-[#647f93]">
                    {reason.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 border-t border-[#e0edf5] pt-4 text-xs font-bold uppercase tracking-widest text-[#2c83b7]">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    TechNet Solution Advantage
                  </div>
                </CardContent>

                {/* Bottom Hover Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-[#06345d] to-[#49a5d6] transition-all duration-500 group-hover:w-full" />
              </Card>
            )
          })}
        </div>

        {/* Trust Area */}
        <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-3xl border border-[#d5e7f2] bg-white shadow-[0_18px_55px_rgba(6,47,84,0.10)] lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Content */}
          <div className="relative overflow-hidden bg-linear-to-br from-[#062f54] via-[#0b568c] to-[#176ca3] px-6 py-9 sm:px-9 lg:py-10">
            <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border-32 border-white/5" />

            <div className="pointer-events-none absolute -bottom-24 left-20 h-48 w-48 rounded-full bg-[#49a5d6]/20 blur-3xl" />

            <div className="relative">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm">
                <ShieldCheck className="h-7 w-7 text-[#8ed7fa]" />
              </div>

              <p className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Your Vision,
                <span className="block text-[#91dcff]">Our Code</span>
              </p>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/75 sm:text-base">
                We do not force your business to adjust to software. We develop
                software that adjusts to your business.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="px-6 py-9 sm:px-9 lg:py-10">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0b568c]">
              Our Commitment
            </p>

            <h3 className="mt-3 text-2xl font-extrabold text-[#062f54] sm:text-3xl">
              A dependable technology partner for your business
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#647f93] sm:text-base">
              From initial discussion to implementation and support, we remain
              focused on your requirements and long-term success.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-xl border border-[#dbeaf3] bg-[#f5fafe] px-4 py-3"
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
              Discuss Your Requirements
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}