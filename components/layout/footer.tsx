import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react'

const quickLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Features', href: '#features' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Why Choose Us', href: '#why-us' },
  { name: 'Development Process', href: '#process' },
  { name: 'Industries', href: '#industries' },
  { name: 'FAQ', href: '#faq' },
]

const services = [
  'Custom Software Development',
  'HMS & Clinic Software',
  'CRM Development',
  'Web Application Development',
  'Inventory & Billing Systems',
  'Software Customization',
]

const trustPoints = [
  'Customized Solutions',
  'Reliable Local Support',
  'Secure & Scalable Systems',
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-[#041f38] text-white">
      {/* Top Gradient Line */}
      <div className="h-1.5 w-full bg-linear-to-r from-[#49a5d6] via-[#0b568c] to-[#49a5d6]" />

      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-100px w-100px rounded-full bg-[#2c83b7]/10 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-115 w-115 rounded-full bg-[#49a5d6]/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />

        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-45 border-white/025]" />
      </div>

      {/* Footer CTA */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-linear-to-r from-[#0a4c82] via-[#0b568c] to-[#176ca3] px-6 py-8 shadow-2xl shadow-black/20 sm:px-9">
            <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border-35 border-white/5" />

            <div className="pointer-events-none absolute -bottom-24 left-[35%] h-48 w-48 rounded-full bg-[#70c7ee]/20 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <div className="flex max-w-3xl items-start gap-4">
                <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm sm:flex">
                  <MessageCircle className="h-8 w-8 text-[#91dcff]" />
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#91dcff]">
                    Have a Project in Mind?
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                    Let&apos;s build the right solution for your business
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
                    Share your requirements with us and get a software solution
                    developed according to your workflow and business goals.
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-white px-6 text-sm font-extrabold text-[#06345d] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#eaf5fc] hover:shadow-xl"
              >
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.25fr]">
          {/* Company Information */}
          <div>
            {/* Logo Area */}
            <a
              href="#"
              aria-label="TechNet Solution Home"
              className="inline-flex items-center"
            >
              <div className="overflow-hidden rounded-xl bg-white px-3 py-2 shadow-lg">
                <img
                  src="/logo.png"
                  alt="TechNet Solution"
                  className="h-14 w-auto max-w-62.5 object-contain"
                />
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
              We develop customized software, hospital management systems, CRM
              platforms, websites and business applications according to your
              exact requirements.
            </p>

            {/* Motto */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/6] p-5 backdrop-blur-sm">
              <p className="text-xl font-extrabold text-white">
                Your Vision,
                <span className="ml-1 text-[#91dcff]">Our Code</span>
              </p>

              <p className="mt-2 text-xs leading-5 text-white/55">
                Technology designed around your business workflow.
              </p>
            </div>

            {/* Trust Points */}
            <div className="mt-5 space-y-2.5">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2.5 text-sm font-medium text-white/70"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#70c7ee]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <FooterHeading title="Quick Links" />

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/65 transition-all duration-300 hover:translate-x-1 hover:text-[#91dcff]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#49a5d6] transition-transform duration-300 group-hover:scale-150" />

                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <FooterHeading title="Our Services" />

            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-2 text-sm leading-6 text-white/65"
                >
                  <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-[#49a5d6]" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <FooterHeading title="Contact Information" />

            <div className="mt-6 space-y-4">
              {/* Phone */}
              <a
                href="tel:+919084611723"
                className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5] p-4 transition-all duration-300 hover:border-[#49a5d6]/40 hover:bg-white/8"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#176ca3]/30 text-[#91dcff]">
                  <Phone className="h-5 w-5" />
                </span>

                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/45">
                    Call Us
                  </span>

                  <span className="mt-1 block text-sm font-bold text-white transition-colors group-hover:text-[#91dcff]">
                    +91 90846 11723
                  </span>
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:technetsolutiontke19@gmail.com"
                className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/5] p-4 transition-all duration-300 hover:border-[#49a5d6]/40 hover:bg-white/8"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#176ca3]/30 text-[#91dcff]">
                  <Mail className="h-5 w-5" />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/45">
                    Email Us
                  </span>

                  <span className="mt-1 block break-all text-sm font-bold leading-5 text-white transition-colors group-hover:text-[#91dcff]">
                    technetsolutiontke19@gmail.com
                  </span>
                </span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#176ca3]/30 text-[#91dcff]">
                  <MapPin className="h-5 w-5" />
                </span>

                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/45">
                    Location
                  </span>

                  <span className="mt-1 block text-sm font-bold leading-5 text-white">
                    Roorkee, Uttarakhand, India
                  </span>
                </span>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#176ca3]/30 text-[#91dcff]">
                  <Clock className="h-5 w-5" />
                </span>

                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/45">
                    Business Hours
                  </span>

                  <span className="mt-1 block text-sm font-bold leading-5 text-white">
                    Monday – Saturday
                  </span>

                  <span className="mt-0.5 block text-xs text-white/55">
                    9:00 AM – 6:00 PM IST
                  </span>
                </span>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919084611723?text=Hello%20TechNet%20Solution%2C%20I%20want%20to%20discuss%20a%20software%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 flex h-12 w-full items-center justify-center rounded-xl bg-[#25D366] px-5 text-sm font-extrabold text-white shadow-lg shadow-[#25D366]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20bd5a] hover:shadow-xl"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Connect on WhatsApp
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Security & Support Strip */}
        <div className="mt-12 grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5] p-5 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 shrink-0 text-[#70c7ee]" />

            <div>
              <p className="text-sm font-bold text-white">
                Secure Development
              </p>

              <p className="mt-0.5 text-xs text-white/50">
                Reliable software architecture
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <HeadsetIcon />

            <div>
              <p className="text-sm font-bold text-white">
                Local Support
              </p>

              <p className="mt-0.5 text-xs text-white/50">
                Quick assistance when needed
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-[#70c7ee]" />

            <div>
              <p className="text-sm font-bold text-white">
                Fully Customized
              </p>

              <p className="mt-0.5 text-xs text-white/50">
                Developed around your workflow
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-white/10 bg-[#03182c]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-6 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <p className="text-sm text-white/55">
            &copy; {currentYear}{' '}
            <span className="font-bold text-white/80">TechNet Solution</span>.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
            <a
              href="/privacy-policy"
              className="text-white/55 transition-colors hover:text-[#91dcff]"
            >
              Privacy Policy
            </a>

            <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />

            <a
              href="/terms-of-service"
              className="text-white/55 transition-colors hover:text-[#91dcff]"
            >
              Terms of Service
            </a>

            <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />

            <a
              href="/cookie-policy"
              className="text-white/55 transition-colors hover:text-[#91dcff]"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterHeading({ title }: { title: string }) {
  return (
    <div>
      <h3 className="text-lg font-extrabold text-white">{title}</h3>

      <div className="mt-3 flex items-center gap-1">
        <span className="h-1 w-8 rounded-full bg-[#49a5d6]" />
        <span className="h-1 w-2 rounded-full bg-[#91dcff]" />
      </div>
    </div>
  )
}

function HeadsetIcon() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center">
      <Phone className="h-6 w-6 text-[#70c7ee]" />
    </span>
  )
}