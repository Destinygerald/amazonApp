import '../style.css'
import '../style.mobile.css'
import img1 from '/images/IMG-20241003-WA0053.jpg'
import img2 from '/images/IMG-20241003-WA0056.jpg'

function HeroSectionLeft () {
	return (
		<div className='hero-section-left'>
			<div className='hsl-cnt'>
				<div>Welcome to your One-Stop Baby Registry</div>
				<span> Everything you are looking for. All in one place. </span>
				<button> Create your Registry </button>
			</div>

			<div className='hsl-extra-info'>
				<span> 800+ </span>
				<span> Baby Essential Products </span>
			</div>

			<div className='hsl-bottom'>
				<div className='hsl-bottom-img'>
					<img src={img2} />
				</div>

				<div className='hsl-bottom-cnt'>
					<span> Baby Craddle </span>

					<span>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur.
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