import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  CheckCircle2,
  Code2,
  HeartHandshake,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    title: 'Understand & Plan',
    description:
      'We discuss your requirements, current workflow, challenges and project goals before preparing the right solution.',
    highlight: 'Step 1',
  },
  {
    icon: Code2,
    title: 'Design & Develop',
    description:
      'We design the interface, plan the modules and develop a secure, scalable solution around your workflow.',
    highlight: 'Step 2',
  },
  {
    icon: Rocket,
    title: 'Test & Deploy',
    description:
      'We test functionality, usability and data accuracy before installing and configuring the completed solution.',
    highlight: 'Step 3',
  },
  {
    icon: HeartHandshake,
    title: 'Support & Improve',
    description:
      'We provide staff guidance, issue resolution, maintenance and future improvements whenever required.',
    highlight: 'Step 4',
  },
]

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      {/* Background Decorations */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
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
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2c83b7]/25 bg-[#f3f9fd] px-4 py-2 shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0b568c]">
              <Sparkles className="h-3.5 w-3.5 text-white" />
            </span>

            <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#0b568c]">
              Our Development Process
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#062f54] sm:text-4xl lg:text-5xl">
            From Requirement to
            <span className="block bg-linear-to-r from-[#0a4c82] via-[#176ca3] to-[#2c83b7] bg-clip-text text-transparent">
              A Complete Digital Solution
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#58758c] sm:text-lg">
            A simple and transparent process that keeps your requirements,
            workflow and business goals at the centre of development.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-linear-to-r from-[#06345d] to-[#49a5d6]" />
        </div>

        {/* Process Cards */}
        <div className="relative">
          <div className="pointer-events-none absolute left-[9%] right-[9%] top-20 hidden h-0.5 bg-linear-to-r from-[#d8eaf5] via-[#2c83b7]/50 to-[#d8eaf5] xl:block" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <div key={step.title} className="group relative">
                  <Card className="relative h-full overflow-hidden rounded-3xl border border-[#d5e7f2] bg-white py-0 shadow-[0_10px_35px_rgba(6,47,84,0.07)] transition-all duration-300 hover:-translate-y-2 hover:border-[#2c83b7]/50 hover:shadow-[0_24px_55px_rgba(6,47,84,0.15)]">
                    <div className="h-1.5 w-full bg-linear-to-r from-[#06345d] via-[#0b568c] to-[#49a5d6] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                    <span
                      className="pointer-events-none absolute right-5 top-6 text-7xl font-extrabold text-[#06345d]/5 transition-colors duration-300 group-hover:text-[#2c83b7]/10"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div
                      className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#2c83b7]/5 blur-2xl transition-all duration-500 group-hover:bg-[#2c83b7]/15"
                      aria-hidden="true"
                    />

                    <CardHeader className="relative px-6 pb-3 pt-7">
                      <div className="mb-6 flex items-center justify-between gap-4">
                        <div className="relative">
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#06345d] to-[#2c83b7] shadow-lg shadow-[#06345d]/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                            <Icon className="h-8 w-8 text-white" />
                          </div>

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

                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-[#06345d] to-[#49a5d6] transition-all duration-500 group-hover:w-full" />
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        {/* Trust Message */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <ShieldCheck className="h-5 w-5 text-[#0b568c]" />

          <p className="text-sm font-semibold text-[#58758c]">
            Clear communication, practical development and dependable support
            from start to finish.
          </p>
        </div>
      </div>
    </section>
  )
}