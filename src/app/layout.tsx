import './globals.css'
import Navigation from './components/Navigation'

export const metadata = {
  title: 'Your Personal Website',
  description: 'A personal website built with Next.js and React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navigation />
        <main className="max-w-4xl mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  )
}
