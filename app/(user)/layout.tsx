import Banner from '../../components/Banner'
import Header from '../../components/Header'
import '../../styles/globals.css'
export const metadata = {
  title: 'Blog App',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Header/>
      <Banner/>
      {children}
      </body>
    </html>
  )
}
