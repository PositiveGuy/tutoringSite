import Image from 'next/image'
import FooterSection from "./components/footer";
import HeaderSection from "./components/header";
import HeroSection from "./components/hero";

export default function Home() {
  return (
    <body>
      <HeaderSection/>
      <HeroSection/>
      <FooterSection/>
    </body>
  )
}
