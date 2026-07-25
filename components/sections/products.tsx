import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  ArrowUpRight,
  CheckCircle2,
  Hospital,
  MonitorCog,
  PackageSearch,
  Users,
} from 'lucide-react'

const products = [
  {
    icon: Hospital,
    title: 'HMS & Clinic Management Software',
    description:
      'A complete healthcare management solution designed for hospitals, clinics and medical centres.',
    features: [
      'OPD & IPD Management',
      'Digital Prescription System',
      'Patient Medical Records',
      'Billing & Payment Management',
      'Appointment Scheduling',
    ],
    label: 'Healthcare',
  },
  {
    icon: Users,
    title: 'CRM Solutions',
    description:
      'A customized customer relationship management platform for sales, follow-ups and business growth.',
    features: [
      'Lead Pipeline Management',
      'Follow-up Management',
      'Sales Performance Reports',
      'Customer Analytics',
      'Workflow Integration Tools',
    ],
    label: 'Business',
  },
  {
    icon: PackageSearch,
    title: 'Inventory & Billing System',
    description:
      'A smart inventory and billing solution for managing stock, purchases, sales and daily transactions.',
    features: [
      'Real-Time Stock Management',
      'Purchase Order Management',
      'Sales Management',
      'GST-Ready Billing System',
      'Reports & Analytics',
    ],
    label: 'Inventory',
  },
  {
    icon: MonitorCog,
    title: 'Windows Applications',
    description:
      'Fast and reliable Windows desktop applications developed according to your business requirements.',
    features: [
      'Fast Application Performance',
      'Offline Working Support',
      'Simple Installation',
      'Enterprise-Level Features',
      'Customized Modules',
    ],
    label: 'Desktop',
  },
]

export function ProductsSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-16 h-90 w-90 rounded-full bg-[#2c83b7]/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-105 w-105 rounded-full bg-[#06345d]/10 blur-3xl" />

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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2c83b7]/25 bg-[#f3f9fd] px-4 py-2 shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#2c83b7]" />

            <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#0b568c]">
              Our Products
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#062f54] sm:text-4xl lg:text-5xl">
            Powerful Products for
            <span className="block bg-linear-to-r from-[#0a4c82] via-[#176ca3] to-[#2c83b7] bg-clip-text text-transparent">
              Smarter Business Operations
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#58758c] sm:text-lg">
            Reliable and customizable software products designed to simplify
            operations, improve productivity and support business growth.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-linear-to-r from-[#06345d] to-[#49a5d6]" />
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {products.map((product, index) => {
            const Icon = product.icon

            return (
              <Card
                key={product.title}
                className="group relative overflow-hidden rounded-3xl border border-[#d5e7f2] bg-white py-0 shadow-[0_12px_40px_rgba(6,47,84,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#2c83b7]/50 hover:shadow-[0_25px_60px_rgba(6,47,84,0.16)]"
              >
                {/* Top Gradient */}
                <div className="h-1.5 w-full bg-linear-to-r from-[#06345d] via-[#0b568c] to-[#49a5d6]" />

                {/* Background Product Number */}
                <span className="pointer-events-none absolute right-6 top-8 text-7xl font-extrabold text-[#06345d]/4 transition-colors duration-300 group-hover:text-[#2c83b7]/10">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Decorative Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#2c83b7]/5 blur-2xl transition-all duration-500 group-hover:bg-[#2c83b7]/15" />

                <CardHeader className="relative px-6 pb-4 pt-7 sm:px-8">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Product Icon */}
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#06345d] to-[#2c83b7] shadow-lg shadow-[#06345d]/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                        <Icon className="h-8 w-8 text-white" />
                      </div>

                      <div>
                        <span className="inline-flex rounded-full border border-[#cfe4f2] bg-[#eef8fd] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0b568c]">
                          {product.label}
                        </span>
                      </div>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d5e7f2] bg-[#f3f9fd] text-[#0b568c] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#0b568c] group-hover:bg-[#0b568c] group-hover:text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>

                  <CardTitle className="max-w-md text-xl font-extrabold leading-snug text-[#062f54] transition-colors duration-300 group-hover:text-[#0b568c] sm:text-2xl">
                    {product.title}
                  </CardTitle>

                  <CardDescription className="mt-2 max-w-xl text-sm leading-6 text-[#647f93]">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative px-6 pb-8 sm:px-8">
                  <div className="rounded-2xl border border-[#dceaf3] bg-[#f7fbfe] p-5 transition-colors duration-300 group-hover:bg-[#f1f9fd]">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#0b568c]">
                      Key Features
                    </p>

                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm font-medium leading-5 text-[#365d79]"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2c83b7]" />

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center text-sm font-bold text-[#0b568c] transition-colors duration-300 hover:text-[#06345d]"
                  >
                    Discuss This Product
                    <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </CardContent>

                {/* Bottom Hover Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-[#06345d] to-[#49a5d6] transition-all duration-500 group-hover:w-full" />
              </Card>
            )
          })}
        </div>

        {/* Custom Product Banner */}
        <div className="relative mt-12 overflow-hidden rounded-3xl bg-linear-to-r from-[#062f54] via-[#0b568c] to-[#176ca3] px-6 py-8 shadow-xl shadow-[#06345d]/20 sm:px-9">
          <div className="pointer-events-none absolute -right-14 -top-20 h-52 w-52 rounded-full border-30 border-white/5" />

          <div className="pointer-events-none absolute -bottom-24 right-32 h-44 w-44 rounded-full bg-[#49a5d6]/20 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-xl font-extrabold text-white sm:text-2xl">
                Need a product customized for your exact workflow?
              </p>

              <p className="mt-2 text-sm leading-6 text-white/75 sm:text-base">
                Every business works differently. We can modify existing
                products or develop a completely new solution according to your
                requirements.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-white px-6 text-sm font-bold text-[#06345d] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#eaf5fc] hover:shadow-xl"
            >
              Request Customization
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}