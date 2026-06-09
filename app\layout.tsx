import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bano Qabil Pro - Free IT Skills Training',
  description: 'Premium IT Skills Program for Pakistani Youth - Learn in-demand skills & get hired',
  keywords: 'IT training, Pakistan, coding, web development, jobs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-poppins bg-bgLight text-textDark">
        {children}
      </body>
    </html>
  )
}
