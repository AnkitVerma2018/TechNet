import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  HeartPulse,
  ShoppingCart,
  Stethoscope,
  TrendingUp,
  Users,
} from 'lucide-react'

const industries = [
  {
    icon: Stethoscope,
    title: 'Healthcare & Clinics',
    description:
      'Customized healthcare solutions for hospitals, clinics, diagnostic centres and medical professionals.',
    solutions: [
      'Hospital & Clinic Management',
      'Patient Records & Billing',
      'Appointments & Prescriptions',
    ],
    label: 'Healthcare',
  },
  {
    icon: ShoppingCart,
    title: 'Retail Businesses',
    description:
      'Smart retail applications for managing inventory, billing, customers and daily sales operations.',
    solutions: [
      'Inventory Management',
      'POS & Billing Systems',
      'Customer Loyalty Programs',
    ],
    label: 'Retail',
  },
  {
    icon: Briefcase,
    title: 'Service-Based Businesses',
    description:
      'Practical business software for managing clients, projects, services, invoices and team activities.',
    solutions: [
      'Project Management',
      'Service Billing',
      'Customer Follow-ups',
    ],
    label: 'Services',
  },
  {
    icon: BookOpen,
    title: 'Educational Institutions',
    description:
      'Digital systems for schools, institutes and training centres to simplify academic administration.',
    solutions: [
      'Student Management',
      'Fees & Attendance',
      'Assessment & Reporting',
    ],
    label: 'Education',
  },
  {
    icon: TrendingUp,
    title: 'Small & Medium Enterprises',
    description:
      'Affordable and scalable solutions that help growing businesses improve productivity and control.',
    solutions: [
      'CRM & Sales Management',
      'Billing & Accounting Workflow',
      'Business Reports',
    ],
    label: 'SME',
  },
  {
    icon: Users,
    title: 'Enterprise Solutions',
    description:
      'Secure and scalable systems for organizations with complex workflows, teams and multiple locations.',
    solutions: [
      'Multi-Branch Operations',
      'Role-Based Access',
      'Custom Enterprise Modules',
    ],
    label: 'Enterprise',
  },
]

const industryBenefits = [
  {
    icon: Building2,
    title: 'Industry-Specific',
    description: 'Designed around your business sector',
  },
  {
    icon: HeartPulse,
    title: 'Practical Workflow',
    description: 'Built according to daily operations',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Growth',
    description: 'Ready for future expansion',
  },
]

export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-[#f3f9fd] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-100 w-100 rounded-full bg-[#2c83b7]/10 blur-3xl" />

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

        <div className="absolute right-[9%] top-56 h-2.5 w-2.5 rounded-full bg-[#0b568c]/25" />

        <div className="absolute bottom-36 left-[15%] h-2 w-2 rounded-full bg-[#49a5d6]/30" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2c83b7]/25 bg-white px-4 py-2 shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0b568c]">
              <Building2 className="h-3.5 w-3.5 text-white" />
            </span>

            <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#0b568c]">
              Industries We Serve
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#062f54] sm:text-4xl lg:text-5xl">
            Technology Solutions for
            <span className="block bg-linear-to-r from-[#0a4c82] via-[#176ca3] to-[#2c83b7] bg-clip-text text-transparent">
              Every Business Industry
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#58758c] sm:text-lg">
            We understand that every industry has different workflows and
            challenges. Our solutions are customized according to your specific
            business requirements.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-linear-to-r from-[#06345d] to-[#49a5d6]" />
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon

            return (
              <Card
                key={industry.title}
                className="group relative overflow-hidden rounded-3xl border border-[#d5e7f2] bg-white py-0 shadow-[0_10px_35px_rgba(6,47,84,0.07)] transition-all duration-300 hover:-translate-y-2 hover:border-[#2c83b7]/50 hover:shadow-[0_24px_55px_rgba(6,47,84,0.15)]"
              >
                {/* Top Gradient Border */}
                <div className="h-1.5 w-full bg-linear-to-r from-[#06345d] via-[#0b568c] to-[#49a5d6] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Background Number */}
                <span className="pointer-events-none absolute right-5 top-7 text-7xl font-extrabold text-[#06345d]/4 transition-colors duration-300 group-hover:text-[#2c83b7]/10">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Decorative Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#2c83b7]/5 blur-2xl transition-all duration-500 group-hover:bg-[#2c83b7]/15" />

                <CardHeader className="relative px-6 pb-4 pt-7">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    {/* Icon */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#06345d] to-[#2c83b7] shadow-lg shadow-[#06345d]/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <span className="inline-flex rounded-full border border-[#cfe4f2] bg-[#eef8fd] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0b568c]">
                        {industry.label}
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d7e8f4] bg-[#f3f9fd] text-[#0b568c] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#0b568c] group-hover:bg-[#0b568c] group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  <CardTitle className="text-xl font-extrabold leading-snug text-[#062f54] transition-colors duration-300 group-hover:text-[#0b568c]">
                    {industry.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative px-6 pb-7">
                  <p className="min-h-18 text-sm leading-6 text-[#647f93]">
                    {industry.description}
                  </p>

                  {/* Industry Solutions */}
                  <div className="mt-5 border-t border-[#e0edf5] pt-5">
                    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0b568c]">
                      Solutions We Provide
                    </p>

                    <ul className="space-y-2.5">
                      {industry.solutions.map((solution) => (
                        <li
                          key={solution}
                          className="flex items-start gap-2.5 text-sm font-medium text-[#365d79]"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2c83b7]" />

                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                {/* Bottom Hover Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-[#06345d] to-[#49a5d6] transition-all duration-500 group-hover:w-full" />
              </Card>
            )
          })}
        </div>

        {/* Industry Benefits */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {industryBenefits.map((benefit) => {
            const Icon = benefit.icon

            return (
              <div
                key={benefit.title}
                className="flex items-center gap-4 rounded-2xl border border-[#d5e7f2] bg-white p-5 shadow-[0_8px_25px_rgba(6,47,84,0.06)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e3f3fb]">
                  <Icon className="h-6 w-6 text-[#0b568c]" />
                </div>

                <div>
                  <p className="text-base font-extrabold text-[#062f54]">
                    {benefit.title}
                  </p>

                  <p className="mt-1 text-sm text-[#6b8598]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="relative mt-12 overflow-hidden rounded-3xl bg-linear-to-r from-[#062f54] via-[#0b568c] to-[#176ca3] px-6 py-8 shadow-xl shadow-[#06345d]/20 sm:px-9">
          <div className="pointer-events-none absolute -right-14 -top-20 h-52 w-52 rounded-full border-30 border-white/5" />

          <div className="pointer-events-none absolute -bottom-24 right-32 h-44 w-44 rounded-full bg-[#49a5d6]/25 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xl font-extrabold text-white sm:text-2xl">
                Your industry has unique requirements
              </p>

              <p className="mt-2 text-sm leading-6 text-white/75 sm:text-base">
                We study your workflow and develop a solution that matches your
                team, processes and long-term business goals.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-white px-6 text-sm font-bold text-[#06345d] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#eaf5fc] hover:shadow-xl"
            >
              Discuss Your Industry
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}