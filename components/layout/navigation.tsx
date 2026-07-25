'use client'

import { useEffect, useState, type MouseEvent } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Features', href: '#features' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Industries', href: '#industries' },
    { name: 'FAQ', href: '#faq' },
    
  ]

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault()

    const href = event.currentTarget.getAttribute('href')

    if (!href) return

    const element = document.querySelector(href)

    if (element) {
      const navigationHeight = 82
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY

      window.scrollTo({
        top: elementPosition - navigationHeight,
        behavior: 'smooth',
      })
    }

    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-[#d7e8f4] bg-white/95 shadow-[0_8px_30px_rgba(6,47,84,0.10)] backdrop-blur-xl'
          : 'border-transparent bg-[#f3f9fd]/85 backdrop-blur-md'
      }`}
    >
      {/* Brand Gradient Line */}
      <div className="h-1 w-full bg-linear-to-r from-[#062f54] via-[#0b568c] to-[#49a5d6]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-19 items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            aria-label="TechNet Solution Home"
            className="flex shrink-0 items-center"
            onClick={(event) => {
              event.preventDefault()

              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })

              setIsOpen(false)
            }}
          >
            <img
              src="/logo.png"
              alt="TechNet Solution"
              className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-[1.02] sm:h-25"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="group relative px-2.5 py-3 text-[13px] font-semibold text-[#284f6d] transition-colors duration-300 hover:text-[#0b568c] lg:px-3 lg:text-sm"
              >
                {link.name}

                <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-linear-to-r from-[#0b568c] to-[#49a5d6] transition-all duration-300 group-hover:w-[60%]" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-2 xl:flex">  
            <Button
              asChild
              size="sm"
              className="h-10 rounded-lg border-0 bg-linear-to-r from-[#06345d] to-[#0b568c] px-4 font-semibold text-white shadow-md shadow-[#06345d]/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-[#052b4d] hover:to-[#084a79] hover:shadow-lg hover:shadow-[#06345d]/25"
            >
              <a href="#contact" onClick={handleNavClick}>
                Contact Us
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((previous) => !previous)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d7e8f4] bg-white text-[#06345d] shadow-sm transition-all duration-300 hover:border-[#2c83b7]/50 hover:bg-[#eaf5fc] md:hidden"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-[#d7e8f4] bg-white shadow-[0_20px_40px_rgba(6,47,84,0.12)] transition-all duration-300 md:hidden ${
          isOpen
            ? 'max-h-180 translate-y-0 opacity-100'
            : 'max-h-0 -translate-y-2 border-transparent opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 pb-5 pt-4 sm:px-6">
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-[#284f6d] transition-all duration-300 hover:bg-[#eaf5fc] hover:text-[#0b568c]"
              >
                <span>{link.name}</span>

                <ArrowRight className="h-4 w-4 translate-x-0 text-[#2c83b7] opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
              </a>
            ))}
          </div>

          {/* Mobile CTA Buttons */}
          <div className="mt-4 grid grid-cols-1 gap-3 border-t border-[#d7e8f4] pt-4 sm:grid-cols-2">
            <Button
              asChild
              variant="outline"
              className="h-11 w-full rounded-xl border-2 border-[#0b568c] bg-white font-semibold text-[#0b568c] hover:border-[#0b568c] hover:bg-[#eaf5fc] hover:text-[#06345d]"
            >
              <a href="#contact" onClick={handleNavClick}>
                Request Demo
              </a>
            </Button>

            <Button
              asChild
              className="h-11 w-full rounded-xl border-0 bg-linear-to-r from-[#06345d] to-[#0b568c] font-semibold text-white shadow-md shadow-[#06345d]/20 hover:from-[#052b4d] hover:to-[#084a79]"
            >
              <a href="#contact" onClick={handleNavClick}>
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Bottom Text */}
          <div className="mt-4 rounded-xl border border-[#d7e8f4] bg-[#f3f9fd] px-4 py-3 text-center">
            <p className="text-xs font-medium text-[#57758c]">
              Smart, reliable and customized digital solutions
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}