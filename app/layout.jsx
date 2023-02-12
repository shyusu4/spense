import './globals.css'
import { Cabin } from '@next/font/google'

const cabin = Cabin({
  subsets: ['latin'],
  variable: '--font-cabin',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${cabin.variable} font-sans`}>{children}</body>
    </html>
  )
}
