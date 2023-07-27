import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import Carous from '@/components/Carous'
import Grid from '@/components/Grid'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Nav/>
      <Header/>
      <Carous/>
      <Grid/>
      <Footer/>
    
    </div>
  )
}
