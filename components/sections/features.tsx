import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  Database,
  Gauge,
  Lock,
  Shield,
  Smartphone,
  Users,
  Zap,
} from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Role-Based Access',
    description:
      'Control user permissions according to roles, departments and responsibilities.',
    highlight: 'Controlled Access',
  },
  {
    icon: Smartphone,
    title: 'Multi-Device Support',
    description:
      'Access your application smoothly from desktop, laptop, tablet and mobile devices.',
    highlight: 'Any Device',
  },
  {
    icon: Lock,
    title: 'Secure Login',
    description:
      'Protected authentication and secure access help keep your business information safe.',
    highlight: 'Secure Access',
  },
  {
    icon: Zap,
    title: 'Real-Time Data',
    description:
      'Get instant updates and synchronized information across all authorized users.',
    highlight: 'Live Updates',
  },
  {
    icon: Shield,
    title: 'Responsive User Interface',
    description:
      'A modern and user-friendly interface that adjusts perfectly to every screen size.',
    highlight: 'Easy to Use',
  },
  {
    icon: Cloud,
    title: 'Cloud or Local Deployment',
    description:
      'Choose cloud-based access or deploy the software within your local infrastructure.',
    highlight: 'Flexible Setup',
  },
  {
    icon: Database,
    title: 'Data Backup Support',
    description:
      'Reliable backup options help protect important business and customer information.',
    highlight: 'Data Protection',
  },
  {
    icon: Gauge,
    title: 'Scalable Architecture',
    description:
      'Add new users, branches, modules and features as your business continues to grow.',
    highlight: 'Future Ready',
  },
]

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#f3f9fd] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-95 w-95 rounded-full bg-[#2c83b7]/10 blur-3xl" />

        <div className="absolute -right-40 bottom-10 h-105 w-105 rounded-full bg-[#06345d]/10 blur-3xl" />

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
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0b568c]">
              <CheckCircle2 className="h-3.5 w-3.5 text-white" />
            </span>

            <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#0b568c]">
              Key Features
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#062f54] sm:text-4xl lg:text-5xl">
            Powerful Features in
            <span className="block bg-linear-to-r from-[#0a4c82] via-[#176ca3] to-[#2c83b7] bg-clip-text text-transparent">
              Every Software Solution
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#58758c] sm:text-lg">
            Our solutions are designed to remain secure, flexible, reliable and
            simple for your team to use.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-linear-to-r from-[#06345d] to-[#49a5d6]" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <Card
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-[#d5e7f2] bg-white py-0 shadow-[0_10px_35px_rgba(6,47,84,0.07)] transition-all duration-300 hover:-translate-y-2 hover:border-[#2c83b7]/50 hover:shadow-[0_22px_50px_rgba(6,47,84,0.15)]"
              >
                {/* Top Gradient */}
                <div className="h-1.5 w-full bg-linear-to-r from-[#06345d] via-[#0b568c] to-[#49a5d6] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Feature Number */}
                <span className="pointer-events-none absolute right-4 top-5 text-5xl font-extrabold text-[#06345d]/4 transition-colors duration-300 group-hover:text-[#2c83b7]/10">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Decorative Glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#2c83b7]/5 blur-2xl transition-all duration-500 group-hover:bg-[#2c83b7]/15" />

                <CardHeader className="relative px-5 pb-3 pt-6">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    {/* Icon */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#06345d] to-[#2c83b7] shadow-lg shadow-[#06345d]/15 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d7e8f4] bg-[#f3f9fd] text-[#0b568c] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#0b568c] group-hover:bg-[#0b568c] group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <span className="mb-2 inline-flex w-fit rounded-full border border-[#cfe4f2] bg-[#eef8fd] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0b568c]">
                    {feature.highlight}
                  </span>

                  <CardTitle className="text-lg font-extrabold leading-snug text-[#062f54] transition-colors duration-300 group-hover:text-[#0b568c]">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative px-5 pb-6">
                  <p className="text-sm leading-6 text-[#647f93]">
                    {feature.description}
                  </p>
                </CardContent>

                {/* Bottom Hover Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-[#06345d] to-[#49a5d6] transition-all duration-500 group-hover:w-full" />
              </Card>
            )
          })}
        </div>

        {/* Bottom Feature Banner */}
        <div className="relative mt-12 overflow-hidden rounded-3xl bg-linear-to-r from-[#062f54] via-[#0b568c] to-[#176ca3] px-6 py-8 shadow-xl shadow-[#06345d]/20 sm:px-9">
          <div className="pointer-events-none absolute -right-14 -top-20 h-52 w-52 rounded-full border-30 border-white/5" />

          <div className="pointer-events-none absolute -bottom-24 right-36 h-44 w-44 rounded-full bg-[#49a5d6]/25 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xl font-extrabold text-white sm:text-2xl">
                Built for security, performance and future growth
              </p>

              <p className="mt-2 text-sm leading-6 text-white/75 sm:text-base">
                Every solution can be customized with additional modules,
                permissions, reports and workflows according to your
                requirements.
              </p>
            </div>

            <div className="grid w-full grid-cols-3 gap-3 lg:w-auto lg:min-w-97.5">
              <div className="rounded-2xl border border-white/15 bg-white/10 px-3 py-4 text-center backdrop-blur-sm">
                <Shield className="mx-auto h-6 w-6 text-[#8ed7fa]" />
                <p className="mt-2 text-sm font-bold text-white">
                  Secure
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 px-3 py-4 text-center backdrop-blur-sm">
                <Zap className="mx-auto h-6 w-6 text-[#8ed7fa]" />
                <p className="mt-2 text-sm font-bold text-white">
                  Fast
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 px-3 py-4 text-center backdrop-blur-sm">
                <Gauge className="mx-auto h-6 w-6 text-[#8ed7fa]" />
                <p className="mt-2 text-sm font-bold text-white">
                  Scalable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}