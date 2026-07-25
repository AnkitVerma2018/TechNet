import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/sections/hero'
import { ServicesSection } from '@/components/sections/services'
import { ProductsSection } from '@/components/sections/products'
import { FeaturesSection } from '@/components/sections/features'
// import { TechnologiesSection } from '@/components/sections/technologies'
import { WhyChooseUsSection } from '@/components/sections/why-choose-us'
import { ProcessSection } from '@/components/sections/process'
// import { IndustriesSection } from '@/components/sections/industries'
import { FAQSection } from '@/components/sections/faq'
import { ContactSection } from '@/components/sections/contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <FeaturesSection />
      {/* <TechnologiesSection /> */}
      <WhyChooseUsSection />
      <ProcessSection />
      {/* <IndustriesSection /> */}
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
