import '../style.css'
import '../style.mobile.css'
import img1 from '/images/IMG-20241003-WA0050.jpg' 

export function Reasons () {
	return (
		<div className='reasons'>

			<div className='reasons-img'>
				<img src={img1} />
			</div>


			<div className='reasons-cnt'>
				<span>Reasons To Register with Amazon</span>

				<div className='reasons-cnt-list'>
					<div className='reasons-cnt-item'>
						<span>Earth's biggest Selection</span>
						<span> Add items from Amazon to create a gift registry for any occasion. </span>
					</div>

					<div className='reasons-cnt-item'>
						<span>Easy to Share</span>
						<span> Share your gift registry with friends and family so that they will know exactly what gifts to get. </span>
					</div>

					<div className='reasons-cnt-item'>
						<span>Extended return</span>
						<span> Not quite right? Registry gifts have an extended return period. </span>
					</div>
				</div>

				<button> Create Your Registry </button>
			</div>
		</div>
	)
}