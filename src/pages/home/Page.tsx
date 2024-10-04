import './style.css'
import './style.mobile.css'
import { Navbar } from './components/Navbar.tsx'
import { HeroSection } from './components/HeroSection.tsx'
import { Benefits } from './components/Benefits.tsx'
// import { BestSellers } from './components/BestSellers.tsx'
import { Reasons } from './components/Reasons.tsx'
import { Ready } from './components/Ready.tsx'
import { Footer } from './components/Footer.tsx'

function Page () {
	return (
		<div className='home-page'>
			<Navbar />
			<HeroSection />
			<Benefits />
			{/*<BestSellers />*/}
			<Reasons />
			<Ready />
			<Footer />
		</div>
	)
}

export default Page;