import './globals.css'

export const metadata = {
  title: 'Lakshmi Lahari Satti | AI/ML Engineer',
  description: 'Portfolio of Lakshmi Lahari Satti',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
