import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  Braces,
  CheckCircle2,
  CloudCog,
  Code2,
  Database,
  GitBranch,
  Layers3,
  ServerCog,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

const techCategories = [
  {
    icon: Code2,
    category: 'Frontend Development',
    shortTitle: 'Frontend',
    description:
      'Modern, responsive and user-friendly interfaces for web applications.',
    technologies: [
      'React.js',
      'Next.js',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'TypeScript',
    ],
  },
  {
    icon: ServerCog,
    category: 'Backend Development',
    shortTitle: 'Backend',
    description:
      'Secure and scalable server-side applications for complex business operations.',
    technologies: [
      'Django',
      'ASP.NET',
      'Node.js',
      'Express.js',
      'Python',
      'C#',
    ],
  },
  {
    icon: Database,
    category: 'Database Technologies',
    shortTitle: 'Database',
    description:
      'Reliable database systems for secure storage and efficient data management.',
    technologies: [
      'SQL Server',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Firebase',
      'Oracle',
    ],
  },
  {
    icon: CloudCog,
    category: 'Tools, APIs & Cloud',
    shortTitle: 'Tools & APIs',
    description:
      'Professional development tools, APIs and deployment technologies.',
    technologies: [
      'REST APIs',
      'JWT Authentication',
      'Git & GitHub',
      'Docker',
      'AWS',
      'Microsoft Azure',
    ],
  },
]

export function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
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

        <div className="absolute left-[8%] top-28 h-3 w-3 rounded-full bg-[#2c83b7]/30" />
        <div className="absolute right-[10%] top-48 h-2 w-2 rounded-full bg-[#0b568c]/30" />
        <div className="absolute bottom-32 left-[16%] h-2.5 w-2.5 rounded-full bg-[#49a5d6]/30" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2c83b7]/25 bg-[#f3f9fd] px-4 py-2 shadow-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0b568c]">
              <Braces className="h-3.5 w-3.5 text-white" />
            </span>

            <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#0b568c]">
              Technologies We Use
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#062f54] sm:text-4xl lg:text-5xl">
            Modern Technologies for
            <span className="block bg-linear-to-r from-[#0a4c82] via-[#176ca3] to-[#2c83b7] bg-clip-text text-transparent">
              Reliable Digital Solutions
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#58758c] sm:text-lg">
            We use stable, secure and industry-proven technologies to develop
            high-performance software and web applications.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-linear-to-r from-[#06345d] to-[#49a5d6]" />
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {techCategories.map((tech, index) => {
            const Icon = tech.icon

            return (
              <Card
                key={tech.category}
                className="group relative overflow-hidden rounded-3xl border border-[#d5e7f2] bg-white py-0 shadow-[0_10px_35px_rgba(6,47,84,0.07)] transition-all duration-300 hover:-translate-y-2 hover:border-[#2c83b7]/50 hover:shadow-[0_24px_55px_rgba(6,47,84,0.15)]"
              >
                {/* Top Gradient Line */}
                <div className="h-1.5 w-full bg-linear-to-r from-[#06345d] via-[#0b568c] to-[#49a5d6]" />

                {/* Background Number */}
                <span className="pointer-events-none absolute right-4 top-7 text-6xl font-extrabold text-[#06345d]/4 transition-colors duration-300 group-hover:text-[#2c83b7]/10">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Decorative Glow */}
                <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#2c83b7]/5 blur-2xl transition-all duration-500 group-hover:bg-[#2c83b7]/15" />

                <CardHeader className="relative px-6 pb-4 pt-7">
                  {/* Icon */}
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#06345d] to-[#2c83b7] shadow-lg shadow-[#06345d]/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Category Label */}
                  <span className="mb-3 inline-flex w-fit rounded-full border border-[#cfe4f2] bg-[#eef8fd] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0b568c]">
                    {tech.shortTitle}
                  </span>

                  <CardTitle className="text-xl font-extrabold leading-snug text-[#062f54] transition-colors duration-300 group-hover:text-[#0b568c]">
                    {tech.category}
                  </CardTitle>

                  <p className="mt-2 min-h-18 text-sm leading-6 text-[#647f93]">
                    {tech.description}
                  </p>
                </CardHeader>

                <CardContent className="relative px-6 pb-7">
                  <div className="border-t border-[#e0edf5] pt-5">
                    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0b568c]">
                      Technology Stack
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {tech.technologies.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-[#d6e8f3] bg-[#f5fafe] px-2.5 py-2 text-xs font-semibold text-[#365d79] transition-all duration-300 hover:border-[#2c83b7]/50 hover:bg-[#e9f6fc] hover:text-[#0b568c]"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#2c83b7]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>

                {/* Bottom Hover Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-[#06345d] to-[#49a5d6] transition-all duration-500 group-hover:w-full" />
              </Card>
            )
          })}
        </div>

        {/* Technology Highlights */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-3 rounded-2xl border border-[#d5e7f2] bg-[#f7fbfe] p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e3f3fb]">
              <ShieldCheck className="h-5 w-5 text-[#0b568c]" />
            </div>

            <div>
              <p className="text-sm font-extrabold text-[#062f54]">
                Secure Stack
              </p>
              <p className="mt-0.5 text-xs text-[#6b8598]">
                Protected architecture
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-[#d5e7f2] bg-[#f7fbfe] p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e3f3fb]">
              <Layers3 className="h-5 w-5 text-[#0b568c]" />
            </div>

            <div>
              <p className="text-sm font-extrabold text-[#062f54]">
                Scalable Systems
              </p>
              <p className="mt-0.5 text-xs text-[#6b8598]">
                Built for future growth
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-[#d5e7f2] bg-[#f7fbfe] p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e3f3fb]">
              <GitBranch className="h-5 w-5 text-[#0b568c]" />
            </div>

            <div>
              <p className="text-sm font-extrabold text-[#062f54]">
                Version Controlled
              </p>
              <p className="mt-0.5 text-xs text-[#6b8598]">
                Organized development
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-[#d5e7f2] bg-[#f7fbfe] p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e3f3fb]">
              <Sparkles className="h-5 w-5 text-[#0b568c]" />
            </div>

            <div>
              <p className="text-sm font-extrabold text-[#062f54]">
                Modern Solutions
              </p>
              <p className="mt-0.5 text-xs text-[#6b8598]">
                Latest stable technology
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="relative mt-12 overflow-hidden rounded-3xl bg-linear-to-r from-[#062f54] via-[#0b568c] to-[#176ca3] px-6 py-8 shadow-xl shadow-[#06345d]/20 sm:px-9">
          <div className="pointer-events-none absolute -right-14 -top-20 h-52 w-52 rounded-full border-30 border-white/5" />

          <div className="pointer-events-none absolute -bottom-24 right-32 h-44 w-44 rounded-full bg-[#49a5d6]/25 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xl font-extrabold text-white sm:text-2xl">
                The right technology for every business requirement
              </p>

              <p className="mt-2 text-sm leading-6 text-white/75 sm:text-base">
                We select the technology stack according to your project size,
                security requirements, performance needs and future expansion.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                <CheckCircle2 className="h-5 w-5 text-[#8ed7fa]" />
                <span className="text-sm font-bold text-white">
                  Secure
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                <CheckCircle2 className="h-5 w-5 text-[#8ed7fa]" />
                <span className="text-sm font-bold text-white">
                  Reliable
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                <CheckCircle2 className="h-5 w-5 text-[#8ed7fa]" />
                <span className="text-sm font-bold text-white">
                  Scalable
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}