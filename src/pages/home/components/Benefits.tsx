import '../style.css'
import '../style.mobile.css'
// import { IconType } from 'react-icons'
import { GiPresent } from 'react-icons/gi'
import { MdDiscount } from 'react-icons/md'
import { RiEarthFill } from 'react-icons/ri'
import { IoCalendarClear } from 'react-icons/io5'

const AllBenefits = [
	{
		icon: <GiPresent/> ,
		title: 'Free Welcome Box',
		content: 'Prime Members get a free gift box with sample and full size surprises.'
	},
	{
		icon: <MdDiscount />,
		title: '15% Completion discount',
		content: 'Enjoy a 15% discount on your baby registry, up to $300 in Savings.'
	},
	{
		icon: <IoCalendarClear />,
		title: 'Free 1 Year Return',
		content: 'Return Eligible gifts from your registry for up to 365 days.'
	},
	{
		icon: <RiEarthFill />,
		title: 'Earth Biggest Selection',
		content: 'Discover registry essentials and more for you and baby, whatever your style or budget'
	}
]

type BenefitCardType = {
	icon: any,
	title: string,
	content: string
}

function BenefitCard ({ icon, title, content }: BenefitCardType) {
	return (
		<div className='benefit-card'>
			<span> {icon} </span>

			<span> {title} </span>

			<div> {content} </div>
		</div>
	)
}

export function Benefits () {
	return (
		<div className='benefits'>
			<div className='benefits-top'>
				<span> Baby Registry Benefits </span>

				<span>
					lorem ipsum folsdfgh fghjmk f jkg hb h mj mc hv lorem ipsum folsdfgh fghjmk f jkg hb h mj mc hv
				</span>
			</div>

			<div className='benefits-cnt'>
				{
					AllBenefits.map((item, i) => (
						<BenefitCard key={'benefit ' + i} icon={item.icon} title={item.title} content={item.content} />
					))
				}
			</div>
		</div>
	)
}