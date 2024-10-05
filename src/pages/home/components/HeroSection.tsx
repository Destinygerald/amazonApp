import '../style.css'
import '../style.mobile.css'
import img1 from '/images/images (58).jpeg'
import img2 from '/images/IMG-20241003-WA0056.jpg'
// import { PopupContextFunction } from '../../../context/PopupContext.tsx'

function HeroSectionLeft () {

	// const { openPopup } = PopupContextFunction()

	function handleClick () {
		// openPopup()
		return;
	}

	return (
		<div className='hero-section-left'>
			<div className='hsl-cnt'>
				<div>Welcome to your One-Stop Registry Service</div>
				<span> Everything you are looking for. All in one place. </span>
				<button onClick={handleClick}> Create your Registry </button>
			</div>

			<div className='hsl-extra-info'>
				<span> 800+ </span>
				<span> Baby and Weddings Essential Products </span>
			</div>

			<div className='hsl-bottom'>
				<div className='hsl-bottom-img'>
					<img src={img2} />
				</div>

				<div className='hsl-bottom-cnt'>
					<span> Baby Craddle </span>

					<span>
						Two in one Baby Walker with a year warranty
					</span>

					<span> $12.00 </span>
				</div>
			</div>
		</div>
	)
}

function HeroSectionRight () {
	return (
		<div className='hero-section-right'>
			<div className='hsr-cnt'>
				<img src={img1} />
			</div>

			<div className='hsr-img-bck' />
		</div>
	)
}

export function HeroSection () {
	return (
		<div className='hero-section'>
			<HeroSectionLeft />
			<HeroSectionRight />
		</div>
	)
}