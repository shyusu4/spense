import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1 className="m-2 text-4xl font-bold text-cyan-500">Tailwind CSS</h1>
  )
}
