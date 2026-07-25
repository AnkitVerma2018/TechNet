import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cloud,
  Code2,
  Hospital,
  ShieldCheck,
  Users,
} from "lucide-react";

export function HeroSection() {
  const services = [
    {
      title: "Custom Software",
      icon: Code2,
    },
    {
      title: "Web Development",
      icon: Cloud,
    },
    {
      title: "HMS Solutions",
      icon: Hospital,
    },
    {
      title: "CRM Systems",
      icon: Users,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f3f9fd] px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24">
      {/* Background Design */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-105 w-105 rounded-full bg-[#2c83b7]/15 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-112.5 w-112.5 rounded-full bg-[#06345d]/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#06345d 1px, transparent 1px), linear-gradient(90deg, #06345d 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="space-y-7">
            {/* Company Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2c83b7]/25 bg-white px-4 py-2 shadow-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0b4d83]">
                <CheckCircle2 className="h-4 w-4 text-white" />
              </span>

              <span className="text-sm font-semibold tracking-wide text-[#0b4d83]">
                Innovative Software & Web Solutions
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-[#062f54] sm:text-5xl lg:text-6xl">
                Your Vision,
                <span className="block bg-linear-to-r from-[#0a4c82] via-[#176ca3] to-[#2c83b7] bg-clip-text text-transparent">
                  Our Code
                </span>
              </h1>

              <p className="max-w-xl text-lg leading-8 text-[#49677f]">
                Transform your business with smart, reliable and customized
                digital solutions designed around your exact requirements.
              </p>
            </div>

            {/* Service List */}
            <div className="grid grid-cols-1 gap-3 py-2 sm:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="group flex items-center gap-3 rounded-xl border border-[#d7e8f4] bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2c83b7]/40 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-[#0a4c82] to-[#2c83b7] shadow-sm">
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    <span className="text-sm font-semibold text-[#163d5d]">
                      {service.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Trust Line */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#d7e8f4] pt-6">
              <div className="flex items-center gap-2 text-sm font-medium text-[#49677f]">
                <ShieldCheck className="h-5 w-5 text-[#1673aa]" />
                Secure & Reliable
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-[#49677f]">
                <CheckCircle2 className="h-5 w-5 text-[#1673aa]" />
                Fully Customized
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-[#49677f]">
                <Users className="h-5 w-5 text-[#1673aa]" />
                Local Support
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 pt-1 sm:flex-row">
              <a
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-linear-to-r from-[#06345d] to-[#0b568c] px-7 text-sm font-semibold text-white shadow-lg shadow-[#06345d]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#06345d]/25"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-[#0b568c] bg-white px-7 text-sm font-semibold text-[#0b568c] transition-all duration-300 hover:bg-[#eaf5fc]"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            {/* Glow */}
            <div className="absolute inset-8 rounded-[40px] bg-linear-to-br from-[#0b568c]/25 to-[#49a5d6]/20 blur-3xl" />

            {/* Main Dashboard Card */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white p-4 shadow-[0_30px_80px_-25px_rgba(4,47,84,0.35)]">
              {/* Browser Header */}
              <div className="flex items-center justify-between rounded-t-2xl bg-[#062f54] px-5 py-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#78c8ef]" />
                  <span className="h-3 w-3 rounded-full bg-[#4ca1d0]" />
                  <span className="h-3 w-3 rounded-full bg-white/70" />
                </div>

                <div className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80">
                  TechNet Solution
                </div>
              </div>

              {/* Dashboard Body */}
              <div className="rounded-b-2xl bg-[#edf6fc] p-5">
                <div className="mb-5 flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2c83b7]">
                      Business Dashboard
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-[#062f54]">
                      Smart Digital Solutions
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-[#0a4c82] to-[#2c83b7] shadow-md">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-[#d3e7f4] bg-white p-4">
                    <div className="mb-3 h-2 w-10 rounded-full bg-[#2c83b7]/30" />
                    <p className="text-2xl font-bold text-[#06345d]">98%</p>
                    <p className="mt-1 text-[11px] text-[#71889a]">
                      Performance
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#d3e7f4] bg-white p-4">
                    <div className="mb-3 h-2 w-10 rounded-full bg-[#0a4c82]/30" />
                    <p className="text-2xl font-bold text-[#06345d]">24/7</p>
                    <p className="mt-1 text-[11px] text-[#71889a]">
                      Availability
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#d3e7f4] bg-white p-4">
                    <div className="mb-3 h-2 w-10 rounded-full bg-[#49a5d6]/30" />
                    <p className="text-2xl font-bold text-[#06345d]">100%</p>
                    <p className="mt-1 text-[11px] text-[#71889a]">
                      Customized
                    </p>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="mt-4 rounded-xl border border-[#d3e7f4] bg-white p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-[#163d5d]">
                        Business Growth
                      </p>
                      <p className="text-xs text-[#7890a3]">
                        Digital performance overview
                      </p>
                    </div>

                    <div className="rounded-lg bg-[#e5f3fb] px-3 py-1 text-xs font-semibold text-[#0b568c]">
                      Live
                    </div>
                  </div>

                  <div className="flex h-32 items-end gap-3">
                    {[38, 55, 46, 70, 62, 87, 78, 96].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex flex-1 items-end"
                          style={{ height: "100%" }}
                        >
                          <div
                            className="w-full rounded-t-md bg-linear-to-t from-[#06345d] to-[#48a4d5]"
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Secure Card */}
            <div className="absolute -right-6 top-24 flex items-center gap-3 rounded-2xl border border-[#d5e7f2] bg-white px-4 py-3 shadow-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e5f4fc]">
                <ShieldCheck className="h-6 w-6 text-[#0b568c]" />
              </div>

              <div>
                <p className="text-sm font-bold text-[#06345d]">Secure System</p>
                <p className="text-xs text-[#7890a3]">Reliable technology</p>
              </div>
            </div>

            {/* Floating Code Card */}
            <div className="absolute -bottom-7 -left-7 flex items-center gap-3 rounded-2xl bg-[#06345d] px-5 py-4 text-white shadow-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Code2 className="h-6 w-6 text-[#7dc9ef]" />
              </div>

              <div>
                <p className="text-sm font-bold">Built Around You</p>
                <p className="text-xs text-white/65">
                  Customized to your needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}