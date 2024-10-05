import '../style.css'
import '../style.mobile.css'
import { useState } from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'

import BabyCrib from '/images/IMG-20241003-WA0056.jpg'
import BabyCarrier from '/images/IMG-20241003-WA0057.jpg'
import NoseFrida from '/images/IMG-20241003-WA0059.jpg'
import Bottle from '/images/IMG-20241003-WA0063.jpg'
import Bedding from '/images/bedding.jpg'
import Mixer from '/images/images (56).jpeg'
import AirFrier from '/images/images (57).jpeg'
import Bed from '/images/Bed.jpg'

type BestSellerCardProps = {
	imgSrc: string;
	content: string;
	rating: number;
}

const BestSellersContentBaby: BestSellerCardProps[] = [
	{
		imgSrc: BabyCrib,
		content: 'Baby Walker',
		rating: 4
	},
	{
		imgSrc: BabyCarrier,
		content: 'Baby Carrier',
		rating: 4.5
	},
	{
		imgSrc: NoseFrida,
		content: 'snot Sucker',
		rating: 3.5
	},
	{
		imgSrc: Bottle,
		content: 'Feedind Bottle',
		rating: 4
	}
]

const BestSellersContentWedding: BestSellerCardProps[] = [
	{
		imgSrc: Bedding,
		content: 'Bedding',
		rating: 4
	},
	{
		imgSrc: Mixer,
		content: 'Food Mixer',
		rating: 4
	},
	{
		imgSrc: AirFrier,
		content: 'Air Frier',
		rating: 4.5
	},
	{
		imgSrc: Bed,
		content: 'Complete Bed set',
		rating: 4
	}
]

function BestSellerCard ({ imgSrc, content, rating }:BestSellerCardProps) {
	return (
		<div className='best-seller-card'>
			<div> <img src={imgSrc}/> </div>
			<div>
				<span> {content} </span>

				<div className='stars'>
					{
						rating % 2 == 0 || rating % 2 == 1
						?
						Array.from(Array(5)).map((_, i) => {
							if (i < rating) {
								return(
									<span key={'star ' + i}>
										<FaStar />
									</span>
								)
							} else {
								return (
									<span key={'star ' + i}>
										<FaRegStar />
									</span>
								)
							}
						})
						:
						Array.from(Array(5)).map((_, i) => {
							if (i < rating && (rating - i) > 0.5 ) {
								return(
									<span key={'star ' + i}>
										<FaStar />
									</span>
								)
							} 
							else if (i < rating && (rating - i) == 0.5 ) {
								return(
									<span key={'star ' + i}>
										<FaStarHalfAlt />
									</span>
								)	
							}
							else {
								return (
									<span key={'star ' + i}>
										<FaRegStar />
									</span>
								)
							}
						})
					}
				</div>
			</div>
		</div>
	)
}

export function BestSellers () {

	const [ baby, setBaby ] = useState<boolean>(true)

	function clickWedding () {
		setBaby(false)
	}

	function clickBaby () {
		setBaby(true)
	}

	return (
		<div className='best-seller'>
			<div className='best-seller-top'>
				<span> Top Best Sellers Gifts </span>
				<div className='best-seller-btns'> 
					<button onClick={clickBaby} className={ baby ? '' : 'not-active' }> Baby Registry </button>
					<button onClick={clickWedding} className={ !baby ? '' : 'not-active' }> Wedding Registry </button>
				</div>
			</div>

			<div className='best-seller-btm'>

				<div>
					<span>
						Best Selling Products
					</span>

					<span> Best selling {baby ? 'baby' : 'wedding'} registry products and services. </span>

					<button> Create Registry </button>
				</div>

				<div className='best-seller-list'>
					{
						baby
						?						
						BestSellersContentBaby.map((item, i) => (
							<BestSellerCard key={'best-seller-card ' + i} imgSrc={item.imgSrc} content={item.content} rating={item.rating} />
						))
						:
						BestSellersContentWedding.map((item, i) => (
							<BestSellerCard key={'best-seller-card ' + i} imgSrc={item.imgSrc} content={item.content} rating={item.rating} />
						))
					}
				</div>

			</div>
		</div>
	)
}

/*
	

*/