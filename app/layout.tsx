import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'TechNet Solution | Your Vision, Our Code',
    template: '%s | TechNet Solution',
  },

  description:
    'TechNet Solution provides customized software development, hospital and clinic management software, CRM solutions, web applications and business automation systems.',

  keywords: [
    'TechNet Solution',
    'Custom Software Development',
    'Hospital Management Software',
    'Clinic Management Software',
    'CRM Development',
    'Web Development',
    'Software Company in Roorkee',
  ],

  authors: [
    {
      name: 'TechNet Solution',
    },
  ],

  creator: 'TechNet Solution',
  publisher: 'TechNet Solution',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}