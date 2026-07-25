import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Stethoscope,
  Wrench,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description:
      'Tailor-made software solutions designed around your exact business requirements, processes and future goals.',
    features: ['Requirement-based development', 'Scalable architecture'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Modern, responsive and secure web applications developed using reliable and up-to-date technologies.',
    features: ['Responsive design', 'Secure web applications'],
  },
  {
    icon: Smartphone,
    title: 'Mobile-Friendly Applications',
    description:
      'User-friendly applications that provide a smooth and consistent experience across mobiles, tablets and desktops.',
    features: ['Cross-device compatibility', 'Optimized user experience'],
  },
  {
    icon: Database,
    title: 'CRM Development',
    description:
      'Powerful CRM systems that help businesses manage customers, follow-ups, sales teams and daily operations.',
    features: ['Customer management', 'Sales workflow automation'],
  },
  {
    icon: Stethoscope,
    title: 'HMS & Clinic Software',
    description:
      'Comprehensive hospital and clinic management software built to simplify patient care and administrative work.',
    features: ['Patient and billing management', 'Customized hospital modules'],
  },
  {
    icon: Wrench,
    title: 'Software Customization',
    description:
      'Enhance or modify your existing software so it works according to your unique business processes and workflow.',
    features: ['Workflow customization', 'Existing system enhancement'],
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f3f9fd] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#2c83b7]/10 blur-3xl" />

        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#06345d]/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#06345d 1px, transparent 1px), linear-gradient(90deg, #06345d 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2c83b7]/25 bg-white px-4 py-2 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2c83b7]" />

            <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#0b568c]">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#062f54] sm:text-4xl lg:text-5xl">
            Smart Solutions Built Around
            <span className="block bg-linear-to-r from-[#0a4c82] via-[#176ca3] to-[#2c83b7] bg-clip-text text-transparent">
              Your Business Needs
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#58758c] sm:text-lg">
            From custom software to healthcare and CRM platforms, we create
            secure, reliable and fully customized digital solutions.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-linear-to-r from-[#06345d] to-[#49a5d6]" />
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <Card
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-[#d5e7f2] bg-white py-0 shadow-[0_10px_35px_rgba(6,47,84,0.07)] transition-all duration-300 hover:-translate-y-2 hover:border-[#2c83b7]/50 hover:shadow-[0_22px_50px_rgba(6,47,84,0.15)]"
              >
                {/* Top Gradient Border */}
                <div className="h-1.5 w-full bg-linear-to-r from-[#06345d] via-[#0b568c] to-[#49a5d6] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Card Number */}
                <span className="absolute right-5 top-6 text-5xl font-extrabold text-[#06345d]/5 transition-colors duration-300 group-hover:text-[#2c83b7]/10">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <CardHeader className="px-6 pb-3 pt-6">
                  <div className="mb-5 flex items-center justify-between">
                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#06345d] to-[#2c83b7] shadow-lg shadow-[#06345d]/15 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d7e8f4] bg-[#f3f9fd] text-[#0b568c] opacity-70 transition-all duration-300 group-hover:rotate-45 group-hover:border-[#2c83b7] group-hover:bg-[#0b568c] group-hover:text-white group-hover:opacity-100">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <CardTitle className="text-xl font-bold leading-snug text-[#062f54] transition-colors duration-300 group-hover:text-[#0b568c]">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 pb-7">
                  <CardDescription className="min-h-18 text-sm leading-6 text-[#647f93]">
                    {service.description}
                  </CardDescription>

                  {/* Features */}
                  <div className="mt-5 space-y-2.5 border-t border-[#e1edf5] pt-5">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2.5 text-sm font-medium text-[#365d79]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2c83b7]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Hover Bottom Decoration */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-[#06345d] to-[#49a5d6] transition-all duration-500 group-hover:w-full" />
              </Card>
            )
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#cfe3f0] bg-linear-to-r from-[#06345d] to-[#0b568c] px-6 py-7 shadow-xl shadow-[#06345d]/15 sm:flex-row sm:px-8">
          <div>
            <p className="text-xl font-bold text-white">
              Need a solution designed specifically for your business?
            </p>

            <p className="mt-1 text-sm leading-6 text-white/75">
              Share your requirements with us and we will develop the right
              solution for your workflow.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-white px-6 text-sm font-bold text-[#06345d] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#eaf5fc]"
          >
            Discuss Your Project
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}